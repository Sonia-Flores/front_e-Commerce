import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../card-product/card-product.component';
import { Product } from '../../../interfaces/product.interface';
import { ProductsService } from '../../../services/products.service';
import { CategoriesService } from '../../../services/categories.service';
import { SpacerComponent } from '../../spacer/spacer.component';
import { RouterLink } from '@angular/router';
import { Category } from '../../../interfaces/category.interface';

@Component({
  selector: 'list-product',
  standalone: true,
  imports: [CardProductComponent, SpacerComponent, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  arrProducts: Product[] = [];
  arrProductsInit: Product[] = [];
  prodByCats: Product[] = [];
  productsGroups: Product[][] = [];
  allCategories: Category[] = [];
  productsByCategory: { [categoryId: number]: Product[] } = {};
  
  category: Category | null = null;

  productsService = inject(ProductsService);
  categoriesService = inject(CategoriesService);

  async ngOnInit() {
    // FEATURED Products
    this.arrangeProducts();

    // All Categories
    this.allCategories = await this.categoriesService.getAllCategories();


    // Products BY CATEGORIES: Store products by category id
    for (const category of this.allCategories) {
      const categoryProducts = await this.productsService.getProductsByCategory(category.id);
      if (categoryProducts.length > 0) { // Check if categoryProducts array is not empty
        this.prodByCats = categoryProducts;
        this.distributeProducts(category.id);
      }
    }
  }

  //  FEATURED Products
  async arrangeProducts(): Promise<void> {
    const productsByGroup = 4;
    try {
      const featuredProducts = await this.productsService.getFeaturedProducts();
      for (let i = 0; i < featuredProducts.length; i += productsByGroup) {
        this.productsGroups.push(featuredProducts.slice(i, i + productsByGroup));
      }
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  }



  // DISTRIBUTE Products BY CATEGORIES considering Category ID
  distributeProducts(categoryId: number) {
    const products = this.prodByCats.filter(product => product.categories_id === categoryId);

    if (!this.productsByCategory[categoryId]) {
      this.productsByCategory[categoryId] = []; // Si la categoría no existe en el objeto, inicialízala como un arreglo vacío
    }

    this.productsByCategory[categoryId] = this.productsByCategory[categoryId].concat(products).slice(-4);
  }


}
