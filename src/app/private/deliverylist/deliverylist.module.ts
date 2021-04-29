import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliverylistPageRoutingModule } from './deliverylist-routing.module';

import { DeliverylistPage } from './deliverylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliverylistPageRoutingModule
  ],
  declarations: [DeliverylistPage]
})
export class DeliverylistPageModule {}
