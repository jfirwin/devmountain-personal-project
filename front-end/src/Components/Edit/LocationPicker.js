import React, { Component } from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

class LocationPicker extends Component {
  constructor(){
    super()

    this.state = {
      position: []
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
        zoom={4}
        center={[39.8283,-98.5795]}
        onClick={this.setMarker}
        worldCopyJump="true"
        style={{height:'200px', width:'100%'}}
      >
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png"
        />
        {
          this.state.position.length === 2
          ?
          <Marker position={this.state.position} draggable={true} onDragEnd={this.setMarkerFromDrag}/>
          :
          null
        }
      </Map>
    )
  }
}

export default LocationPicker;
