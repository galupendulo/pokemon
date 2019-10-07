import { Component,OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
  
})
export class ListComponent implements OnInit {
  constructor(private pokemonService: ApiService) { }
 
  pokemons: any;

  ngOnInit() {
    
    this.getPokemons();
  }
  getPokemons(): void {
    this.pokemonService.getList()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        console.log('pok',pokemons)
            
      });
  }
}
