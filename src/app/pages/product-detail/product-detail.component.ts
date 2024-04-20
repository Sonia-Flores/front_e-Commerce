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
        
    }

 
    ngOnInit() {

        this.activatedRoute.params.subscribe(async (params) => {
        const token = localStorage['token']
        const decodedToken: any = jwtDecode(token);
        this.user_id = decodedToken.id;
        

        try {
            
            this.product = await this.productsService.getById(params['idproduct']);

            if( this.product.id === undefined) {
                Swal.fire( { 
                    title: "Error",
                    text: "Product doesn`t exist, redirect to home",
                    icon: "error"
                });

                this.router.navigateByUrl("/home");

            }
            
            const response: any = await this.commentService.getCommentsByProductId(params['idproduct']);
            this.category = await this.categoriesService.getById(this.product.categories_id);
            this.arrComments = response;

        } catch (error: any) {

            Swal.fire( { 
                title: "Error",
                text: "Error in server service",
                icon: "error"
            });

            this.router.navigateByUrl("/home");
            
        }


        })


    }

    // Coment Box

    constructor() {
    this.formularioComment = new FormGroup({
        users_id: new FormControl( 0, [
            Validators.required,
        ]),
        products_id: new FormControl( 0, [
            Validators.required,
        ]),
        text: new FormControl( null, [
            Validators.required,
        ]),

    });

    }


    async onSubmit() {

        // const newComent = {
        //     users_id: this.user_id,
        //     products_id: this.product.id,
        //     text: this.formularioComment.value.text
        // }        

        this.formularioComment.value.users_id = this.user_id;
        this.formularioComment.value.products_id = this.product.id;

        if (this.formularioComment.valid) {
            try {
                const response = await this.commentService.create(this.formularioComment.value);
                console.log(response);
                this.formularioComment.reset();
            } catch (error) {
                Swal.fire('Error');
                this.formularioComment.reset();
            }

        } else {
            Swal.fire('Error', 'Please complete the form correctly.', 'error');
        }


    }


}
