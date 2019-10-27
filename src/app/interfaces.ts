interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonsPage {
  results: PokemonListItem[];
}

interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonData {
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: PokemonStats;
}
