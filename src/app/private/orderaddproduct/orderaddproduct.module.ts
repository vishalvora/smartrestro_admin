import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderaddproductPageRoutingModule } from './orderaddproduct-routing.module';

import { OrderaddproductPage } from './orderaddproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderaddproductPageRoutingModule
  ],
  declarations: [OrderaddproductPage]
})
export class OrderaddproductPageModule {}
