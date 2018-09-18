import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
  },
  button: {
    align: 'center',
    width: '100%'
  },
})
function PaperSheet(props) {
  const {classes} = props

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{minHeight: '50%'}}
    >
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Connect with Climbers.
        </Typography>
        <Typography component="p">
          Anytime. Anywhere.
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
        >
        <Link to="/search" className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
              Search
          </Button>
        </Link>
        </Grid>
      </Paper>
    </Grid>
  )
}
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    searchterm: state.map.searchterm
  }
}
export default connect(mapStateToProps)(withStyles(styles)(PaperSheet));
