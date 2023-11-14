import { PhotoService } from './../services/photo.service';
import { Component } from '@angular/core';
import { PokeAPIService } from '../services/poke-api.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private pokeAPIService: PokeAPIService, public photoService: PhotoService, ) {}

  pokemonDetails: any = {};
  totalAbilities: number = 0;
  comparisonResultColor: string = '';
  comparisonResultText: string = '';

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }

  gerarPokemonAleatorio() {
    const pokemonId = Math.floor(Math.random() * 100) + 1;

    this.pokeAPIService.getPokeApiService(pokemonId)
      .subscribe((pokemonDetails) => {
        this.pokemonDetails = pokemonDetails;
        this.calculateTotalAbilities();

      });
  }

  calculateTotalAbilities() {
    this.totalAbilities = this.pokemonDetails.abilities.length;
  }


}
