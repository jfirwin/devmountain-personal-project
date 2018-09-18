import React, {Component} from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import { updateQueryParams } from '../../../Redux/Actions/mapActions'
import { getActivities } from '../../../Redux/Actions/activityActions'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { isEquivalent } from '../../utils/isEquivalent'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '120px',
  },
  textField: {
    margin: theme.spacing.unit,
    width: '200px',
  },
});

let today = moment().format("YYYY-MM-DD")
let later = moment().add(3, "day").format("YYYY-MM-DD")


class Parameters extends Component {
  constructor(){
    super()

    this.state = {
      current: {
        start_date: today,
        end_date: later,
        minrating: 0,
        maxrating: 14
      },
      previous: {
        start_date: today,
        end_date: later,
        minrating: 0,
        maxrating: 14
      }
    }
  }

  componentDidMount() {
    this.props.getActivities(this.props.searchParams)
  }

  handleChange = (e) => {
    this.setState({...this.state, current: {
      ...this.state.current, [e.target.name]:e.target.value
    }}, () => this.props.updateQueryParams(this.state.current))
  };

  render(){
    const { classes } = this.props
    return(
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{flexGrow:1}}>
            Filters
          </Typography>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="minrating">Min Rating</InputLabel>
              <Select
                value={this.state.current.minrating}
                onChange={this.handleChange}
                inputProps={{
                  name: 'minrating',
                  id: 'minrating',
                  max: this.state.current.maxrating
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={0} disabled={this.state.current.maxrating < 0}>V0</MenuItem>
                <MenuItem value={1} disabled={this.state.current.maxrating < 1}>V1</MenuItem>
                <MenuItem value={2} disabled={this.state.current.maxrating < 2}>V2</MenuItem>
                <MenuItem value={3} disabled={this.state.current.maxrating < 3}>V3</MenuItem>
                <MenuItem value={4} disabled={this.state.current.maxrating < 4}>V4</MenuItem>
                <MenuItem value={5} disabled={this.state.current.maxrating < 5}>V5</MenuItem>
                <MenuItem value={6} disabled={this.state.current.maxrating < 6}>V6</MenuItem>
                <MenuItem value={7} disabled={this.state.current.maxrating < 7}>V7</MenuItem>
                <MenuItem value={8} disabled={this.state.current.maxrating < 8}>V8</MenuItem>
                <MenuItem value={9} disabled={this.state.current.maxrating < 9}>V9</MenuItem>
                <MenuItem value={10} disabled={this.state.current.maxrating < 10}>V10</MenuItem>
                <MenuItem value={11} disabled={this.state.current.maxrating < 11}>V11</MenuItem>
                <MenuItem value={12} disabled={this.state.current.maxrating < 12}>V12</MenuItem>
                <MenuItem value={13} disabled={this.state.current.maxrating < 13}>V13</MenuItem>
                <MenuItem value={14} disabled={this.state.current.maxrating < 14}>V14</MenuItem>

              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="maxrating">Max Rating</InputLabel>
              <Select
                value={this.state.current.maxrating}
                onChange={this.handleChange}
                inputProps={{
                  name: 'maxrating',
                  id: 'maxrating',
                  min: this.state.current.minrating
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={0} disabled={this.state.current.minrating > 0}>V0</MenuItem>
                <MenuItem value={1} disabled={this.state.current.minrating > 1}>V1</MenuItem>
                <MenuItem value={2} disabled={this.state.current.minrating > 2}>V2</MenuItem>
                <MenuItem value={3} disabled={this.state.current.minrating > 3}>V3</MenuItem>
                <MenuItem value={4} disabled={this.state.current.minrating > 4}>V4</MenuItem>
                <MenuItem value={5} disabled={this.state.current.minrating > 5}>V5</MenuItem>
                <MenuItem value={6} disabled={this.state.current.minrating > 6}>V6</MenuItem>
                <MenuItem value={7} disabled={this.state.current.minrating > 7}>V7</MenuItem>
                <MenuItem value={8} disabled={this.state.current.minrating > 8}>V8</MenuItem>
                <MenuItem value={9} disabled={this.state.current.minrating > 9}>V9</MenuItem>
                <MenuItem value={10} disabled={this.state.current.minrating > 10}>V10</MenuItem>
                <MenuItem value={11} disabled={this.state.current.minrating > 11}>V11</MenuItem>
                <MenuItem value={12} disabled={this.state.current.minrating > 12}>V12</MenuItem>
                <MenuItem value={13} disabled={this.state.current.minrating > 13}>V13</MenuItem>
                <MenuItem value={14} disabled={this.state.current.minrating > 14}>V14</MenuItem>

              </Select>
            </FormControl>
            <FormControl>
            <TextField
              id="start_date"
              label="Start Date"
              type="date"
              name="start_date"
              defaultValue={this.state.current.start_date}
              className={classes.textField}
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
                name: "start_date",
              }}
              inputProps={{
                max: this.state.current.end_date,
                name: 'start_date'
              }}
              />
            </FormControl>
            <FormControl>
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue={this.state.current.end_date}
              className={classes.textField}
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
                name: "end_date",
              }}
              inputProps={{
                min: this.state.current.start_date,
                name: 'end_date'
              }}
              />
            </FormControl>

          </form>
          <FormGroup>
            <Button disabled={isEquivalent(this.state.current, this.state.previous)}
            onClick={() => {
              this.props.getActivities(this.props.searchParams)
              this.setState({...this.state, previous: {
                ...this.state.current
              }})
            }}>
              Update
            </Button>
          </FormGroup>
        </Toolbar>
      </AppBar>
    )
  }
}
Parameters.propTypes = {
  classes: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    searchParams: state.map.searchParams
  }
}
export default connect(mapStateToProps, { updateQueryParams, getActivities })(withStyles(styles)(Parameters))
