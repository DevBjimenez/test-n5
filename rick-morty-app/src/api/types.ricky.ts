export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface PageInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Page {
  info: PageInfo;
  results: Character[];
}

export const CHARACTERS_URL = "https://rickandmortyapi.com/api/character";
