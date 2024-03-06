import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit {

  jsonData: string | null = null;
  pokemonFavList: Pokemon[] = [];
  // Liste de favoris temporaire
  pkmns: Pokemon[] =
    [
      new Pokemon(43, "oddish", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"),
      new Pokemon(58, "growlithe", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"),
      new Pokemon(129, "magikarp", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png")
    ];

  constructor() { }

  ngOnInit() {
    this.jsonData = localStorage.getItem("favPokemons");
    if (this.jsonData) {
      this.pokemonFavList = JSON.parse(this.jsonData);
    }
  }

}
