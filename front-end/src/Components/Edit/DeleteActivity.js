import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { deleteUserActivity } from '../../Redux/Actions/userActions.js'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Delete from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

class DeleteActivity extends React.Component {
  state = {
    open: false,
    selected: '',
    confirmationOpen: false
  };

  handleChange = (e) => {
    this.setState({ selected: e.target.value })
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, selected: '' });
  };

  handleConfirmationClickOpen = () => {
    this.setState({ confirmationOpen: true });
  };

  handleConfirmationClose = () => {
    this.setState({ confirmationOpen: false, open: false, selected: '' });
  };

  render() {
    const { classes } = this.props
    return (
      <div>
      <ListItem button onClick={this.handleClickOpen}>
        <ListItemIcon>
          <Delete />
        </ListItemIcon>
        <ListItemText primary="Delete Activity" />
      </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete Activity</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Select the activity you wish to delete. This action cannot be undone.
            </DialogContentText>
            <form className={classes.root}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-delete">Select Activity</InputLabel>
                <Select
                  value={this.state.selected}
                  onChange={this.handleChange}
                  input={<Input id='select-delete' type="select"/>}
                  className={classes.selectEmpty}
                >
                {
                  this.props.activities.map(activity => {
                    return (
                      <MenuItem value={activity.activityid} key={`delete_${activity.activityid}`}>
                        {activity.title} | V{activity.rating}
                      </MenuItem>
                    )
                  })
                }
                </Select>
              </FormControl>
            </form>
            <div>
              Display Activity Thumbnail here
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleConfirmationClickOpen} disabled={this.state.selected === ''} color="primary">
              Yes, Delete
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.confirmationOpen}
          onClose={this.handleConfirmationClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">This cannot be undone <span role="img" aria-label="face screaming in fear">😱</span></DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleConfirmationClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.deleteUserActivity(this.state.selected)
                this.handleConfirmationClose()
              }}
              color="primary"
            >
              Delete Activity
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}

DeleteActivity.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    activities: state.users.userActivities
  }
}


export default connect(mapStateToProps, { deleteUserActivity })(withStyles(styles)(DeleteActivity))
