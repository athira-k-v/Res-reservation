import React from 'react'
// import { ToastContainer } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
// import 'react-toastify/dist/ReactToastify.css'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


function Auth({insideRegister}) {
  return (
<>

<div style={{  height: '100vh' }} className='d-flex justify-content-center align-items-center a1'>
    <div className=' l1'>

      <Link to={'/'}> <i className="fa-solid fa-xmark fa-2x "></i> </Link>

      <div className='card shadow p-5' style={{backgroundColor:'white'}}>
        <div className='row align-items-center'>

          
          <div >
            <h1 className='fw-bolder  mt-2'>
              <i style={{ height: '41px' }} ></i> Hunger Bounce
            </h1>

            <h5 className='fw-bolder  mt-2'>Sign {insideRegister ? 'Up' : 'In'} to your Account</h5>

            <Form>
              {
                insideRegister &&
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
              }
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email"  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Enter password"   />
              </Form.Group>

              {
                insideRegister ?
                  <div>
                    <button className='btn btn-warning mb-2'>Register</button>
                    <p>Already have Account? Click here to <Link to={'/login'} className='text-dark'>Login</Link></p>
                  </div> :
                  <div>
                    <button className='btn btn-warning mb-2'>Login</button>
                    <p>New User? Click here to <Link to={'/register'} className='text-dark'>Register</Link></p>

                  </div>
              }
            </Form>

          </div>
        </div>
      </div>
    </div>
  </div>

</>

  )
}

export default Auth