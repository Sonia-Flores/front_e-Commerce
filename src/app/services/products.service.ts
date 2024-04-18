import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, firstValueFrom } from "rxjs";
import { Product } from "../interfaces/product.interface";

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

  create(nuevoProducto: Product) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/new`, nuevoProducto)
    )
  }


}