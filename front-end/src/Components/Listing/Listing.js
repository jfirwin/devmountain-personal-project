import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../Navigation/Navbar/Navbar'
import { getActivity } from '../../Redux/Actions/activityActions'
import {Map, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  }
})

const customIcon = (image) => L.divIcon({
  className: 'hidden',
  html: `<div class="activeIcon"><img src="${image}" onError="https://robohash.org/?set=set4" class="pointerImage"/><div>`,
  iconAnchor: [25.5,60]
})

class Listing extends Component {
  componentDidMount() {
    this.props.getActivity(this.props.match.params.listingID)
  }
  render() {
    const image = this.props.activity.imgurl || `https://robohash.org/?set=set4`
    if (this.props.activityLoading) {
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
      <Map
      center={this.props.activity.position}
      zoom={10}
      style={{height:'300px', width:'100%'}}
      scrollWheelZoom={false}
      >
      <TileLayer
      attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
      />
      <Marker
      position={this.props.activity.position}
      riseOnHover={false}
      icon={customIcon(image)}
      />
      </Map>
      <div style={{height:'100%'}}>
      <Typography component="p" variant="body1">
        BOULDERING | V{this.props.activity.rating}
      </Typography>
      <Typography variant="headline" component="h2">
        {this.props.activity.title}
      </Typography>
      <Typography component="body1" variant="body1">
        {this.props.activity.firstname} {this.props.activity.lastname}
      </Typography>
      <Typography component="p">
      <Link to={`/${this.props.activity.username}`}>
        @{this.props.activity.username}
      </Link>
      </Typography>
      <Typography component="p">
        {this.props.activity.home}
      </Typography>
      <Typography component="p">
        {this.props.activity.activitydate}
      </Typography>
      <Typography component="p">
        {this.props.activity.description}
      </Typography>
      </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    activity: state.activities.activity,
    activityLoading: state.activities.activityLoading
  }
}
export default connect(mapStateToProps, {getActivity})(withStyles(styles)(Listing))
