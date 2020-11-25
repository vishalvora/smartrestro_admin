import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetradiusPage } from './setradius.page';

const routes: Routes = [
  {
    path: '',
    component: SetradiusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetradiusPageRoutingModule {}
