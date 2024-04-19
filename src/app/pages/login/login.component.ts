import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [NavBarComponent, FooterComponent, ReactiveFormsModule],
})
export class LoginComponent {
  formularioLogin: FormGroup;
  demoMode = false;
  usuarioService = inject(UsuariosService);
  router = inject(Router);

  constructor() {
    this.formularioLogin = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.formularioLogin.valid) {
      try {
        const response: any = await this.usuarioService.login(
          this.formularioLogin.value
        );
        if (response.success) {
          localStorage.setItem('token', response.token);
          this.showWelcomeAlert(this.formularioLogin.value.email);
          this.formularioLogin.reset();
          this.router.navigateByUrl('/home');
          this.formularioLogin.reset();
          return;
        } else {
          Swal.fire({
            title: 'Error',
            text: 'The email and/or password are incorrect',
            icon: 'error',
          });
          
        }
      } catch (error) {
        Swal.fire('Error', 'Se ha producido un error.');
        this.formularioLogin.reset();
      }
    } else {
      Swal.fire('Error', 'Please complete the form correctly.', 'error');
    }
  }

  async user() {
    try {
      const user: any = {
        email: 'ashley@example.com',
        password: '123456',
      };
      const response: any = await this.usuarioService.login(user);
      if (response.success) {
        localStorage.setItem('token', response.token);
        this.showWelcomeAlert(user.email);
        this.router.navigateByUrl('/home');
        return;
      } else {
        Swal.fire('Error', 'Se ha producido un error.');
        this.formularioLogin.reset();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al realizar la operación',
      });
    }
  }

  async admin() {
    try {
      const admin: any = {
        email: 'jennifer@example.com',
        password: '12345',
      };
      const response: any = await this.usuarioService.login(admin);
      if (response.success) {
        localStorage.setItem('token', response.token);
        this.showWelcomeAlert(admin.email);
        //TODO: Que el admin vaya a su dashboard
        this.router.navigateByUrl('/home');
        return;
      } else {
        Swal.fire('Error', 'Se ha producido un error.');
        this.formularioLogin.reset();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al realizar la operación',
      });
    }
  }

  async showWelcomeAlert(email: string) {
    const userData = await this.usuarioService.getUserByEmail(email);
    Swal.fire({
      title: 'Success!',
      text: `Welcome ${userData.name}`,
    });
  }

  toggleDemoMode() {
    this.demoMode = !this.demoMode;
  }
}
