const axios = require('axios')

module.exports = {
  getActivities: (params) => {
    return axios.get(process.env.REACT_APP_GET_ACTIVITIES, {params})
  },
  getActivity: (id) => {
    return axios.get(`${process.env.REACT_APP_GET_ACTIVITY}${id}`)
  },
  getUser: (username) => {
    return axios.get(`${process.env.REACT_APP_GET_USER}${username}`)
  },
  getAuth: () => {
    return axios.get(`${process.env.REACT_APP_GET_AUTH_USER}`, {withCredentials: true})
  },
  checkAuth: () => {
    return axios.get(`${process.env.REACT_APP_CHECK_AUTH}`, {withCredentials: true})
  },
  updateUserImages: (details) => {
    return axios.put(`${process.env.REACT_APP_UPDATE_USER_IMAGES}`, details, {withCredentials: true})
  },
  updateUser: (details) => {
    return axios.put(`${process.env.REACT_APP_UPDATE_USER}`, details, {withCredentials: true})
  },
  getUserActivities: (username) => {
    return axios.get(`${process.env.REACT_APP_GET_USER_ACTIVITIES}${username}`)
  },
  getAuthActivities: () => {
    return axios.get(`${process.env.REACT_APP_GET_AUTH_ACTIVITIES}`, {withCredentials: true})
  },
  updateUserActivity: (details) => {
    return axios.put(`${process.env.REACT_APP_UPDATE_USER_ACTIVITY}`, details, {withCredentials: true})
  },
  deleteUserActivity: (id) => {
    return axios.delete(`${process.env.REACT_APP_DELETE_USER_ACTIVITY}`, {params: {id: id}}, {withCredentials: true})
  },
  createUserActivity: (details) => {
    return axios.post(`${process.env.REACT_APP_CREATE_USER_ACTIVITY}`, details, {withCredentials: true})
  }
}
