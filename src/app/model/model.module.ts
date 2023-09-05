import { NgModule } from '@angular/core';

import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { CartModel } from './cart.model';


@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    CartModel,
    { provide: StaticDataSource }
  ],
})

export class ModelModule {
    
}