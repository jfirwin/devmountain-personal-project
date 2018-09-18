const initialState = {
  user: {
    id: null,
    firstname: '',
    lastname: '',
    username: '',
    imgurl: '',
    coverurl: ''
  },
  userAuth: false,
  userActivities: [],
  userLoading: true,
  userActivitiesLoading: true,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'GET_USER':
      return state
    case 'GET_USER_PENDING':
      return { ...state,
        userLoading: true
      }
    case 'GET_USER_FULFILLED':
      return { ...state,
        userLoading: false,
        user: action.payload.data
      }
    case 'GET_AUTH_USER':
      return state
    case 'GET_AUTH_USER_PENDING':
      return { ...state,
        userLoading: true
      }
    case 'GET_AUTH_USER_FULFILLED':
      return { ...state,
        userLoading: false,
        user: action.payload.data
      }
    case 'UPDATE_USER':
      return state
    case 'UPDATE_USER_PENDING':
      return state
    case 'UPDATE_USER_FULFILLED':
      return { ...state,
        user: action.payload.data[0]
      }
    case 'UPDATE_USER_IMAGES':
      return state
    case 'UPDATE_USER_IMAGES_PENDING':
      return state
    case 'UPDATE_USER_IMAGES_FULFILLED':
      return { ...state,
        user: action.payload.data[0]
      }
    case 'GET_USER_ACTIVITIES':
      return state
    case 'GET_USER_ACTIVITIES_PENDING':
      return { ...state, userActivitiesLoading: true }
    case 'GET_USER_ACTIVITIES_FULFILLED':
      return { ...state,
        userActivitiesLoading: false,
        userActivities: action.payload.data
      }
    case 'CREATE_USER_ACTIVITY':
      return state
    case 'CREATE_USER_ACTIVITY_PENDING':
      return state
    case 'CREATE_USER_ACTIVITY_FULFILLED':
      return {...state,
        userActivities: [
        action.payload.data[0], ...state.userActivities
      ]}
    case 'UPDATE_USER_ACTIVITY':
      return state
    case 'UPDATE_USER_ACTIVITY_PENDING':
      return state
    case 'UPDATE_USER_ACTIVITY_FULFILLED':
      let id = action.payload.data[0].activityid
      return {...state, userActivities: [
        ...state.userActivities.map(a => {
          if(a.activityid === id) {
            return action.payload.data[0]
          } else return a
        })
      ]}
    case 'CHECK_AUTH':
      return state
    case 'CHECK_AUTH_PENDING':
      return state
    case 'CHECK_AUTH_FULFILLED':
      return { ...state,
        userAuth: true
      }
    case 'DELETE_USER_ACTIVITY':
      return state
    case 'DELETE_USER_ACTIVITY_PENDING':
      return state
    case 'DELETE_USER_ACTIVITY_FULFILLED':
      return {...state, userActivities: [
        ...state.userActivities.filter(a => {
          return a.activityid !== action.payload.data
        })
      ]}
    default:
      return state
  }
}
