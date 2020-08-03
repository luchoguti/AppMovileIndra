import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalActivityAddPageRoutingModule } from './modal-activity-add-routing.module';

import { ModalActivityAddPage } from './modal-activity-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalActivityAddPageRoutingModule
  ],
  declarations: [ModalActivityAddPage]
})
export class ModalActivityAddPageModule {}
