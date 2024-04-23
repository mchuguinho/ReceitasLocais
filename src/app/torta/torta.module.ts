import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TortaPageRoutingModule } from './torta-routing.module';

import { TortaPage } from './torta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TortaPageRoutingModule
  ],
  declarations: [TortaPage]
})
export class TortaPageModule {}
