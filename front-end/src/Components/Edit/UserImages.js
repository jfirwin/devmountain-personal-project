import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUserImages } from '../../Redux/Actions/userActions.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class UserImages extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      imgurl: '',
      coverurl: ''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
      imgurl: this.props.user.imgurl,
      coverurl: this.props.user.coverurl
    });
  };

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  };

  componentDidMount() {
    this.setState({imgurl: this.props.user.imgurl, coverurl: this.props.user.coverurl})
  }

  render() {
    const safeToSubmit =
    this.state.coverurl !== '' &&
    this.state.imgurl !== ''
    return (
      <div>
      <ListItem button onClick={this.handleClickOpen}>
        <ListItemIcon>
          <PhotoCamera />
        </ListItemIcon>
        <ListItemText primary="Images" />
      </ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Images</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Paste a URL to your profile picture and cover photo below
            </DialogContentText>
            <TextField
              autoFocus
              value={this.state.imgurl}
              onChange={this.handleChange}
              inputProps={{
                name: 'imgurl',
                maxLength:'200'
              }}
              margin="dense"
              id="name"
              label="Profile Picture"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              value={this.state.coverurl}
              onChange={this.handleChange}
              inputProps={{
                name: 'coverurl',
                maxLength:'200'
              }}
              margin="dense"
              id="name"
              label="Cover Photo"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={() => {
              this.props.updateUserImages({
                imgurl: this.state.imgurl,
                coverurl: this.state.coverurl
              })
              this.handleClose()
            }}
            disabled={!safeToSubmit}
            color="primary">
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
export default connect(mapStateToProps, { updateUserImages })(UserImages)
