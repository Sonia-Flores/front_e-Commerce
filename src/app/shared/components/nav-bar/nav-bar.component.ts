import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../../data/interfaces/usuario.interface';
import { UsuariosService } from '../../../services/usuarios.service';


@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  router = inject(Router);

  usuariosService = inject(UsuariosService);

  decodedToken: any = "";
  arrOrders: any = [];
  arrUsers: User[] = [];

  onClickLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }


  async ngOnInit() {

    if (localStorage['token']) {
      this.decodedToken = jwtDecode(localStorage['token']);

    }

    // User
    //   if (!localStorage['token'] || this.decodedToken.role !== 'admin') {
    //     this.router.navigateByUrl('/home');

    //   }
    // }

  }
}




