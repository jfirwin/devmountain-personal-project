const api = require('../apiCalls/apiCalls')

module.exports = {
	highlightTile: (key) => {
		return {
			type: 'HIGHLIGHT_TILE',
			payload: key
		}
	},
	unhighlightTile: () => {
		return {
			type: 'UNHIGHLIGHT_TILE',
			payload: null
		}
	},
	toggleSearchOnChange: () => {
		return {
			type: 'TOGGLE_SEARCH_ON_CHANGE',
			payload: null
		}
	},
	getActivities: (details) => {
		return {
			type: 'GET_ACTIVITIES',
			payload: api.getActivities(details)
		}
	},
	getActivity: (id) => {
		return {
			type: 'GET_ACTIVITY',
			payload: api.getActivity(id)
		}
	},
}
