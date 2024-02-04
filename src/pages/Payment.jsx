import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';
function Payment() {
  return (


    <div>
<div className='bg-dark'>
          <Link style={{textDecoration:'none'}} to={"/"}>    <h1 className='text-white p-3 ms-5' style={{fontFamily:"Cursive",fontSize:"70px"}}>Hunger Bounce</h1></Link>
</div>

<div  >
  <Row  >
    <Col lg={8}>
    <  div className='text-center w-75  p-5 justify-content' >
        <h1 className='text-dark my-3' >Payments</h1>
        <div style={{border:'black solid 1px'}} >
          <div >
            <NavDropdown title="UPI" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1"><label className='container p-3'> <span style={{marginRight:'75px'}}>Google Pay </span>
                    <input type="radio" /> 
                    </label>
                    </NavDropdown.Item>
                    <hr />
                          <NavDropdown.Item href="#action/3.2">
                          <label className='container p-3'> <span style={{marginRight:'112px'}}>Paytm</span>
                    <input type="radio" /> 
                    </label>
                          </NavDropdown.Item>
                          <hr />
                          <NavDropdown.Item href="#action/3.3"><label className='container p-3'> <span style={{marginRight:'48px'}}>Add new UPI Id</span>
                    <input type="radio" /> 
                    </label></NavDropdown.Item>
                        
                          
                        </NavDropdown>
          </div>
          <hr />
          <div>
          <NavDropdown title="Credi/Debit/ATM Card" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">


                    
                         <div>
                            Card Number
                            <input type="text" placeholder='xxxx xxxx xxxx xxxx' className='my-2' /><hr />
                         </div>
                         <div>
                          Valid Thru <input type="text" placeholder='MM/YY' /> CVV <input type="text" placeholder='CVV' /><br /><hr />
          <button className='btn btn-warning text-center'>Pay</button>
                         </div>
                          
                 
                  </NavDropdown.Item>
                       
                      
                        
                      </NavDropdown>
          </div>
        </div>
      </div>
    </Col>
    <Col lg={4} className='p-5'>
    <div className='shadow border rounded '>
                    <h4>Total product: <span className='fw-border text-danger'>1</span></h4>
                    <h4>Delivary Charge: <span className='fw-border text-success'>Free</span></h4>
  
                    <h4>Total Amount: <span className='fw-border text-danger'>199</span></h4>
                    <hr />
                   
                  </div>
    </Col>
  </Row>
</div>

{/* <div>
    <h1 className='p-5'>Payment Details</h1>
    <h4 className='ps-5 pb-4'>Please Enter Your Card Details</h4>
    <table className='table p-5'>
    <thead>
  <tr>
    <th className='ps-5 container w-50'>#</th>
    <th><input type="text" /></th>
   
    <th></th>
   
  </tr>
     </thead>
    </table>
<div className='text-center p-5'>
        <Link  style={{ textTransform: 'none', color: 'black' ,textAlign:"center"}} className='btn btn-warning mt-3 shadow  mb-4 ' to={''}>Place Order <i className="fa-solid fa-arrow-right-long"></i> </Link>
    
</div>
</div> */}
<Footer></Footer>
    </div>
  )
}

export default Payment