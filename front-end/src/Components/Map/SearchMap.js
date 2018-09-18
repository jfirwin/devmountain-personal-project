import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer } from 'react-leaflet'
import { setViewportBounds } from '../../Redux/Actions/mapActions'
import { getActivities } from '../../Redux/Actions/activityActions'
import MarkersList from './MarkersList'

class SearchMap extends Component {
  componentDidMount() {
    this.element = this.refs.searchMap
    let bounds = this.refs.searchMap.leafletElement.getBounds()
    this.props.setViewportBounds(bounds)
    // this.props.getActivities(this.props.searchParams)
  }

  handleMoveend = () => {
    let bounds = this.refs.searchMap.leafletElement.getBounds()
    this.props.setViewportBounds(bounds)
    if(this.props.searchOnChange) {
      this.props.getActivities(this.props.searchParams)
    }
  }
  render() {
    const center = [this.props.coordinates.lat, this.props.coordinates.lng]
    return (
      <Map
        center={center}
        zoom={this.props.coordinates.zoom}
        scrollWheelZoom={!this.props.scrollLock}
        onMoveend={()=>this.handleMoveend()}
        ref="searchMap"
        worldCopyJump="true"
      >
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
        />
        <MarkersList markers={this.props.markers} />
      </Map>
    )
  }
}
const mapStateToProps = state => {
  return {
    scrollLock: state.map.scrollLock,
    coordinates: state.map.searchterm.position || state.map.coordinates,
    markers: state.activities.markers,
    searchOnChange: state.activities.searchOnChange,
    viewportBounds: state.map.viewportBounds,
    searchParams: state.map.searchParams
  }
}
export default connect(mapStateToProps, {setViewportBounds, getActivities})(SearchMap);
