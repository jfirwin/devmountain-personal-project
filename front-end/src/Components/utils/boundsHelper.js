export default function boundsHelper(bounds) {
  let viewportBounds = {
    north: bounds._northEast.lat,
    east: bounds._northEast.lng,
    south: bounds._southWest.lat,
    west: bounds._southWest.lng
  }
  return viewportBounds
}
