import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ActivityTiles from './Elements/ActivityTiles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '20px',
    overflow: 'scroll',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    zIndex: 1700
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={24}
        direction="row"
        alignItems="center"
      >
        {
          props.activities.markers.map(activity => {
            return (
              <Grid item xs key={`search_item_${activity.activityid}`}>
                <ActivityTiles activity={activity}/>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    activities: state.activities
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(CenteredGrid));
