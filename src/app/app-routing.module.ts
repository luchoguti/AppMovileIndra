import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'cultural-workshop',
    loadChildren: () => import('./cultural-workshop/cultural-workshop.module').then( m => m.CulturalWorkshopPageModule)
  },
  {
    path: 'detail-cultural-workshop/:id',
    loadChildren: () => import('./detail-cultural-workshop/detail-cultural-workshop.module').then( m => m.DetailCulturalWorkshopPageModule)
  },
  {
    path: 'modal-list-inscription',
    loadChildren: () => import('./modal-list-inscription/modal-list-inscription.module').then( m => m.ModalListInscriptionPageModule)
  },
  {
    path: 'modal-activity-add',
    loadChildren: () => import('./modal-activity-add/modal-activity-add.module').then( m => m.ModalActivityAddPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
