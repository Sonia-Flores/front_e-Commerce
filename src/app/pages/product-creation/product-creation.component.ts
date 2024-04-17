import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-creation',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-creation.component.html',
  styleUrl: './product-creation.component.css'
})
export class ProductCreationComponent {

    formularioCreate: FormGroup;

    productService = inject(ProductsService);
    router = inject(Router);

    constructor() {
      this.formularioCreate = new FormGroup({
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
    if (this.formularioCreate.valid) {
      try {
        const response = await this.productService.create(this.formularioCreate.value);  //Método de prueba a espera de poner el correspondiente
        this.formularioCreate.reset();
      } catch (error) {
        Swal.fire('Error', 'Se ha producido un error: ');
        this.formularioCreate.reset();
      }
    } else {
      Swal.fire('Error', 'Please complete the form correctly.', 'error');
    }
  }

}
