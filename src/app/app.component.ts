import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { LoginComponent } from './pages/login/login.component';



import { CardProductComponent } from './components/products/card-product/card-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavBarComponent, HeroComponent, CardProductComponent, ListProductComponent, SpacerComponent, RegisterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_e-Commerce';
}