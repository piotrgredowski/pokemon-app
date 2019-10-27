import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { map, filter, subscribeOn, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss'],
})
export class PokemonViewComponent implements OnInit {
  pokemonData = {};
  currentId: number;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.route.params.pipe(map(params => params.id)).subscribe(id => {
      this.currentId = Number(id);
      this.api.getPokemonWithId(id).subscribe(pokemonData => {
        this.pokemonData = pokemonData;
      });
    });
  }

  private canGoToPreviousPokemon() {
    return this.currentId > 1;
  }

  private canGoToNextPokemon() {
    // TODO: find way to check it
    return true;
  }

  private _goToPokemonWithId(id: number) {
    this.router.navigate([id]);
  }

  goToNextPokemon() {
    this._goToPokemonWithId(this.currentId + 1);
  }

  goToPreviousPokemon() {
    this._goToPokemonWithId(this.currentId - 1);
  }
}
