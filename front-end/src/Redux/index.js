import { combineReducers } from 'redux'
import map from './Reducers/mapReducer'
import activities from './Reducers/activityReducer'
import users from './Reducers/usersReducer'

export default combineReducers({
	map,
	activities,
	users
})
