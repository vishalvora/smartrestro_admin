import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersdetialsPageRoutingModule } from './customersdetials-routing.module';

import { CustomersdetialsPage } from './customersdetials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersdetialsPageRoutingModule
  ],
  declarations: [CustomersdetialsPage]
})
export class CustomersdetialsPageModule {}
