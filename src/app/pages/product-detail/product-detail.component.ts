import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../../interfaces/product.interface';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    imports: [FormsModule, ReactiveFormsModule]
})
export class ProductDetailComponent {
    
    formularioComment: FormGroup;

    commentService = inject(CommentsService);
    router = inject(Router); 

    arrProducts: Product[] = [];
    arrComments: Comment[] = [];
 






    // Coment Box

    constructor() {
    this.formularioComment = new FormGroup({
        coment: new FormControl(null, [
        Validators.required,
        ]),

    });

    }


    async onSubmit() {
        if (this.formularioComment.valid) {
            try {
                // const response = await this.formularioComment.create(this.formularioComment.value);
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
