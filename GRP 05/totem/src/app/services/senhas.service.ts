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
  public senhasArray: any = [];

  constructor() { }
  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }
  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }
  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }
  novaSenha (tipoSenha: string = ''){
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha
        +
        this.senhasGeral;
      this.senhasArray.push(this.inputNovaSenha);
      console.log(this.senhasArray)
    /* +
    (this.senhasArray['SG'].length + 1).toString().padStart (2, '0');
    this.senhasArray.SG.push(this.inputNovaSenha);
    */
    }else if (tipoSenha == 'SP') {
    this.somaPrior();
    this.inputNovaSenha =
      new Date().getFullYear().toString().substring (2, 4) +
      new Date().getMonth().toString().padStart (2, '0') +
      new Date().getDate().toString().padStart (2, '0') +
      '-' +
    tipoSenha
    + this.senhasPrior
    /*+
    (this.senhasArray['SP'].length + 1).toString().padStart (2, '0');
    this.senhasArray.SP.push(this.inputNovaSenha);
    */
    } else if (tipoSenha == 'SE'){
    this.somaExame();
    this.inputNovaSenha =
    new Date().getFullYear().toString().substring (2, 4) +
    new Date().getMonth().toString().padStart (2, '0') +
    new Date().getDate().toString().padStart (2, '0') +
    '-' +
    tipoSenha
    + this.senhasExame
    /*+
    (this.senhasArray['SE'].length + 1).toString().padStart (2, '0');
    this.senhasArray.SE.push (this.inputNovaSenha);
    console.log (this.senhasArray);*/
    }
    //console.log(this.senhasArray);
  }
}
