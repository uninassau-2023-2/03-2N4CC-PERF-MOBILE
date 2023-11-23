import { ViaCepService } from './../services/via-cep.service';
import { PokeApiService } from './../services/poke-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscarPokemon: string=  '52011210';
  areaBuscar: any = {
    bairro:'',
    localidade:'',
    logradouro: '',
    uf:''
  };

  constructor(
    private PokeApiService: PokeApiService,
    private ViaCepService: ViaCepService
  ) { }

  buscarPokemon() {
    this.ViaCepService.getViaCepService(this.areaBuscarPokemon)
    .subscribe((value) => {
      this.areaBuscar.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBuscar.bairro= ', '+ JSON.parse(JSON.stringify(value))["bairro"];
      this.areaBuscar.localidade= ' - '+JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBuscar.uf= '-'+JSON.parse(JSON.stringify(value)) ['uf'];
    });

    this.PokeApiService.getPokeApiService();
  }
}
    
