import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCulturalWorkshopPage } from './detail-cultural-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCulturalWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCulturalWorkshopPageRoutingModule {}
