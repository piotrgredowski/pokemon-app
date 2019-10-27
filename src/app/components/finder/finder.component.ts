import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

  searchFor(nameOrId: string) {
    this.router.navigate([`/${nameOrId}`]);
  }
}
