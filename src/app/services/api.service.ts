import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PokemonData, PokemonsPage } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private itemsPerPage = 10;
  private browserURL = `https://pokeapi.co/api/v2/pokemon/?limit=${this.itemsPerPage}&offset=`;
  private idURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  private getUrlForPage(pageNumber: number) {
    return `${this.browserURL}${(pageNumber - 1) * this.itemsPerPage}`;
  }

  getPage(pageNumber: number): Observable<PokemonsPage> {
    return this.http.get<PokemonsPage>(this.getUrlForPage(pageNumber));
  }

  private getUrlForId(id: string | number): string {
    return this.idURL + String(id).toLowerCase();
  }

  getPokemonWithId(id: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.getUrlForId(id));
  }
}
