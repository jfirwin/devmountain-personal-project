import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar/Navbar'
import MapContainer from '../Map/MapContainer'
import MapOverlay from '../Map/MapOverlay'
import SearchPane from './SearchPane.js'

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
          <div>
            <MapOverlay/>
            <MapContainer/>
          </div>
          <SearchPane/>
        </div>
      </div>
    );
  }
}

export default Search;
