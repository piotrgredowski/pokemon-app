import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private itemsPerPage = 10;
  private browserURL = `https://pokeapi.co/api/v2/pokemon/?limit=${this.itemsPerPage}&offset=`;
  private idURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  private getURLforPage(pageNumber: number) {
    return `${this.browserURL}${(pageNumber - 1) * this.itemsPerPage}`;
  }

  getPage(pageNumber: number): Observable<PokemonsPage> {
    return this.http.get<PokemonsPage>(this.getURLforPage(pageNumber));
  }

  private getURLforID(id: string | number): string {
    return this.idURL + String(id).toLowerCase();
  }

  getPokemonWithId(id: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.getURLforID(id));
  }
}
