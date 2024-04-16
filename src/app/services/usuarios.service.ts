import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { User } from "../data/interfaces/usuario.interface";





@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  create(value: any) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = 'http://localhost:3000/api/users';

  private httpClient = inject(HttpClient);

  registro(nuevoUsuario: User) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/registro`, nuevoUsuario)
    )
  }

}