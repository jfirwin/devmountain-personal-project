import React from 'react'
export function starRating(num) {
  if (num <= 0.5) {
    return (
      <div>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 0.5 && num < 1) {
    return (
      <div>
        <i className="fas fa-star-half-alt"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 1 && num < 1.5) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 1.5 && num < 2) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star-half-alt"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 2 && num < 2.5) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 2.5 && num < 3) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star-half-alt"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 3 && num < 3.5) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="far fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 3.5 && num < 4) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star-half-alt"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 4 && num < 4.5) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="far fa-star"/>
      </div>
    )
  }
  if (num >= 4.5 && num < 5) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star-half-alt"/>
      </div>
    )
  }
  if (num >= 5) {
    return (
      <div>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
        <i className="fas fa-star"/>
      </div>
    )
  }
}
