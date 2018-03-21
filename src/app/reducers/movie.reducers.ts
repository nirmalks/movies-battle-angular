import * as fromMovies from './../actions/movies.actions';

export interface State {
    movies: any;
}

const initialState: State = {
  movies: []
};

export function MoviesReducer(state = initialState , action: fromMovies.Actions): State {
  switch (action.type) {
    case fromMovies.LOAD_MOVIES_SUCCESS: {
      return state = {
          movies : action.payload
      };
    }
    default: {
      return state;
    }
  }
}
