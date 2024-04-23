import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RojoesPageRoutingModule } from './rojoes-routing.module';

import { RojoesPage } from './rojoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RojoesPageRoutingModule
  ],
  declarations: [RojoesPage]
})
export class RojoesPageModule {}
