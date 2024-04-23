import { Component, ɵɵqueryRefresh } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  arrProducts: Product[] = []  ;
  total: any;
  totalItems: number = 0;
  productGroup: {
    id: number;
    product: Product;
    quantity: number;
    total: number;
  } [] = [];

    

  ngOnInit() {
    this.arrProducts = JSON.parse(localStorage.getItem('kart') || '[]');
    this.RefreshTotal();
    this.TotalItems();
    this.GroupProducts();

  }

  RefreshTotal() {
    this.total = this.arrProducts.reduce((acumulador: any, currentProduct: { price: any; }) => acumulador + currentProduct.price, 0);
    this.total = this.total.toFixed(2);
  }

  TotalItems() {
    this.totalItems = this.arrProducts.length;
  }

  DeleteItem(id: number) {

    const index = this.arrProducts.findIndex(prod => prod.id === id)
    if ( this.productGroup[index].quantity > 1 ) {
      this.productGroup[index].quantity --
    } else {
      this.productGroup.splice(index, 1);
    }

    this.RefreshArrProducts();
    this.RefreshTotal();
    this.TotalItems();
  
  }

  GroupProducts() {
    for (const product of this.arrProducts) {
      const productFound = this.productGroup.find(prod => prod.id === product.id)
      if ( productFound) {
        productFound.quantity ++
        productFound.total += product.price
      } else {
        this.productGroup.push({
          id: product.id,
          product: product,
          quantity: 1,
          total: product.price,
        });


      }
    }
  }

  RefreshArrProducts() {
    const arrTotal: Product[] = [];
    for ( let item of this.productGroup ) {
      for ( let i=0; i<item.quantity; i++) {
        arrTotal.push(item.product);
      }

    }
    this.arrProducts = arrTotal;
    localStorage.setItem('kart', JSON.stringify(this.arrProducts));


  }

}
