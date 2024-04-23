import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardProductComponent } from '../../components/products/card-product/card-product.component';
import { ListProductComponent } from '../../components/products/list-product/list-product.component';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Product } from '../../interfaces/product.interface';
@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [ReactiveFormsModule, CardProductComponent, ListProductComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  productsService = inject(ProductsService)
  categoriesService = inject(CategoriesService)
 // ordersService = inject(OrdersService)
  arrayProducts:Product[]=[];
  //en el ngOninit lanzar una peticion para recuperar todas las categorias
 categories: any
product: any;
$index: any;
productsOffer: Product[] | undefined

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

   filterOffers(){
  try {
    this.productsOffer =  this.arrayProducts.filter(product=> this.product.isOnOffer)
  } catch (error: any) {
    console.log(error.message)
  }
}
}

