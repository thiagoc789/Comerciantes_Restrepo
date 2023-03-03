import { Component, OnInit } from '@angular/core';
import { Prueba } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AlertController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-crear-negocio',
  templateUrl: './crear-negocio.component.html',
  styleUrls: ['./crear-negocio.component.scss'],
})
export class CrearNegocioComponent implements OnInit {

  negocio: Prueba = {
    id: null,
    nombre: '',
    descripcion: ''
  }

  constructor(private database: FirestoreService, 
    private alertController: AlertController,
    private interaction: InteractionService) { }

  ngOnInit() {

  }

  crearNuevoNegocio(){
    console.log(this.negocio)
    this.interaction.showLoading('Guardando nuevo negocio...')

    this.database.createDoc(this.negocio, 'Pruebas', this.negocio.nombre).then((res)=> {
      this.interaction.presentAlert(this.negocio.id, 'Negocio creado con exito')
      this.interaction.closeLoading()
    })
  }

  



}
