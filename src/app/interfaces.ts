export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonsPage {
  results: PokemonListItem[];
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonData {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: PokemonStats;
}
