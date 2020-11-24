import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetradiusPageRoutingModule } from './setradius-routing.module';

import { SetradiusPage } from './setradius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetradiusPageRoutingModule
  ],
  declarations: [SetradiusPage]
})
export class SetradiusPageModule {}
