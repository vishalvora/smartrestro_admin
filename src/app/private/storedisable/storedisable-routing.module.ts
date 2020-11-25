import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoredisablePage } from './storedisable.page';

const routes: Routes = [
  {
    path: '',
    component: StoredisablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoredisablePageRoutingModule {}
