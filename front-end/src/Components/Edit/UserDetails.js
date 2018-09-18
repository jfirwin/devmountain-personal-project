import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../../Redux/Actions/userActions.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class UserDetails extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      firstname: '',
      lastname: '',
      home: '',
      username: ''
    }
  }
  componentDidMount() {
    this.setState({
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      home: this.props.user.home,
      username: this.props.user.username
    })
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      home: this.props.user.home,
      username: this.props.user.username
    });
  };

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  render() {
    return (
      <div>
      <ListItem button onClick={this.handleClickOpen}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="User Details" />
      </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">User Details</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
              inputProps={{
                name: 'username',
                maxLength: '30'
              }}
              margin="dense"
              id="name"
              label="Username"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              value={this.state.firstname}
              onChange={this.handleChange}
              inputProps={{
                name: 'firstname',
                maxLength: '30'
              }}
              margin="dense"
              id="name"
              label="First Name"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              value={this.state.lastname}
              onChange={this.handleChange}
              inputProps={{
                name: 'lastname',
                maxLength: '30'
              }}
              margin="dense"
              id="name"
              label="Last Name"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              value={this.state.home}
              onChange={this.handleChange}
              inputProps={{
                name: 'home',
                maxLength: '50'
              }}
              margin="dense"
              id="name"
              label="Location"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                this.props.updateUser({
                  firstname: this.state.firstname,
                  lastname: this.state.lastname,
                  home: this.state.home,
                  username: this.state.username
                })
                this.handleClose()
              }}
              color="primary"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.users.user
  }
}
export default connect(mapStateToProps, { updateUser })(UserDetails)
