import { NgModule } from '@angular/core';

import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { CartModel } from './cart.model';
import { Order } from './order.model';


@NgModule({
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