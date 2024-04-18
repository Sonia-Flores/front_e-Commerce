import { Component, inject } from '@angular/core';
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [NavBarComponent, FooterComponent, ReactiveFormsModule,]
})
export class LoginComponent {

    formularioLogin: FormGroup;

    usuarioService = inject(UsuariosService);
    router = inject(Router);

    constructor() {
      this.formularioLogin = new FormGroup({
        email: new FormControl(null, [
          Validators.required,
        ]),
        password: new FormControl(null, [
          Validators.required,
        ]),
      });

  }
  
  async onSubmit() {
    if (this.formularioLogin.valid) {
      try {
        const response: any = await this.usuarioService.login(this.formularioLogin.value);  
        console.log(response.token);
        if (response.success) {
           localStorage.setItem('token', response.token);
          Swal.fire('Success', 'Bienvenido.');
          this.formularioLogin.reset();
          this.router.navigateByUrl('/home');
          return
        } else {
        Swal.fire('Error', 'Se ha producido un error.');
          this.formularioLogin.reset();
        }
      } catch (error) {
        Swal.fire('Error', 'Se ha producido un error.');
        this.formularioLogin.reset();
      }
    } else {
      Swal.fire('Error', 'Please complete the form correctly.', 'error');
    }
  }

}
