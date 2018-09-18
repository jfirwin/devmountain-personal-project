import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { createUserActivity } from '../../Redux/Actions/userActions.js'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationPicker from './LocationPicker'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    flexGrow: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class CreateActivity extends React.Component {
  state = {
    open: false,
    activity: {
      rating: 0,
      title: '',
      description: '',
      activitydate: '',
      position: [],
    }

  };

  handleChange = (e) => {
    this.setState({ selected: e.target.value })
  };

  updateLocation = (arr) => {
    this.setState({activity: {...this.state.activity, position: arr}})
  }

  handleActivityChange = (e) => {
    this.setState({ activity: {...this.state.activity, [e.target.name]:e.target.value}})
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      activity: {
        rating: 0,
        title: '',
        description: '',
        activitydate: '',
        position: [],
      }
    });
  };

  render() {
    const safeToSubmit =
    this.state.activity.rating >= 0 &&
    this.state.activity.title !== '' &&
    this.state.activity.description !== '' &&
    this.state.activity.activitydate !== '' &&
    this.state.activity.position.length === 2
    const { classes } = this.props
    return (
      <div>
      <ListItem button onClick={this.handleClickOpen}>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText primary="Create Activity" />
      </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Activity</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select the location for your activity. The marker will appear wherever you click. It can also be dragged.
            </DialogContentText>
            <LocationPicker update={this.updateLocation}/>
            <form className={classes.root}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="update-title">Activity Title</InputLabel>
                <TextField
                  value={this.state.activity.title}
                  onChange={this.handleActivityChange}
                  className={classes.selectEmpty}
                  inputProps={{id:'update-title', name:'title', maxLength:'50'}}
                  type="text"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="update-rating">Select Rating</InputLabel>
                <Select
                  value={this.state.activity.rating}
                  onChange={this.handleActivityChange}
                  input={<Input id='update-rating' name="rating" type="select"/>}
                  className={classes.selectEmpty}
                >
                  <MenuItem value={0}>V0</MenuItem>
                  <MenuItem value={1}>V1</MenuItem>
                  <MenuItem value={2}>V2</MenuItem>
                  <MenuItem value={3}>V3</MenuItem>
                  <MenuItem value={4}>V4</MenuItem>
                  <MenuItem value={5}>V5</MenuItem>
                  <MenuItem value={6}>V6</MenuItem>
                  <MenuItem value={7}>V7</MenuItem>
                  <MenuItem value={8}>V8</MenuItem>
                  <MenuItem value={9}>V9</MenuItem>
                  <MenuItem value={10}>V10</MenuItem>
                  <MenuItem value={11}>V11</MenuItem>
                  <MenuItem value={12}>V12</MenuItem>
                  <MenuItem value={13}>V13</MenuItem>
                  <MenuItem value={14}>V14</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="update-date">Select Date</InputLabel>
                <TextField
                  value={this.state.activity.date}
                  onChange={this.handleActivityChange}
                  className={classes.selectEmpty}
                  inputProps={{id:'update-date', name:'activitydate'}}
                  type="date"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="update-description">Activity Description</InputLabel>
                <TextField
                  value={this.state.activity.description}
                  onChange={this.handleActivityChange}
                  className={classes.selectEmpty}
                  inputProps={{id:'update-description', name:'description',maxLength:'1000'}}
                  multiline={true}
                  type="text"
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.createUserActivity(this.state.activity)
                this.handleClose()
              }}
              color="primary"
              disabled={!safeToSubmit}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CreateActivity.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, { createUserActivity })(withStyles(styles)(CreateActivity))
