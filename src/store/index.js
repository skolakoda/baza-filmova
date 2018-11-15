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
    default:
      return state
  }
}

/* ACTION CREATORS */

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