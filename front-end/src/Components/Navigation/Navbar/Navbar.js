import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const HomeLink = props => <NavLink to='/' {...props}/>
const SearchLink = props => <NavLink to='/search' {...props}/>
const EditLink = props => <NavLink to='/edit' {...props}/>
const LoginLink = props => <a href={process.env.REACT_APP_LOGIN} {...props}>Login</a>
const LogoutLink = props => <a href={process.env.REACT_APP_LOGOUT} {...props}>Logout</a>

const styles = theme => ({
  root: {
    zIndex: 1500
  },
  flex: {
    flexGrow: 2
  }
});

function NavBar(props) {
  const { classes } = props;
  return (
    <nav className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography component={HomeLink} to="/" variant="title" color="inherit">
          Spotter
          </Typography>
          <div className={classes.flex}/>
          <Button component={SearchLink} to="/search" color="inherit">Search</Button>
          {
            props.isAuth ?
            <Button component={EditLink} to="/edit" color="inherit">Edit</Button>
            :
            null
          }
          {
            props.isAuth
            ?
            <Button component={LogoutLink} to={process.env.REACT_APP_LOGOUT} color="inherit">Logout</Button>
            :
            <Button component={LoginLink} to={process.env.REACT_APP_LOGIN} color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </nav>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuth: state.users.userAuth
  }
}
export default connect(mapStateToProps)(withStyles(styles)(NavBar))
