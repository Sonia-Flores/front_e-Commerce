import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCreationComponent } from './pages/product-creation/product-creation.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { UpdateCategoryComponent } from './pages/update-category/update-category.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { adminRoutes } from './components/admin/admin.routes';

export const routes: Routes = [
  // HOME index.html

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent, children: adminRoutes },

  { path: 'products/create/new', component: ProductCreationComponent },
  { path: 'products/update/:product_id', component: UpdateProductComponent },
  { path: 'categories/create', component: CreateCategoryComponent },
  { path: 'categories/update', component: UpdateCategoryComponent },

  { path: 'products/:idproduct', component: ProductDetailComponent },

  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'categories/create', component: CreateCategoryComponent },
  { path: 'categories/update/:category_id', component: UpdateCategoryComponent },

  { path: '**', redirectTo: '/home' }

  // api/categories/:categoryId
  // api/products/favorites
  // api/products/featured

  // api/orders/new

  // { path: '', redirectTo: '/' }
];
