import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon-app';

  constructor(private api: ApiService) {
    api.getPage(1).subscribe(data => console.log(data));
    api.getPage(2).subscribe(data => console.log(data));
    api.getPokemonWithId(1).subscribe(data => console.log(data));
  }
}
