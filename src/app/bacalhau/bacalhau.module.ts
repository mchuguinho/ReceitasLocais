import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BacalhauPageRoutingModule } from './bacalhau-routing.module';

import { BacalhauPage } from './bacalhau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BacalhauPageRoutingModule
  ],
  declarations: [BacalhauPage]
})
export class BacalhauPageModule {}
