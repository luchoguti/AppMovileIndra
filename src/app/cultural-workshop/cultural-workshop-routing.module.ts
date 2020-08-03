import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CulturalWorkshopPage } from './cultural-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: CulturalWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturalWorkshopPageRoutingModule {}
