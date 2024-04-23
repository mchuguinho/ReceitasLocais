import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VianaPage } from './viana.page';

const routes: Routes = [
  {
    path: '',
    component: VianaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VianaPageRoutingModule {}
