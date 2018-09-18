import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar/Navbar'
import HomeTile from './HomeTile'
import './backgroundAnimation.css'
// backgroundImage: 'url("./imgs/spotter.JPG")',backgroundRepeat:'no-repeat', backgroundSize:'cover'

class Home extends Component {
  render() {
    return (
      <div style={{height:'100vh'}}>
      <Navbar/>
      <ul className="cb-slideshow">
      	<li>
      		<span>Image 01</span>
      		<div/>
      	</li>
        <li>
      		<span>Image 02</span>
      		<div/>
      	</li>
      	<li>
      		<span>Image 03</span>
      		<div/>
      	</li>
        <li>
      		<span>Image 04</span>
      		<div/>
      	</li>
      	<li>
      		<span>Image 05</span>
      		<div/>
      	</li>
        <li>
      		<span>Image 06</span>
      		<div/>
      	</li>
      	<li>
      		<span>Image 07</span>
      		<div/>
      	</li>
        <li>
      		<span>Image 08</span>
      		<div/>
      	</li>
      </ul>
        <HomeTile/>
      </div>

    );
  }
}

export default Home;
