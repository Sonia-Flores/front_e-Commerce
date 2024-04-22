import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-orders-management',
  standalone: true,
  imports: [],
  templateUrl: './orders-management.component.html',
  styleUrl: './orders-management.component.css'
})
export class OrdersManagementComponent {

  router = inject(Router);

  decodedToken: any = "";

  // orderStatus: recived, paid, processing, sent, recived, closed

  ngOnInit() {

    //  Recoge los datos del usuario
    if (localStorage['token']) {
      this.decodedToken = jwtDecode(localStorage['token']);
    }
    //  Si el usuario no està logeado o no es admin redirige a la home
    if (!localStorage['token'] || this.decodedToken.role !== 'admin') {
      this.router.navigateByUrl("/home");
    }


  }
}
