import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { StaticDataSource } from './static.datasource';


@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  
  // constructor(private dataSource: StaticDataSource) {
  //   this.dataSource.getProducts().subscribe((data) => {
  //     this.products = data;
  //     this.categories = data
  //       .map((p) => p.category ?? '(None)')
  //       .filter((c, index, array) => array.indexOf(c) == index)
  //       .sort();
  //   });
  // }

  constructor(private http: HttpClient) {
    this.fetchProductsAndCategories();
  }
  
  fetchProductsAndCategories() {
    this.http.get<any>('http://localhost:4000/api/booky/GetProduct')
      .pipe(
        catchError((error) => {
          console.error('Error fetching data:', error);
          return [];
        })
      )
      .subscribe((data) => {
        this.products = data;
        // this.categories = data
        //  .map((p: { category: any; }) => p.category ?? '(None)')
        //  .filter((c: any, index: any, array: string | any[]) => array.indexOf(c) == index)
        //  .sort();
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

  
  // getCategories(): string[] {
  //   return this.categories;
  // }

  filterProductByName(name: string): Product[] {
    const lowercaseName = name.toLowerCase();
    return this.products.filter((p) => p.name?.toLowerCase().includes(lowercaseName));
  }
  
  
  
  
}
