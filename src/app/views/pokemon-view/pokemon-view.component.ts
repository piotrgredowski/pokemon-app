import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, concatMap, delay, map, takeUntil } from 'rxjs/operators';

import { PokemonData } from '../../interfaces';
import { ApiService } from '../../services/api.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss'],
})
export class PokemonViewComponent implements OnInit, OnDestroy {
  private destroyed = new Subject();

  pokemonData = {} as PokemonData;
  nameOrId: string | number;
  currentId: number;

  errorWhileLoadingData = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        delay(0),
        map((params: Params & { id: string }) => {
          this.spinnerService.enable(2);
          this.errorWhileLoadingData = false;
          this.nameOrId = params.id;
          return params.id;
        }),
        concatMap(id => {
          return this.api.getPokemonWithId(id);
        }),
        catchError(() => {
          this.spinnerService.forceDisable();
          this.errorWhileLoadingData = true;
          return of([]);
        }),
        takeUntil(this.destroyed)
      )
      .subscribe((pokemonData: PokemonData) => {
        this.currentId = Number(pokemonData.id);
        this.pokemonData = pokemonData;
        this.spinnerService.disable();
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  disableSpinner() {
    this.spinnerService.disable();
  }

  isPokemonDataAvailable() {
    return Object.keys(this.pokemonData).length !== 0;
  }

  canGoToPreviousPokemon() {
    return !!this.currentId && this.currentId > 1;
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
