export interface MovieObj {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
}

export interface MovieData {
  results: Array<Movie>;
}

export interface MovieData {
  movie_results: Array<Movie>;
}

export interface Movie {
  title: string;
  movie_poster: string;
  overview: string;
}

export interface ResultsObj {
  movie_results?: Array<Movie>;
  tv_results?: Array<any>;
  tv_episode_results?: Array<any>;
  tv_season_results?: Array<any>;
  person_results?: Array<any>;
}

export interface MovieResult {
  moviesResult: Array<ResultsObj>;
}
