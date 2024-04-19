import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:3000/api/favorites';

  private httpClient = inject(HttpClient);

  getFavoritesByUserId(user_id: number) {
    return firstValueFrom( this.httpClient.get(`${this.baseUrl}/:user_id`))   //Implementar la ruta
  }

  getFavoritesByProductId(product_id: number) {
    return firstValueFrom( this.httpClient.get(`${this.baseUrl}/:product_id`))   //Implementar la ruta
  }
  
}