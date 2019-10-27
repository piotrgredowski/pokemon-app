import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

  searchFor(nameOrId: string) {
    this.router.navigate([`/${nameOrId}`]);
  }
}
