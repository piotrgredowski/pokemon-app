import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit() {}

  searchFor(nameOrId: string) {
    this.api.getPokemonWithId(nameOrId).subscribe(data => console.log(data));
  }
}
