import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {
  public inputNovaSenha: string = '';
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  constructor() { }

  // Método para incrementar a contagem de senhas gerais
  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  // Método para incrementar a contagem de senhas prioritárias
  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  // Método para incrementar a contagem de senhas de exame
  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  // Inicialize senhasArray como um objeto vazio
  public senhasArray: { [key: string]: string[] } = {
    'SG': [],
    'SP': [],
    'SE': [],
  };

  novaSenha(tipoSenha: string = '') {
    if (tipoSenha === 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
    } else if (tipoSenha === 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SP'].push(this.inputNovaSenha);
    } else if (tipoSenha === 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SE'].length + 1).toString().padStart(2, '0');
      this.senhasArray['SE'].push(this.inputNovaSenha);
    }
    console.log(this.senhasArray);
  }
}
