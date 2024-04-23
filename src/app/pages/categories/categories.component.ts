import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { CategoriesService } from '../../services/categories.service';
import { CardProductComponent } from '../../components/products/card-product/card-product.component';
import { ListProductComponent } from '../../components/products/list-product/list-product.component';
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

  arrayProducts:Product[]=[];
  
 categories: any
product: any;
$index: any;

  async ngOnInit(){
 
   try {
    this.categories= await this.categoriesService.getAll();
    console.log(this.categories)
   } catch (error: any) {
    console.log(error.message)
   }
  }


  async loadCategory(category_id: number){
  try {
    this.arrayProducts= await this.productsService.getProductsByCategory(category_id);
    console.log(this.arrayProducts)
  } catch (error) {
    
  }
}
}
   
   


 

