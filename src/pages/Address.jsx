import React from 'react'
import { Link } from 'react-router-dom'

function Address() {
  return (
    <div className='text-center w-75 container  justify-content-center align-items-center rounded m1' style={{border:"black solid 1px"}}>
<h1>Enter Complete Address</h1>
<br />

<div >
    
    <input type="radio" class="btn-check " name="options-outlined" id="danger-outlined" autocomplete="off"/>
    <label class="btn btn-outline-danger mx-2" for="danger-outlined">Home</label>
    
    <input type="radio" class="btn-check " name="options-outlined" id="danger-outlined" autocomplete="off"/>
    <label class="btn btn-outline-danger mx-2" for="danger-outlined">work</label>
    
    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"/>
    <label class="btn btn-outline-danger mx-2" for="danger-outlined">Hotel</label>
    
    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off"/>
    <label class="btn btn-outline-danger mx-2" for="danger-outlined">Other</label>
</div>
<div>
    <input className='my-4 mx-3 w-50 rounded' type="text" placeholder="Receiver's Name "/>
    <input className='my-4 mx-3 w-50 rounded' type="text" placeholder="Receiver's Contact "/>
    <input className='my-4 mx-3 w-50 rounded' type="text" placeholder="Flat/House no/Floor /Building "/>
    <input className='my-4 mx-3 w-50 rounded' type="text" placeholder="Area/Secter/Floor/building "/>
    <input className='my-4 mx-3 w-50 rounded' type="text" placeholder="Nearby landmark (optional) "/>
</div>
<div>
<Link to={'/payment'}>
        <button className='btn btn-danger my-3'>Save Address</button>
    
</Link></div>
 


    </div>
  )
}

export default Address