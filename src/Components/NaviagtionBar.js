import React from 'react'

export default function NaviagtionBar(props) {
  return (
    <div className="form-footer">
    <button
      className={`back-button next-button font-size${
        window.location.pathname === "/" ? " white-out-back-button" : ""
      }`}
      onClick={() => props.handleNavagation(true)}
    >
      Go Back
    </button>
    <button
      type="submit"
      className={` next-button font-size ${
        window.location.pathname === '/finishing-up' ? 'confirm' : ''
      }`}
      onClick={() => props.handleNavagation(false)}
    >
      {window.location.pathname === '/finishing-up' ? 'Confirm' : 'Next Step'}
    </button>
  </div>
  )
}
