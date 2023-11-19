import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service'; // Importe o serviço SenhasService

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  // Crie uma variável pública para conter uma instância do serviço SenhasService
  constructor(public senhasService: SenhasService) {
    // Aqui você pode acessar o serviço SenhasService através da variável senhasService
  }

  // Outros métodos e lógica da classe Tab3Page
}
