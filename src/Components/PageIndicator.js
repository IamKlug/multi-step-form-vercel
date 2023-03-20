import React from 'react'

export default function PageIndicator() {
  return (
    <div className="page-indicator">
    <div className="page-number-container">
      <p className="page-number">1</p>
      <div className="display-text">
        <p className="page-step-font">STEP 1</p>
        <p className="page-desc-font">YOUR INFO</p>
      </div>
    </div>
    <div className="page-number-container">
      <p className="page-number">2</p>
      <div className="display-text">
        <p className="page-step-font">STEP 2</p>
        <p className="page-desc-font">SELECT PLAN</p>
      </div>
    </div>
    <div className="page-number-container">
      <p className="page-number">3</p>
      <div className="display-text">
        <p className="page-step-font">STEP 3</p>
        <p className="page-desc-font">ADD-ONS</p>
      </div>
    </div>
    <div className="page-number-container">
      <p className="page-number">4</p>
      <div className="display-text">
        <p className="page-step-font">STEP 4</p>
        <p className="page-desc-font">SUMMARY</p>
      </div>
    </div>
    <svg className="pink-blob" xmlns="http://www.w3.org/2000/svg" width="266" height="128" viewBox="0 0 266 128" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M202.62 260.909C291.568 219.458 338.71 50.5169 264.003 9.46885C189.295 -31.5792 179.866 79.2148 105.602 120.858C31.337 162.501 -14.8063 194.455 4.39095 250.208C23.5882 305.961 113.671 302.361 202.62 260.909Z" fill="#F9818E"/></svg>
    <svg className="teal-blob" xmlns="http://www.w3.org/2000/svg" width="222" height="225" viewBox="0 0 222 225" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M-34.6921 200.101C3.24693 289.538 168.767 342.017 211.961 269.52C255.155 197.023 145.862 183.867 107.226 108.951C68.5909 34.0349 38.5692 -12.7231 -17.2556 4.34429C-73.0804 21.4116 -72.6312 110.664 -34.6921 200.101Z" fill="#6259FF"/></svg>
    <svg className="orange-circle" xmlns="http://www.w3.org/2000/svg" width="68" height="135" viewBox="0 0 68 135" fill="none"><path d="M0.304688 134.891C37.3078 134.891 67.3047 104.894 67.3047 67.8906C67.3047 30.8876 37.3078 0.890625 0.304688 0.890625C-36.6984 0.890625 -66.6953 30.8876 -66.6953 67.8906C-66.6953 104.894 -36.6984 134.891 0.304688 134.891Z" fill="#FFAF7E"/></svg>
  </div>
  )
}
