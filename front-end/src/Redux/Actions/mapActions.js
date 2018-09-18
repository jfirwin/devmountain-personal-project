module.exports = {
	toggleScrollLock: () => {
		return {
			type: 'TOGGLE_SCROLL_LOCK',
			payload: null
		}
	},
	setViewportBounds: (bounds) => {
		return {
			type:'SET_VIEWPORT_BOUNDS',
			payload: bounds
		}
	},
	setLatLng: (coordinates) => {
		return {
			type:'SET_LAT_LNG',
			payload: coordinates
		}
	},
	updateQueryParams: (params) => {
		return {
			type:'UPDATE_QUERY_PARAMS',
			payload: params
		}
	},
	updateSearchterm: (searchterm) => {
		return {
			type:'UPDATE_SEARCHTERM',
			payload: searchterm
		}
	}
}
