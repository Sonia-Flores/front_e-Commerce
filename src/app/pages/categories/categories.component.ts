import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  async ngOnInit(){
   try {
     this.arrayProducts= await this.productsService.getAll();
    console.log(this.arrayProducts)
   } catch (error: any) {
    console.log(error.message)
   }
   try {
    this.categories=this.categoriesService.getAll();
    console.log(this.categories)
   } catch (error: any) {
    console.log(error.message)
   }
  }

 

loadCategory(category_id: number){
  try {
   // this.arrayProducts= this.productsService.getProductsByCategory(category_id);
  } catch (error) {
    
  }
}
}
   
   


 

