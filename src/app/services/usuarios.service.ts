import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../data/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl = 'http://localhost:3000/api/users';

  private httpClient = inject(HttpClient);

  create(nuevoUsuario: User) {
    return firstValueFrom(
      this.httpClient.post(`${this.baseUrl}/new`, nuevoUsuario)
    );
  }

  login(body: any) {
    return firstValueFrom(this.httpClient.post(`${this.baseUrl}/login`, body));
  }

  getUserByEmail(email: string) {
    return firstValueFrom(
      this.httpClient.get<User>(`${this.baseUrl}/email/${email}`)
    );
  }
}
