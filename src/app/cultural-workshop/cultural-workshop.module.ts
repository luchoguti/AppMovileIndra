import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturalWorkshopPageRoutingModule } from './cultural-workshop-routing.module';

import { CulturalWorkshopPage } from './cultural-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturalWorkshopPageRoutingModule
  ],
  declarations: [CulturalWorkshopPage]
})
export class CulturalWorkshopPageModule {}
