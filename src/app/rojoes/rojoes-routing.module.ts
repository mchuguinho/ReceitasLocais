import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RojoesPage } from './rojoes.page';

const routes: Routes = [
  {
    path: '',
    component: RojoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RojoesPageRoutingModule {}
