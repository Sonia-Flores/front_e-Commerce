import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { Product } from '../../../interfaces/product.interface';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'list-product',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  arrProducts: Product[] = [];


  productsService = inject(ProductsService);


  async ngOnInit() {
    const response = await this.productsService.getFeaturedProducts();
    console.log(response);
    this.arrProducts = response;
  }

  // async ngOnInit() {
  //   const response = await this.productsService.getAll();
  //   console.log(response);
  //   this.arrProducts = response;
  // }



}



