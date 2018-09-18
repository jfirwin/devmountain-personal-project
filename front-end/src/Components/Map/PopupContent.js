import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 200
  },
  media: {
    height: '100px'
  },
  actionArea: {
    width: '100%'
  }
};

function CustomPopupContent(props) {
  const { classes, activity } = props;
  return (
    <a href={`/activity/${activity.activityid}`}>
      <Card
        className={classes.card}
        elevation0
      >
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={activity.coordinator.imgurl || `https://robohash.org/${activity.coordinator.username}?set=set4`}
            title={activity.coordinator.username}
          />
          <CardContent>
            <Typography variant="body1">
              BOULDERING | V{activity.rating}
            </Typography>
            <Typography variant="title">
              {activity.title}
            </Typography>
            <Typography gutterBottom>
              <i className="fa fa-user" style={{marginRight: '5px'}}/>{activity.coordinator.username}
            </Typography>
            <Typography>
              {activity.activitydate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

CustomPopupContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPopupContent)
