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
  jsonData: string | null=null
  favPokemonsList : Pokemon[] = [];
  pokemon: Pokemon | null = null;
  pokemonName?: string;

  constructor(public pokeApi: PokeapiService, public data: PokeapiService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.jsonData = localStorage.getItem("favPokemonsList");
    if(this.jsonData != null){
      this.favPokemonsList = JSON.parse(this.jsonData);
    }
  }

  // créer une fonction qui est appelée quand je clique sur le bouton rechercher

  async btnSearchPokemon(): Promise<void> {
    if (this.pokemonName) {
      this.pokemon = await this.pokeApi.searchPokemon(this.pokemonName);
    }
  }

  async btnSaveFavPokemon(): Promise<void> {
    if (this.pokemon) {
      this.favPokemonsList.push(this.pokemon)
      localStorage.setItem("favPokemonsList", JSON.stringify(this.favPokemonsList));
    }
  }
}
