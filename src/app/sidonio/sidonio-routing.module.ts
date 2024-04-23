import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidonioPage } from './sidonio.page';

const routes: Routes = [
  {
    path: '',
    component: SidonioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidonioPageRoutingModule {}
