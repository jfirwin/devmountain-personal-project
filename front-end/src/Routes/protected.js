import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const check = (userAuth) => {
    return userAuth ? true : false
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            return(rest.userAuth ?
            <Component {...props} />
            :
            <Redirect to='/' />)
    }} />)
}

const mapStateToProps = (state) => {
  return {
    userAuth: state.users.userAuth
  }
}

export default connect(mapStateToProps, {check})(PrivateRoute)
