import React from 'react'

export default function PersonInfo(props) {

  return (
    <>
      <h2 className='bold-font title-spacing'>Personal info</h2>
      <p className='medium-font'>Please provide your name, email address and phone number.</p>
      <div className='flexColumn'>
        <label className='flexColumn regular-font personal-label'>Name
        <input className='personal-input font-size' 
          type='text'
          name='name'
          value={props.formState.name}
          onChange={(event) => props.handleFormUpdate(event, 'text')} 
          required
        />
        </label>
        <label className='flexColumn regular-font personal-label'>Email Address
        <input className='personal-input font-size' 
          type='email'
          name='email' 
          value={props.formState.email}
          onChange={(event) => props.handleFormUpdate(event, 'text')} 
          required
        />
        </label>
        <label className='flexColumn regular-font personal-label'>Phone Number
        <input className='personal-input font-size' 
          type='text'
          name='phoneNumber' 
          value={props.formState.phoneNumber}
          onChange={(event) => props.handleFormUpdate(event, 'text')} 
          required
         />
         </label>
      </div>
    </>
  )
}
