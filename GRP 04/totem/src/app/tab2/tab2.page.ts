import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  isAlertOpen = false;

  constructor(public alertController: AlertController, public senhasService: SenhasService) {}

  async showAlert() {
    var senhasqtd = this.senhasService.senhasTotal
    var senhasexame = this.senhasService.senhasArray["SE"]

    const alert = await this.alertController.create({
      header: "Senhas: "+senhasexame,
      subHeader: `String text ${senhasqtd}`,
      message: 'Jonas Ferreira da Silva',
      buttons: ['OK'],
    });

    await alert.present();
    alert.onDidDismiss().then(() => {
      this.isAlertOpen = false;
    });
  }
}
