import React from 'react'
import { connect } from 'react-redux'
import { highlightTile, unhighlightTile } from '../../../Redux/Actions/activityActions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  actionArea: {
    width: '100%'
  },
  card: {
    maxWidth: 345,
    minWidth: 200,
    width: '100%'
  },
  media: {
    height: 140
  },
};

function ActivityTile(props) {
  const { classes, activity } = props;
  return (
    <Link to={`/activity/${activity.activityid}`}>
      <Card
        className={classes.card}
        onPointerEnter={()=>{props.highlightTile(activity.activityid)}}
        onPointerLeave={()=>{props.unhighlightTile()}}
      >
        <CardActionArea
          className={classes.actionArea}
        >
          <CardMedia
            className={classes.media}
            image={activity.coordinator.imgurl || `https://robohash.org/${activity.coordinator.username}?set=set4`}
            title={activity.coordinator.username}
          />
          <CardContent>
            <Typography component="p" variant="body1">
              BOULDERING | V{activity.rating}
            </Typography>
            <Typography variant="headline" component="h2">
              {activity.title}
            </Typography>
            <Typography gutterBottom component="p">
              <i className="fa fa-user" style={{marginRight: '5px'}}/>{activity.coordinator.username}
            </Typography>
            <Typography component="p">
              {activity.description}
            </Typography>
            <Typography component="p">
              {activity.activitydate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

ActivityTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, {highlightTile, unhighlightTile})(withStyles(styles)(ActivityTile));

// import React from 'react';
// import { connect } from 'react-redux'
// import { highlightTile, unhighlightTile } from '../../../Redux/Actions/activityActions'
// import {starRating} from '../../ratings'
// import ImageSlider from '../../Slider/ImageSlider'
// import climbTypeDecoder from '../../utils/climbTypeDecoder'
// import ratingHelper from '../../utils/ratingHelper'
//
// const ActivityTiles = (props) => {
//   const {title, style, rating, start_date, end_date, imgs} = props.activity
//   const {firstname, lastname, username} = props.activity.coordinator
//   const key = props.activity.activityid
//   return (
//     <div style={{border:'1px solid lightgrey',padding:'5px',margin:'5px',width:'48%',minWidth:'250px',  maxWidth:'98%',boxSizing:'border-box'}}
//      onPointerEnter={()=>{
//        props.highlightTile(key)}}
//      onPointerLeave={()=>{
//        props.unhighlightTile()}}
//     >
//       {imgs.length > 0
//         ?
//           <div style={{height:'200px'}}>
//             <ImageSlider imgs={imgs}/>
//           </div>
//         :
//           null
//       }
//       <h6 style={{margin:'0px 0px 5px 0px'}}>Seeking V{rating} Climber</h6>
//       {title}
//       <div style={{display:'flex'}}>
//       <i className="fa fa-user"/>{firstname} {lastname}
//       {start_date}{end_date}
//       </div>
//     </div>
//   );
// }
// export default connect(null, {highlightTile, unhighlightTile})(ActivityTiles)
