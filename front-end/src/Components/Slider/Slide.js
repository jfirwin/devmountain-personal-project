import React from 'react'

const Slide = ({img}) => {
  return(
    <img src={img.src} alt={img.alt} style={{height:'100%',objectFit:'cover',minWidth:'100%',maxWidth:'100%',boxSizing:'border-box'}}/>
  )
}
export default Slide
