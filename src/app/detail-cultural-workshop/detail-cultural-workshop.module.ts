import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCulturalWorkshopPageRoutingModule } from './detail-cultural-workshop-routing.module';

import { DetailCulturalWorkshopPage } from './detail-cultural-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCulturalWorkshopPageRoutingModule
  ],
  declarations: [DetailCulturalWorkshopPage]
})
export class DetailCulturalWorkshopPageModule {}
