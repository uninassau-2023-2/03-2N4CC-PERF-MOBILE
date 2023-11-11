import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';
import { ViaCepService } from '../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscarPokemon: string = '52011210';
  areaBusca: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };
  pokemonDetails: any = {};
  total: number = 0;
  totalAbilities: number = 0; // Adicione esta propriedade

  constructor(
    private pokeAPIService: PokeAPIService,
    private viaCepService: ViaCepService
  ) {}

  buscarPokemon() {
    this.viaCepService.getViaCEPService(this.areaBuscarPokemon)
      .subscribe((value) => {
        this.areaBusca.logradouro = JSON.parse(JSON.stringify(value))['logradouro'];
        this.areaBusca.bairro = ', ' + JSON.parse(JSON.stringify(value))['bairro'];
        this.areaBusca.localidades = ' - ' + JSON.parse(JSON.stringify(value))['localidade'];
        this.areaBusca.uf = '-' + JSON.parse(JSON.stringify(value))['uf'];
      });

    this.pokeAPIService.getPokeApiService()
      .subscribe((pokemonDetails) => {
        this.pokemonDetails = pokemonDetails;
        this.calculateTotal(); // Calcule o total de height e weight
        this.calculateTotalAbilities(); // Calcule o total de abilities
      });
  }

  calculateTotal() {
    this.total = this.pokemonDetails.height + this.pokemonDetails.weight;
  }

  calculateTotalAbilities() {
    this.totalAbilities = this.pokemonDetails.abilities.length;
  }

}