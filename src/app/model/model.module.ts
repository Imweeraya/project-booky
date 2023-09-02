import { NgModule } from '@angular/core';

import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';


@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    { provide: StaticDataSource }
  ],
})

export class ModelModule {
    
}