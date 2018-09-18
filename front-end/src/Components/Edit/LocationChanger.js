import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

class LocationChanger extends Component {
  constructor(props){
    super(props)

    this.state = {
      position: props.markerLocation
    }
  }

  setMarker = (e) => {
    this.setState({position: [e.latlng.lat,e.latlng.lng]})
    this.props.update(this.state.position)
  }
  setMarkerFromDrag = (e) => {
    let latlng = e.target._latlng
    this.setState({position: [latlng.lat,latlng.lng]})
    this.props.update(this.state.position)
  }

  render() {
    return (
      <Map
        scrollWheelZoom={false}
        ref="activityLocation"
        zoom={8}
        center={this.state.position}
        onClick={this.setMarker}
        worldCopyJump="true"
        style={{height:'200px', width:'100%'}}
      >
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
        />
        <Marker position={this.state.position} draggable={true} onDragEnd={this.setMarkerFromDrag}/>
      </Map>
    )
  }
}

export default LocationChanger;
