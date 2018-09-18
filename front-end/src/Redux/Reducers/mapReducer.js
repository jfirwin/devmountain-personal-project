import moment from 'moment'
const start = moment().format('YYYY-MM-DD')
const end = moment().add(3, 'day').format('YYYY-MM-DD')

const initialState = {
  scrollLock: false,
  viewportBounds: {
    north: null,
    east: null,
    south: null,
    west: null
  },
  coordinates: {
    lat: 40.7608,
    lng: -111.8910,
    zoom: 11
  },
  searchterm: [],
  searchParams: {
    north: null,
    east: null,
    south: null,
    west: null,
    minrating: 0,
    maxrating: 14,
    start_date: start,
    end_date: end
  }
}

export default function map(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SCROLL_LOCK':
      let scrollLock = Object.assign({}, state)
      scrollLock.scrollLock = !state.scrollLock
      return scrollLock
    case 'SET_VIEWPORT_BOUNDS':
      let viewportBounds = Object.assign({}, state)
      viewportBounds.viewportBounds = {
        north: action.payload._northEast.lat,
        east: action.payload._northEast.lng,
        south: action.payload._southWest.lat,
        west: action.payload._southWest.lng
      }
      viewportBounds.searchParams.north = action.payload._northEast.lat
      viewportBounds.searchParams.east = action.payload._northEast.lng
      viewportBounds.searchParams.south = action.payload._southWest.lat
      viewportBounds.searchParams.west = action.payload._southWest.lng
      return viewportBounds
    case 'UPDATE_SEARCHTERM':
        return{...state,
          searchterm: action.payload
        }
    case 'UPDATE_QUERY_PARAMS':
        return {...state,
          searchParams: {
            ...state.searchParams,
            minrating: action.payload.minrating,
            maxrating: action.payload.maxrating,
            start_date: action.payload.start_date,
            end_date: action.payload.end_date
          }
        }
    default:
      return state
  }
}
