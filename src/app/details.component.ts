import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from './api.service';

@Component({
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css']
  
})
export class PokemonDetails implements OnInit {
  constructor(private pokemonService: ApiService, private route: ActivatedRoute) { }
  
  private pokemon: any;

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.pokemonService.getPokemonById(id).subscribe(data => {
      this.pokemon = data;
      console.log('POKEMON', this.pokemon)
    });
  }

}
