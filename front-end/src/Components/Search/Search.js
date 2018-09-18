import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar/Navbar'
import SearchMap from '../Map/SearchMap'
import MapOverlay from '../Map/MapOverlay'
import ActivityPane from './ActivityPane'
import Parameters from './Elements/Parameters'

class Search extends Component {
  render() {
    return (
      <div style={{height:'100vh', display: 'flex', flexDirection: 'column'}}>
        <Navbar displaySearch="true"/>
        <Parameters/>
        <div style={{display: "flex",height:'100%'}}>
          <ActivityPane/>
          <div>
            <div style={{height:'100%',padding:'20px 20px 20px 0px'}}>
              <MapOverlay/>
              <SearchMap/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
