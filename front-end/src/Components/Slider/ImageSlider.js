import React, { Component } from 'react'
import Slide from './Slide'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'

class ImageSlider extends Component {
  constructor(props){
    super(props)

    this.state={
      currentIndex: 0
    }
  }
  goToNextSlide = () => {
    if(this.state.currentIndex < this.props.imgs.length - 1) {
      this.setState(prevState => {
        return {currentIndex: prevState.currentIndex + 1}
      })
    } else {
      this.setState({currentIndex: 0})
    }
  }
  goToPrevSlide = () => {
    if(this.state.currentIndex > 0) {
      this.setState(prevState => {
        return {currentIndex: prevState.currentIndex - 1}
      })
    } else {
      this.setState({currentIndex: this.props.imgs.length - 1})
    }
  }
  render() {
    return(
      <div className="slider" style={{position:'relative',height:'100%',boxSizing:'border-box'}}>
        {this.props.imgs.length > 0
          ?
          <div style={{height:'100%',width:'100%',position:'absolute',display:'flex',alignItems:'center',justifyContent:'space-between',boxSizing:'border-box'}}>
            <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
            <RightArrow goToNextSlide={this.goToNextSlide}/>
          </div>
          :
          null
        }
        <Slide img={this.props.imgs[this.state.currentIndex]}/>
      </div>
    )
  }
}
export default ImageSlider
