import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../../interfaces/product.interface';
import { Comment } from '../../interfaces/comments.interface';
import { Category } from '../../interfaces/categories.interface';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { CommentsService } from '../../services/comments.service';
import { switchAll } from 'rxjs';
import { formatCurrency } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    imports: [FormsModule, ReactiveFormsModule]
})
export class ProductDetailComponent {



    formularioComment: FormGroup;

    categoriesService = inject(CategoriesService);
    commentService = inject(CommentsService);
    productsService = inject(ProductsService);
    activatedRoute = inject(ActivatedRoute);


    router = inject(Router);

    product: Product | any;
    arrComments: Comment[] = [];
    category: Category | any;
    user_id: number = 0;



    onClickFavorite() {
        // TODO: make this work
    }


    ngOnInit() {

        if (localStorage['token']) {
            const decodedToken: any = jwtDecode(localStorage['token']);
            this.user_id = decodedToken.id;
        }

        this.activatedRoute.params.subscribe(async (params) => {

            let errorText = "Error acquiring category";

            try {
                this.product = await this.productsService.getById(params['idproduct']);

                if (this.product.id === undefined) {
                    Swal.fire({
                        title: "Error",
                        text: "Product doesn`t exist, redirect to home",    // ?
                        icon: "error"
                    });

                    // this.router.navigateByUrl("/home"); 
                    return

                }
                this.category = await this.categoriesService.getById(this.product.categories_id);
                errorText = "Error acquiring comments";

                this.arrComments = await this.commentService.getCommentsByProductId(params['idproduct']);

            } catch (error: any) {

                // Hacer un switch que mande un mensaje diferente en caso de no haber cargado el producto,  en caso de no haber comentarios o no haber categoria. ?

                Swal.fire({
                    title: "Error",
                    text: errorText,
                    icon: "error"
                });

                // this.router.navigateByUrl("/home");

            }


        })


    }

    // Coment Box

    constructor() {
        this.formularioComment = new FormGroup({
            users_id: new FormControl(0, [
                Validators.required,
            ]),
            products_id: new FormControl(0, [
                Validators.required,
            ]),
            text: new FormControl(null, [
                Validators.required,
            ]),

        });

    }

    async onSubmit() {

        this.formularioComment.value.users_id = this.user_id;
        this.formularioComment.value.products_id = this.product.id;

        if (this.user_id === 0) {
            Swal.fire({
                title: "Error",
                text: "You must login to share your thoughts",
                icon: "error"
            });

        } else if (this.formularioComment.valid && this.user_id !== 0) {
            try {
                const response = await this.commentService.create(this.formularioComment.value);
                console.log(response);
                Swal.fire({
                    title: "success",
                    text: "Thanks for your time",
                    icon: "success"
                });
                this.formularioComment.reset();
            } catch (error) {
                Swal.fire({
                    title: "Error",
                    text: "We're sorry. Something went wrong",
                    icon: "error"
                });
            }

        } else {
            Swal.fire({
                title: "Error",
                text: "Please complete the form correctly",
                icon: "error"
            });
        }


    }


}
