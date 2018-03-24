export interface MovieObj {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
}

export interface MovieData {
  results: Array<Movie>;
}

export interface Movie {
  title: string;
  movie_poster: string;
  overview: string;
}
