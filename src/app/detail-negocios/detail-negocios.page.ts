import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { businesses } from '../imagenes';

@Component({
  selector: 'app-detail-negocios',
  templateUrl: './detail-negocios.page.html',
  styleUrls: ['./detail-negocios.page.scss'],
})
export class DetailNegociosPage implements OnInit {
  imagen: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const imagenId  = this.route.snapshot.paramMap.get('id');
    this.imagen = businesses.find(imagen => imagen.id === parseInt(imagenId!));
  }

}
