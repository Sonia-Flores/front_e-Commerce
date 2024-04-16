import { Component } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'list-product',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  arrProducts: Product[] = [];



}
