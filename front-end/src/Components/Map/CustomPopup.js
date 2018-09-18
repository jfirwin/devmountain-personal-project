import React from 'react'
import { Popup } from 'react-leaflet'
import PopupContent from './PopupContent'

const CustomPopup = (props) => {
  return(
    <Popup offset={[0,-40]}>
      <PopupContent activity={props.marker}/>
    </Popup>
  )
}
export default CustomPopup
