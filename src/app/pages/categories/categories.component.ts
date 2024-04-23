import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CategoriesService } from '../../services/categories.service';
import { CardProductComponent } from '../../components/products/card-product/card-product.component';
import { ListProductComponent } from '../../components/products/list-product/list-product.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ReactiveFormsModule, CardProductComponent, ListProductComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  productsService = inject(ProductsService)
  categoriesService = inject(CategoriesService)
 // ordersService = inject(OrdersService)
  arrayProducts:Product[]=[];
  //en el ngOninit lanzar una peticion para recuperar todas las categorias
 categories: any
product: any;
$index: any;

  async ngOnInit(){

   try {
    this.categories= await this.categoriesService.getAll();
   } catch (error: any) {
    console.log(error.message)
    Swal.fire(
      'Error!',
      `An error has occurred with the server. We apologize for the inconvenience.`,
      'error'
    );
   }
  }

 

  async loadCategory(category_id: number){
  try {
    this.arrayProducts= await this.productsService.getProductsByCategory(category_id);
  } catch (error) {
    Swal.fire(
      'Error!',
      `An error has occurred with the server. We apologize for the inconvenience.`,
      'error'
    );
  }
}
}
   
   


 

