import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class ApiUrls {
  basicUrl = 'https://pokeapi.co/api/v2/pokemon';
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  browserURL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=';
  idURL = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  private getURLforPage(pageNumber: number) {
    return `${this.browserURL}${(pageNumber - 1) * 20}`;
  }

  getPage(pageNumber: number) {
    return this.http.get(this.getURLforPage(pageNumber));
  }

  private getURLforID(id: string | number) {
    return this.idURL + id;
  }

  getPokemonWithId(id: string | number) {
    return this.http.get(this.getURLforID(id));
  }
}
