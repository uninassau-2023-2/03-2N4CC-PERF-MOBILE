import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  isAlertOpen = false;

  constructor(public alertController: AlertController) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '01063866',
      message: 'Jonas Ferreira da Silva',
      buttons: ['OK'],
    });

    await alert.present();
    alert.onDidDismiss().then(() => {
      this.isAlertOpen = false;
    });
  }
}
