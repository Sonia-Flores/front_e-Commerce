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
        const response = await this.usuarioService.create(this.formularioLogin.value);  //A la espera del método
        this.formularioLogin.reset();
        // this.router.navigateByUrl('/home');    //A espera de linckar correctamente
      } catch (error) {
        Swal.fire('Error', 'Se ha producido un error: ');
        this.formularioLogin.reset();
      }
    } else {
      Swal.fire('Error', 'Please complete the form correctly.', 'error');
    }
  }

}
