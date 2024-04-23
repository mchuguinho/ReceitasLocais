import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VianaPageRoutingModule } from './viana-routing.module';

import { VianaPage } from './viana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VianaPageRoutingModule
  ],
  declarations: [VianaPage]
})
export class VianaPageModule {}
