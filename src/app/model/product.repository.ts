import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';


@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  
  constructor(private dataSource: StaticDataSource) {
    this.dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category ?? '(None)')
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getAllProducts(): Product[] {
    return this.products
  }

  getProductsCategory(category?: string): Product[] {
    return this.products.filter(
      (p) => category == undefined || category == p.category
    );
  }

  getProductsGenre(genre?: string): Product[]{
    return this.products.filter(
      (p) => genre == undefined || genre == p.genre
    );
  }


  getProductByID(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  
  getCategories(): string[] {
    return this.categories;
  }

  filterProductByName(name: string): Product[] {
    const lowercaseName = name.toLowerCase();
    return this.products.filter((p) => p.name?.toLowerCase().includes(lowercaseName));
  }
  
  
  
  
}
