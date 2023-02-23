import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailNegociosPage } from './detail-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: DetailNegociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailNegociosPageRoutingModule {}
