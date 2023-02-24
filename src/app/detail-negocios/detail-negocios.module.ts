import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { IonicModule } from '@ionic/angular';

import { DetailNegociosPageRoutingModule } from './detail-negocios-routing.module';

import { DetailNegociosPage } from './detail-negocios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailNegociosPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [DetailNegociosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailNegociosPageModule {}
