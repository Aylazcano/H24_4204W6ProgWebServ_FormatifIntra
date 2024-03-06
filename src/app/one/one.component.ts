import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/models/pokemon';
import { PokeapiService } from 'src/services/pokeapi.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  // pokemonName : string | null = null;
  pokemon : Pokemon | null = null;
  pokemonName ? : string;

  constructor(public pokeApi : PokeapiService, public data: PokeapiService, public route : ActivatedRoute) { }

  ngOnInit() {
    
  }

  // créer une fonction qui est appelée quand je clique sur le bouton rechercher

  async btnSearchPokemon() : Promise<void>{
    if(this.pokemonName){
      this.pokemon = await this.pokeApi.searchPokemon(this.pokemonName);
    }
  }
}
