import { Component, Input, OnInit } from '@angular/core';

import { PokemonStats } from '../../interfaces';

@Component({
  selector: 'app-pokemon-item-stats',
  templateUrl: './pokemon-item-stats.component.html',
  styleUrls: ['./pokemon-item-stats.component.scss'],
})
export class PokemonItemStatsComponent implements OnInit {
  @Input() stats: PokemonStats;

  displayedColumns: string[] = ['name', 'base_stat', 'effort'];

  constructor() {}

  ngOnInit() {}
}
