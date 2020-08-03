import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalActivityAddPage } from './modal-activity-add.page';

const routes: Routes = [
  {
    path: '',
    component: ModalActivityAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalActivityAddPageRoutingModule {}
