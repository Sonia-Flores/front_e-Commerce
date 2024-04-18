import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCreationComponent } from './pages/product-creation/product-creation.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';


export const routes: Routes = [
    // HOME index.html

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },

    { path: 'products/new', component: ProductCreationComponent },
    { path: 'products/:product_id', component: UpdateProductComponent },

    { path: '**', redirectTo: 'home' }
    
    

    // api/users/register (@Cristian)
    // api/users/login (@Cristian)

    // api/categories/:categoryId
    // api/products/favorites
    // api/products/featured

    // api/orders/new

    // { path: '**', redirectTo: '/' }

];
