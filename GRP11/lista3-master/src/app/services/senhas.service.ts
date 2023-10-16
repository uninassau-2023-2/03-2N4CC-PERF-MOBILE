import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;
  inputNovaSenha: any;
  senhasArray: any;

  somaGeral () { this.senhasGeral++;  this.senhasTotal++; }
  somaPrior () {this.senhasPrior++; this.senhasTotal++; }
  somaExame () {this.senhasExame++; this.senhasTotal++; }

  novaSenha (typeSenha: string = ''): void {
    if (typeSenha == "SG") {
      this.somaGeral () ;
      this.inputNovaSenha =
        new Date() .getFullYear() .toString() .substring(2, 4) +
        new Date() .getMonth() .toString() .padStart(2, '0') +
        new Date() .getDay() .toString() .padStart(2, '0') +
        '-' +
        typeSenha;
    (this.senhasArray ['SG'] .length + 1) .toString() .padStart(2, '0')
    this.senhasArray.push (this.inputNovaSenha) ;
    console.log (this.senhasArray);
   } else if (typeSenha == "SP") {;
      this.somaPrior();
      this.inputNovaSenha =
        new Date () .getFullYear() .toString() .substring(2,4) +
        new Date () .getMonth() .toString() .padStart (2,'0') +
        new Date () .getDay() .toString() .padStart(2, '0') +
        '-' +
        typeSenha;
        (this.senhasArray ["SP"] .length + 1) .toString() .padStart(2, '0');
        this.senhasArray.push (this.inputNovaSenha) ;
    } else if (typeSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date () .getFullYear() .toString() .substring(2,4) +
        new Date () .getMonth() .toString() .padStart (2,'0') +
        new Date () .getDay() .toString() .padStart(2, '0') +
      '-' +
      typeSenha +
      (this.senhasArray['SE'].length +1) .toString() .padStart(2, '0');
    this.senhasArray.push(this.inputNovaSenha);

    }
    console.log (this.senhasArray);
  }
  constructor() { }
}


