import React from 'react'

export default function AddOns(props) {
  return (
    <React.Fragment>
      <h2 className='bold-font title-spacing'>Pick add-ons</h2>
      <p className='medium-font gap'>Add-ons help enhance your gaming experience.</p>
      <label className='option-border flexRow'>
        <input className='checkbox'
          type='checkbox'
          name='Online_service'
          checked={props.formState.addons.includes('Online_service')}
          onChange={(event) => props.handleFormUpdate(event, "checkbox")}
        />
        <p><p className='bold-font'>Online service</p>
        Access to multiplayer games
        </p>
        <p className='showCost'>${
          props.formState.yearly_billing ? props.cost.Online_service  * 10 + "/yr":
          props.cost.Online_service + "/mo"}</p>
      </label>
      <label className='option-border flexRow'>
        <input className='checkbox'
          type='checkbox'
          name='Larger_storage'
          checked={props.formState.addons.includes('Larger_storage')}
          onChange={(event) => props.handleFormUpdate(event, "checkbox")}
        /><p><p className='bold-font'>Larger storage </p>
        Extra 1TB of cloud save
        </p>
        <p className='showCost'>${
          props.formState.yearly_billing ? props.cost.Larger_storage  * 10 + "/yr":
          props.cost.Larger_storage + "/mo"
        }</p>
      </label>
      <label className='option-border flexRow'>
        <input className='checkbox'
          type='checkbox'
          name='Customizable_profile' 
          checked={props.formState.addons.includes('Customizable_profile')}
          onChange={(event) => props.handleFormUpdate(event, "checkbox")}
        /><p><p className='bold-font'>Customizable profile</p>
        Custon theme on your profile
        </p>
        <p className='showCost'>${
          props.formState.yearly_billing ? props.cost.Customizable_profile  * 10 + "/yr":
          props.cost.Customizable_profile + "/mo"
        }</p>
      </label>
    </React.Fragment>
  )
}
