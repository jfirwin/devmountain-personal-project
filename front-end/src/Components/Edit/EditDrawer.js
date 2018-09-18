import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import UserDetails from './UserDetails'
import UserImages from './UserImages'
import CreateActivity from './CreateActivity'
import EditActivity from './EditActivity'
import DeleteActivity from './DeleteActivity'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});
function ClippedDrawer(props) {
  const { classes } = props;
  return (
      <Drawer
        docked="true"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <UserDetails/>
          <UserImages/>
        </List>
        <Divider />
        <List>
          <CreateActivity/>
          <EditActivity/>
          <DeleteActivity/>
        </List>
      </Drawer>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);
