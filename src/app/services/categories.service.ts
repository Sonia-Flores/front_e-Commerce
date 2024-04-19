import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Category } from "../interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = 'http://localhost:3000/api/categories';

  private httpClient = inject(HttpClient);

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