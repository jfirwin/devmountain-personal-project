import React from 'react'
import CustomMarker from './Markers'

const MarkersList = ({ markers }) => {
  const items = markers.map((marker) => (
    <CustomMarker key={marker.activityid} marker={marker} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}

export default MarkersList
