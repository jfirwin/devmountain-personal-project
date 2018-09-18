import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navigation/Navbar/Navbar'
import ActivityCard from './ActivityCards'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'

const styles = {

}

const Profile = (props) => {
  return (
    <div style={{height:'100vh',textAlign:'center',display: 'flex', flexDirection: 'column'}}>
      <Navbar/>
      <div style={{background:'linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url("./imgs/spotter.JPG")',backgroundSize:'cover',height:'300px',width:'100%',padding:'20px',color:'white'}}>
        <Avatar src="/imgs/spotter.JPG"/>
        <h1>Firstname Lastname</h1>
        <h5>@username</h5>
        <h5>Location</h5>
      </div>
      <AppBar position="static" color="default">
        <h3>Recent Activities</h3>
      </AppBar>
      <div style={{flexGrow: 1,overflow:'scroll',textAlign:'center'}}>
        <div style={{maxWidth:'750px',display:'inline-block'}}>
        <Grid
          container
          spacing={24}
          direction="row"
          alignItems="right"
          justify="center"
        >
          <Grid item xs={6}>
            <ActivityCard/>
          </Grid>
          <Grid item xs={6}>
            <ActivityCard/>
          </Grid>
          <Grid item xs={6}>
            <ActivityCard/>
          </Grid>
          <Grid item xs={6}>
            <ActivityCard/>
          </Grid>
          <Grid item xs={6}>
            <ActivityCard/>
          </Grid>
          <Grid item xs>
            <ActivityCard/>
          </Grid>
        </Grid>
        </div>
      </div>
    </div>
  )
}
export default withStyles(styles)(Profile)
