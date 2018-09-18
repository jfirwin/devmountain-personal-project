import React, {Component} from 'react'
import Navbar from '../Navigation/Navbar/Navbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { checkAuth } from '../../Redux/Actions/userActions'


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

class Callback extends Component {
  componentDidMount() {
    this.props.checkAuth()
      .then(result => {
        this.props.history.push('/edit')
      })
  }
  render() {
    return (
      <div style={{height:'100vh',textAlign:'center',display: 'flex', flexDirection: 'column'}}>
      <Navbar/>
      <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',textAlign:'center',alignItems:'center', justifyContent:'center'}}>
        <h1>Loading...</h1>
        <CircularProgress className={this.props.classes.progress} size={100} color="secondary"/>
      </div>
    </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    userAuth: state.users.userAuth
  }
}
export default connect(mapStateToProps,{checkAuth})(withStyles(styles)(Callback))
