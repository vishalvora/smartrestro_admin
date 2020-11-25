import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoredisablePageRoutingModule } from './storedisable-routing.module';

import { StoredisablePage } from './storedisable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoredisablePageRoutingModule
  ],
  declarations: [StoredisablePage]
})
export class StoredisablePageModule {}
