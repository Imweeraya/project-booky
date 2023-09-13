import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StaticDataSource } from './storeModel/static.datasource';
import { ProductRepository } from './storeModel/product.repository';
import { CartModel } from './storeModel/cart.model';
import { Order } from './storeModel/order.model';


@NgModule({
  imports: [ HttpClientModule],
  providers: [
    ProductRepository,
    StaticDataSource,
    CartModel,
    Order,
    { provide: StaticDataSource }
  ],
})

export class ModelModule {
    
}