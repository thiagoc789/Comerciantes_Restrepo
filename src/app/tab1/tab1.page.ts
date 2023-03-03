import { Component, OnInit, ViewChild } from '@angular/core';
import { Negocios } from '../models/models';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  negocios: Negocios[];


  constructor(private database: FirestoreService) {}

  ngOnInit() {
    this.getNegocios()

  }

  getNegocios(){

    this.database.getCollection<Negocios>('Pruebas').subscribe(res => {
      console.log('esta es la lectura', res)
      this.negocios = res;
      console.log('Negocios = ', this.negocios)
    })

  }


  



  




}


