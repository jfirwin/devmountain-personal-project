const initialState = {
  highlighted: null,
  searchOnChange: false,
  markers: [],
  markersLoading: false,
  activityLoading: true,
  activity: {

  },
  searchViewportBounds: {
    north: null,
    east: null,
    south: null,
    west: null
  }
}

export default function activities(state = initialState, action) {
  switch (action.type) {
    case 'HIGHLIGHT_TILE':
      let highlight = Object.assign({}, state)
      highlight.highlighted = action.payload
      return highlight
    case 'UNHIGHLIGHT_TILE':
      let unhighlight = Object.assign({}, state)
      unhighlight.highlighted = null
      return unhighlight
    case 'TOGGLE_SEARCH_ON_CHANGE':
      let searchOnChange = Object.assign({}, state)
      searchOnChange.searchOnChange = !state.searchOnChange
      return searchOnChange
    case 'GET_ACTIVITIES':
      let getActivities = Object.assign({}, state)
      return getActivities
    case 'GET_ACTIVITIES_PENDING':
      let getActivitiesPending = Object.assign({}, state)
      getActivitiesPending.markersLoading = true
      return getActivitiesPending
    case 'GET_ACTIVITIES_FULFILLED':
      let getActivitiesFulfilled = Object.assign({}, state)
      getActivitiesFulfilled.markersLoading = false
      getActivitiesFulfilled.markers = action.payload.data.markers
      for(var key in action.payload.data.bounds) {
        action.payload.data.bounds[key] = parseFloat(action.payload.data.bounds[key])
      }
      getActivitiesFulfilled.searchViewportBounds = action.payload.data.bounds
      return getActivitiesFulfilled
    case 'GET_ACTIVITY':
      return state
    case 'GET_ACTIVITY_PENDING':
      return { ...state,
        activityLoading: true
      }
    case 'GET_ACTIVITY_FULFILLED':
      return { ...state,
        activityLoading: false,
        activity: action.payload.data
      }
    default:
      return state
  }
}
