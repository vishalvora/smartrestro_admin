import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersdetialsPage } from './customersdetials.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersdetialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersdetialsPageRoutingModule {}
