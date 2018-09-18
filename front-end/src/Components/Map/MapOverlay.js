import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleScrollLock } from '../../Redux/Actions/mapActions'
import { toggleSearchOnChange, getActivities } from '../../Redux/Actions/activityActions'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { scrollToggleWrapper, scrollToggleContainer, scrollToggle, searchToggleContainer, searchToggle } from './MapOverlayStyles'
import { isEquivalent } from '../utils/isEquivalent'

class MapOverlay extends Component {
  render() {
    return (
      <div style={scrollToggleWrapper}>
        <div style={searchToggleContainer}>
          {
              this.props.searchOnChange
              ?
                <a style={searchToggle} onClick={() => {
                this.props.toggleSearchOnChange()}}>
                  <div>
                    <i className="far fa-check-square"/>
                  </div>
                  Search as I move the map
                </a>
              :
                isEquivalent(this.props.viewportBounds,this.props.searchViewportBounds)
                ?
                  <a style={searchToggle} onClick={() => {
                  this.props.toggleSearchOnChange()}}>
                    <div>
                      <i className="far fa-square"/>
                    </div>
                  Search as I move the map
                  </a>
                :
                  <a style={searchToggle} onClick={()=> {
                    this.props.getActivities(this.props.searchParams)}}>
                    <i className="fas fa-sync-alt"/>
                    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                      Refresh search here
                    </div>
                  </a>
        }
        </div>
        <div style={scrollToggleContainer}>
          <a style={scrollToggle} onClick={() => {
            this.props.toggleScrollLock()}}>
            {this.props.scrollLock
              ?
                <i className="fas fa-lock"/>
              :
                <i className="fas fa-lock-open"/>

            }
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    scrollLock: state.map.scrollLock,
    viewportBounds: state.map.viewportBounds,
    searchOnChange: state.activities.searchOnChange,
    searchViewportBounds: state.activities.searchViewportBounds,
    searchParams: state.map.searchParams
  }
}
export default connect(mapStateToProps, {toggleScrollLock, toggleSearchOnChange, getActivities})(MapOverlay);
