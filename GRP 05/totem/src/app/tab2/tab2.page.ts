import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public senhasChamadas: any = [];

  constructor(private senhasService: SenhasService) {}

  chamaSenhas() {
    this.senhasChamadas.push(this.senhasService.senhasArray.pop());
  }

}
