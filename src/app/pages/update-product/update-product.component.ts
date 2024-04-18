import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
    formularioUpdate: FormGroup;

  activatedRoute = inject(ActivatedRoute);
    productService = inject(ProductsService);
    router = inject(Router);

    constructor() {
      this.formularioUpdate = new FormGroup({
        id: new FormControl(null, [Validators.required

        ]),
        title: new FormControl(null, [
          Validators.required,
        ]),

        description: new FormControl(null, [
          Validators.required,
        ]),

        price: new FormControl(null, [
          Validators.required,
        ]),

        image: new FormControl(null, [
          Validators.required,
        ]),

        featured: new FormControl(),

        categories_id: new FormControl(null, [
          Validators.required,
        ]),

      });
    }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      try {
        const response = await this.productService.getById(params['product_id']);
        if (!response.id) {
          Swal.fire('Error', 'Este producto no existe.')
          return
        }
        this.formularioUpdate.setValue(response);
      } catch (error:any) {
        Swal.fire(error.message)
      }
    });
    }
  
  async onSubmit() {
    try {
      const response = await this.productService.updateProduct(this.formularioUpdate.value);  
      this.formularioUpdate.setValue(response);
        Swal.fire('Success', 'Se ha actualizado el producto.')
      } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Se ha producido un error: ');
      }
   
  }

}

