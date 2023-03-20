import React from 'react'

export default function ValidationPopUp(props) {
  return (
    <div className="validation-popup">
    <div className="validation-popup-content">
      <h3 className='bold-font title-spacing'>Please select a plan before proceeding.</h3>
      <button className='next-button' onClick={() => props.handlePopup()}>OK</button>
    </div>
  </div>
  )
}
