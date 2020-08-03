import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalListInscriptionPageRoutingModule } from './modal-list-inscription-routing.module';

import { ModalListInscriptionPage } from './modal-list-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalListInscriptionPageRoutingModule
  ],
  declarations: [ModalListInscriptionPage]
})
export class ModalListInscriptionPageModule {}
