import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Product } from "../interfaces/product.interface";






@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:3000/api/products';

  private httpClient = inject(HttpClient);

  create(nuevoProducto: Product) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/new`, nuevoProducto)
    )
  }

}