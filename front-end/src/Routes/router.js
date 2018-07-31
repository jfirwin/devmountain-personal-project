import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Profile from '../Components/Profile/Profile'
import Listing from '../Components/Listing/Listing'
import About from '../Components/About/About'
import EditListing from '../Components/Edit/Listing/EditListing'
import EditProfile from '../Components/Edit/Profile/EditProfile'
// import Login from './Components/Login'

export default(
	<Switch>
		<Route path='/' exact component={Home} />
    <Route path='/search' exact component={Search} />
    <Route path='/about' component={About} exact/>
		<Route path='/profile/edit' component={EditProfile} exact/>
		<Route path='/listing/edit' component={EditListing} exact/>
		<Route path='/:username' component={Profile} />
		<Route path='/activity/:listingID' component={Listing} />
	</Switch>
)
