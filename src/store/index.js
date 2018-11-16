import { List } from 'immutable'

const initialState = {
  filmovi: List(),
  filtered: List(),
  isLoaded: false,
  password: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILMOVI':
      return {...state, filmovi: List(action.filmovi)}
    case 'SET_FILTERED':
      return {...state, filtered: List(action.filtered)}
    case 'FETCH_SUCCESS':
      return {...state, isLoaded: true}
    case 'SET_PASSWORD':
      return {...state, password: action.password}
    case 'SORT_BY_YEAR_ASC': {
      const filtered = state.filtered.sort(
        (a, b) => a.godina - b.godina
      )
      return {...state, filtered }
    }
    case 'SORT_BY_YEAR_DESC': {
      const filtered = state.filtered.sort(
        (a, b) => b.godina - a.godina
      )
      return {...state, filtered }
    }
    case 'SORT_ALPHA': {
      const filtered = state.filtered.sort((a, b) => {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      })
      return {...state, filtered }
    }
    case 'SORT_ALPHA_Z': {
      const filtered = state.filtered.sort((a, b) => {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (y < x) return -1;
        if (y > x) return 1;
        return 0;
      })
      return {...state, filtered }
    }
    case 'SEARCH_MOVIE': {
      const filtered = state.filmovi.filter(film => 
        film.naziv.toLowerCase().includes(action.fraza.toLowerCase())
      )
      return {...state, filtered }
    }
    default:
      return state
  }
}
