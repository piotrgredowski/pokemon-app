import { Component, OnInit, Input } from '@angular/core';

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

@Component({
  selector: 'app-pokemon-item-stats',
  templateUrl: './pokemon-item-stats.component.html',
  styleUrls: ['./pokemon-item-stats.component.scss'],
})
export class PokemonItemStatsComponent implements OnInit {
  @Input() stats: PokemonStats;

  displayedColumns: string[] = ['name', 'base_stat', 'effort'];

  constructor() {}

  ngOnInit() {
    console.log(this.stats);
  }
}
