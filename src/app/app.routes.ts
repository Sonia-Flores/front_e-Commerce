import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    // HOME index.html

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },



    // api/users/register (@Cristian)
    // api/users/login (@Cristian)

    // api/categories/:categoryId
    // api/products/favorites
    // api/products/featured

    // {path: 'products/:productId', component: DetailProductComponent}

    // api/orders/new

    // { path: '**', redirectTo: '/' }

];
