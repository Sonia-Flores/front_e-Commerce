import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Product } from "../interfaces/product.interface";
import { Category } from "../interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:3000/api/products';

  private httpClient = inject(HttpClient);

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAll() {
    return firstValueFrom(
      this.httpClient.get<Product[]>(
        this.baseUrl
      )
    );
  }

  getFeaturedProducts() {
    return firstValueFrom(
      this.httpClient.get<Product[]>(
        `${this.baseUrl}/featured`
      )
    );
  }


  getProductsByCategory(categoryId: number) {
    return firstValueFrom(
      this.httpClient.get<Product[]>(
        `${this.baseUrl}/category/${categoryId}`
      )
    )
  }

  create(nuevoProducto: Product) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/new`, nuevoProducto)
    )
  }


}