import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Profile from '../Components/Profile/Profile'
import Listing from '../Components/Listing/Listing'
import Callback from '../Components/Edit/Callback'
import Edit from '../Components/Edit/Edit'
import Protected from './protected'


export default(
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/search' exact component={Search} />
		<Route path='/callback' exact component={Callback} />
		<Protected path='/edit' component={Edit} exact/>
		<Route path='/activity/:listingID' component={Listing} />
		<Route path='/:username' component={Profile} />
	</Switch>
)
