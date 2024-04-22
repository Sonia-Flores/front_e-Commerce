import { Routes } from "@angular/router";
import { CategoryDashboardComponent } from "./category-dashboard/category-dashboard.component"

import { ProductDashboardComponent } from "./product-dashboard/product-dashboard.component"
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";


export const adminRoutes: Routes = [
    { path: '', component: MainDashboardComponent },
    { path: 'categories', component: CategoryDashboardComponent },
    { path: 'products', component: ProductDashboardComponent }
];