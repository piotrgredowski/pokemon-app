import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { of, Subject } from 'rxjs';
import { catchError, delay, map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';
import { SpinnerService } from '../../services/spinner.service';
import { PokemonPaginator } from './pokemon-paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: PokemonPaginator }],
})
export class PokemonListComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroyed = new Subject();

  pokemonsList: PokemonListItem[];
  displayedColumns: string[] = ['name', 'details'];

  itemsPerPage = 10;
  resultsCount = 10 * this.itemsPerPage;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private api: ApiService, private spinnerService: SpinnerService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.spinnerService.enable();
          return this.api.getPage(this.paginator.pageIndex + 1);
        }),
        map(receivedData => {
          return receivedData.results;
        }),
        catchError(() => {
          this.spinnerService.forceDisable();
          return of([]);
        }),
        takeUntil(this.destroyed)
      )
      .subscribe(data => {
        this.pokemonsList = data;
        this.spinnerService.disable();
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
