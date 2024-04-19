import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Category } from "../interfaces/categories.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = 'http://localhost:3000/api/categories';

  private httpClient = inject(HttpClient);

  getById(category_id: number) {
    return firstValueFrom(this.httpClient.get<Category>(`${this.baseUrl}/${category_id}`))
  }


  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllCategories() {
    return firstValueFrom(
      this.httpClient.get<Category[]>(
        this.baseUrl
      )
    );
  }

}