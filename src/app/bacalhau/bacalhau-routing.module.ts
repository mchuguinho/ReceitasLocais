import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BacalhauPage } from './bacalhau.page';

const routes: Routes = [
  {
    path: '',
    component: BacalhauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BacalhauPageRoutingModule {}
