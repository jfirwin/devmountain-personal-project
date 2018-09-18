const api = require('../apiCalls/apiCalls')

module.exports = {
	getUser: (username) => {
		return {
			type: 'GET_USER',
			payload: api.getUser(username)
		}
	},
	getAuth: () => {
		return {
			type: 'GET_AUTH_USER',
			payload: api.getAuth()
		}
	},
	checkAuth: () => {
		return {
			type: 'CHECK_AUTH',
			payload: api.checkAuth()
		}
	},
	updateUser: (username) => {
		return {
			type: 'UPDATE_USER',
			payload: api.updateUser(username)
		}
	},
	updateUserImages: (username) => {
		return {
			type: 'UPDATE_USER_IMAGES',
			payload: api.updateUserImages(username)
		}
	},
	getUserActivities: (username) => {
		return {
			type: 'GET_USER_ACTIVITIES',
			payload: api.getUserActivities(username)
		}
	},
	getAuthActivities: () => {
		return {
			type: 'GET_USER_ACTIVITIES',
			payload: api.getAuthActivities()
		}
	},
	createUserActivity: (details) => {
		return {
			type: 'CREATE_USER_ACTIVITY',
			payload: api.createUserActivity(details)
		}
	},
	updateUserActivity: (details) => {
		return {
			type: 'UPDATE_USER_ACTIVITY',
			payload: api.updateUserActivity(details)
		}
	},
	deleteUserActivity: (details) => {
		return {
			type: 'DELETE_USER_ACTIVITY',
			payload: api.deleteUserActivity(details)
		}
	},
}
