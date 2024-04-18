import { Routes } from '@angular/router';


export const routes: Routes = [
    // HOME index.html

    { path: '', pathMatch: 'full', redirectTo: '/index.html' },

    // api/users/register (@Cristian)
    // api/users/login (@Cristian)

    // api/categories/:categoryId
    // api/products/favorites
    // api/products/featured

    // api/orders/new

    // { path: '**', redirectTo: '/' }

];
