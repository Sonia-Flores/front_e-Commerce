import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from "./shared/components/nav-bar/nav-bar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { LoginComponent } from './pages/login/login.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FooterComponent, SpacerComponent, RegisterComponent, NavBarComponent, HeroComponent, LoginComponent]
})
export class AppComponent {
  title = 'front_e-Commerce';
}
