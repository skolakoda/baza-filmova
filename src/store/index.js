const initialState = {
  filmovi: [],
  filtered: [],
  isLoaded: false,
  password: ""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILMOVI':
      return {...state, filmovi: action.payload}
    case 'SET_FILTERED':
      return {...state, filtered: action.payload}
    case 'FETCH_SUCCESS':
      return {...state, isLoaded: true}
    case 'SET_PASSWORD':
      return {...state, password: action.payload}
    case 'SORT_BY_YEAR_DESC': {
        const filtered = [...state.filtered].sort(
          (a, b) => b.godina - a.godina
        )
        return {...state, filtered }
      }
    case 'SORT_BY_YEAR_ASC': {
      const filtered = [...state.filtered].sort(
        (a, b) => a.godina - b.godina
      )
      return {...state, filtered }
    }
    case 'SORT_ALPHA': {
      const filtered = [...state.filtered].sort((a, b) => {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      })
      return {...state, filtered }
    }
    case 'SORT_ALPHA_Z': {
      const filtered = [...state.filtered].sort((a, b) => {
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

/* ACTION CREATORS */

export const searchMovie = fraza => ({
  type: 'SEARCH_MOVIE',
  fraza
})

export const sortAlphaZ = () => ({
  type: 'SORT_ALPHA_Z'
})

export const sortAlpha = () => ({
  type: 'SORT_ALPHA'
})

export const sortByYearAsc = () => ({
  type: 'SORT_BY_YEAR_ASC'
})

export const sortByYearDesc = () => ({
  type: 'SORT_BY_YEAR_DESC'
})

export const setFilmovi = payload => ({
  type: 'SET_FILMOVI',
  payload
})

export const setFiltered = payload => ({
  type: 'SET_FILTERED',
  payload
})

export const setPassword = payload => ({
  type: 'SET_PASSWORD',
  payload
})

export const fetchSuccess = () => ({
  type: 'FETCH_SUCCESS',
})