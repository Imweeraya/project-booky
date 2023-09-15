import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Product } from './app/model/storeModel/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4000/api/booky'; 

  constructor(private http: HttpClient) {}


  postProductData(productData: Product) {
    return this.http.post(`${this.apiUrl}/ADDProduct`, productData);
  }


  deleteProductByID(id:any){
    this.http.delete(`${this.apiUrl}/DeleteProduct/${id}`).subscribe(data=>{
    });
  }

  updateProductData(productId: string, updatedProductData: Product): Observable<any>{
    const updateUrl = `${this.apiUrl}/updateProduct/${productId}`;
    return this.http.put(updateUrl, updatedProductData);
  }

}
