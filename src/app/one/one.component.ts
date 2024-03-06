import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/services/pokeapi.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(public pokeApi : PokeapiService) { }

  ngOnInit() {   
  }

}
