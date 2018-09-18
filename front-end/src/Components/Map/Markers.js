import React from 'react'
import { connect } from 'react-redux'
import { Marker } from 'react-leaflet'
import L from 'leaflet'
import { highlightTile, unhighlightTile } from '../../Redux/Actions/activityActions'
import CustomPopup from './CustomPopup'

const activeIcon = (user) => L.divIcon({
  className: 'hidden',
  html: `<div class="activeIcon"><img src="${user.imgurl || `https://robohash.org/${user.username}?set=set4`}" class="pointerImage"/><div>`,
  iconAnchor: [25.5,60]
})
const dormantIcon = (user) => L.divIcon({
  className: 'hidden',
  html: `<div class="dormantIcon"><img src="${user.imgurl || `https://robohash.org/${user.username}?set=set4`}" class="pointerImage"/><div>`,
  iconAnchor: [25.5,60]
})

const CustomMarker = ({ marker, highlighted, highlightTile, unhighlightTile }) => {
  const style =
    highlighted === marker.activityid ? activeIcon(marker.coordinator) : dormantIcon(marker.coordinator)
  return (
    <Marker
      position={marker.position}
      riseOnHover={true}
      icon={style}
      onMouseOver={(e)=>{
        highlightTile(marker.activityid)
      }}
      onMouseOut={()=>{unhighlightTile()}}
    >
      <CustomPopup marker={marker}/>
    </Marker>
  )
}
const mapStateToProps = state => {
  return {
    highlighted: state.activities.highlighted
  }
}
export default connect(mapStateToProps, {highlightTile, unhighlightTile})(CustomMarker);
