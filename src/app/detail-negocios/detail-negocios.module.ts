import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailNegociosPageRoutingModule } from './detail-negocios-routing.module';

import { DetailNegociosPage } from './detail-negocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailNegociosPageRoutingModule
  ],
  declarations: [DetailNegociosPage]
})
export class DetailNegociosPageModule {}
