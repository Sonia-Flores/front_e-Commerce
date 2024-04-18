import { Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { HeroComponent } from './components/hero/hero.component';


export const routes: Routes = [
    // HOME index.html

    
    { path: 'product/:idproduct', component: ProductDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HeroComponent }

    // api/users/register (@Cristian)
    // api/users/login (@Cristian)

    // api/categories/:categoryId
    // api/products/favorites
    // api/products/featured

    // {path: 'products/:productId', component: DetailProductComponent}

    // api/orders/new

    // { path: '**', redirectTo: '/' }

];
