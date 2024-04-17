import { Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


export const routes: Routes = [
    // HOME index.html

    
    { path: 'product/:idproduct', component: ProductDetailComponent }

    // api/users/register (@Cristian)
    // api/users/login (@Cristian)

    // api/categories/:categoryId
    // api/products/favorites
    // api/products/featured

    // {path: 'products/:productId', component: DetailProductComponent}

    // api/orders/new

    // { path: '**', redirectTo: '/' }

];
