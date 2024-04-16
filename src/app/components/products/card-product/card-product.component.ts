import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'card-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input() product: Product | null = null;

  onClick() {
    // Visit Product-Detail
  }


}
