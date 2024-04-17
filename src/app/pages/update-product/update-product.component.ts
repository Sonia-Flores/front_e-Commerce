import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

    productService = inject(ProductsService);
    router = inject(Router);

    constructor() {
      this.formularioUpdate = new FormGroup({
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

        categories: new FormControl(null, [
          Validators.required,
        ]),

      });

  }
  
  async onSubmit() {
    if (this.formularioUpdate.valid) {
      try {
        const response = await this.productService.create(this.formularioUpdate.value);  //Método de prueba a espera de poner el correspondiente
        this.formularioUpdate.reset();
        // this.router.navigateByUrl('/');    //A espera de linckar correctamente con el detalle de producto.
      } catch (error) {
        Swal.fire('Error', 'Se ha producido un error: ');
        this.formularioUpdate.reset();
      }
    } else {
      Swal.fire('Error', 'Please complete the form correctly.', 'error');
    }
  }

}

