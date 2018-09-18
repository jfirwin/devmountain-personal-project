import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAuth, getAuthActivities } from '../../Redux/Actions/userActions'
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navigation/Navbar/Navbar'
import ActivityCard from '../Profile/ActivityCards'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import EditDrawer from './EditDrawer'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: '30px'
  }

})


class Edit extends Component {
  componentDidMount() {
    this.props.getAuth()
    this.props.getAuthActivities(this.props.match.params.username)
  }
  render() {
    if (this.props.userLoading && this.props.userActivitiesLoading) {
      return(
        <div style={{height:'100vh',textAlign:'center',display: 'flex', flexDirection: 'column'}}>
        <Navbar/>
        <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',textAlign:'center',alignItems:'center', justifyContent:'center'}}>
          <h1>Loading...</h1>
          <CircularProgress className={this.props.classes.progress} size={100} color="secondary"/>
        </div>
      </div>)
    } else
    return (
      <div style={{height:'100vh',textAlign:'center',display: 'flex', flexDirection: 'column'}}>
        <Navbar/>
        <EditDrawer/>
        <div style={{marginLeft:'240px',display:'flex',flexDirection:'column',width:'calc(100% - 240px)'}}>
        <div style={{background:`linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url(${this.props.user.coverurl})`,backgroundSize:'cover',height:'300px',width:'100%',padding:'20px',color:'white'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Avatar src={this.props.user.imgurl} className={this.props.classes.avatar}/>
            <div style={{display:'flex', flexDirection:'column'}}>
              <h1>{this.props.user.firstname} {this.props.user.lastname}</h1>
              <h5>@{this.props.user.username}</h5>
              <h5>{this.props.user.home}</h5>
            </div>
          </div>
        </div>
        <AppBar position="static" color="default">
          <h3>Recent Activities</h3>
        </AppBar>
        <div style={{flexGrow: 1,overflow:'scroll',textAlign:'center'}}>
          <div style={{minWidth:'750px',maxWidth:'1000px',display:'inline-block',flexGrow: 1}}>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
          >
            {
              !this.props.userActivities
              ?
              <p>No activities to display</p>
              :
              this.props.userActivities.map(activity => {
                return(
                  <Grid item xs={6} key={`recent_activity_${activity.activityid}`}>
                    <ActivityCard activity={activity} img={this.props.user.imgurl}/>
                  </Grid>
                )
              })
            }
          </Grid>
          </div>
        </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.users.user,
    userActivities: state.users.userActivities,
    userLoading: state.users.userLoading,
    userActivitiesLoading: state.users.userActivitiesLoading
  }
}
export default connect(mapStateToProps, { getAuth, getAuthActivities })(withStyles(styles)(Edit))
