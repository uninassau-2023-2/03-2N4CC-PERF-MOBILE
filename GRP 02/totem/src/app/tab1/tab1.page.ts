import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service'; // Importe o serviço SenhasService

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  //inputNovaSenha: string = '';

  // Crie uma variável pública para conter uma instância do serviço SenhasService
  constructor() {
    // Aqui você pode acessar o serviço SenhasService através da variável senhasService
  }

  // Outros métodos e lógica da classe Tab1Page
}
