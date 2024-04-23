import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidonioPageRoutingModule } from './sidonio-routing.module';

import { SidonioPage } from './sidonio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidonioPageRoutingModule
  ],
  declarations: [SidonioPage]
})
export class SidonioPageModule {}
