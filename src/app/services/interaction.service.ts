import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading: any;

  constructor(private alertController: AlertController,
    private loadingCtrl: LoadingController,
    ) { }

  async presentAlert(id: any, mensaje: string) {
    const alert = await this.alertController.create({
      header: mensaje,
      message: 'Id:' + id,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showLoading(mensaje: string) {
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
    });

    this.loading.present();
  }

  async closeLoading() {
    this.loading.dismiss();
  }
}
