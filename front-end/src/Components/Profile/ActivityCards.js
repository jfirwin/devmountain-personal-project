import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {Map, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet'

const styles = {
  card: {
    width: '100%'
  },
  media: {
    height: 140,
  },
};

const customIcon = (image) => L.divIcon({
  className: 'hidden',
  html: `<div class="activeIcon"><img src="${image}" class="pointerImage"/><div>`,
  iconAnchor: [25.5,60]
})

function ActivityTile(props) {
  const { classes, activity } = props;
  const image = activity.imgurl || `https://robohash.org/?set=set4`
  return (
      <Card
        className={classes.card}
      >
          <Map
            center={activity.position}
            zoom={10}
            style={{height:'200px', width:'100%'}}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
            />
            <Marker
              position={activity.position}
              riseOnHover={false}
              icon={customIcon(image)}
            />
          </Map>
          <Link to={`/activity/${activity.activityid}`}>
          <CardActionArea className={classes.card}>
          <CardContent>
            <Typography component="p" variant="body1">
              BOULDERING | V{activity.rating}
            </Typography>
            <Typography variant="headline" component="h2">
              {activity.title}
            </Typography>
            <Typography component="p">
              {activity.description}
            </Typography>
            <Typography component="p">
              {activity.activitydate}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
  );
}

ActivityTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityTile);
