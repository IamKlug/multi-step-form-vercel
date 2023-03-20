import React from 'react'

export default function FinishingUp(props) {

  const addonCost = props.formState.addons.reduce((total, addon) => {
    return total + props.cost[addon];
  }, 0); 

  return (
    <>
      <h2 className='title-spacing' >Finishing up</h2>
      <p className='medium-font gap'>Double-check everything looks OK before confirming.</p>
      <div>
        <p className='billing-period billing-statement'>
         <p className='bold-font'>{props.formState.plan}</p><p className=''>
          
          ${props.formState.yearly_billing ?
         props.cost[props.formState.plan] * 10 + "/yr":
         props.cost[props.formState.plan] + "/mo" }</p></p>
         <hr/>
        {props.formState.addons.map((addon)=>
        
        (<p className='billing-period billing-statement'><p>{addon.replace("_", " ")}</p><p className=''>
         ${props.formState.yearly_billing ?
          props.cost[addon] * 10 + "/yr" :
          props.cost[addon] + "/mo"}</p></p>))}
        
      </div>
      <div className='billing-period billing-statement total-cost'><p>Total</p><p className='bold-font total-cost-amount'>
        {props.formState.yearly_billing ? 
        (props.cost[props.formState.plan]+ addonCost)  * 10 + "/yr":
        (props.cost[props.formState.plan]+ addonCost) + "/mo"}</p></div>

    </>
  )
}
 