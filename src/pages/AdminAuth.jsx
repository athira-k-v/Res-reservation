import React, { useState } from 'react'
// import { ToastContainer } from 'react-bootstrap'
import {  Link,useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';
import Spinner from 'react-bootstrap/Spinner';


function Auth({insideRegister}) {

const [loginStatus,setLoginStatus]=useState(false)
  const navigate=useNavigate()

  
  const [userInputData, setUserInputData] = useState({
    username: "", email: "", password: ""
  })



const handleRegister=async(e)=>{
  e.preventDefault()
  // console.log(userInputData);
  const {username,email,password}=userInputData
if(!username ||!email ||!password){
  toast.info("Please fill the form Completely")
}else{
try{
  const result=await registerAdminAPI(userInputData)
  console.log(result);
  if (result.status === 200) {
    toast.success(`Welcome ${result.data.username}... Please login to explore the site !!!`)
    setUserInputData({username:"",email:"",password:""})
setTimeout(()=>{
  navigate("/login")
},2000)
  }else
  toast.warning(result.response.data)
}catch(err){
  console.log(err);
}
}
}




const handleLogin=async(e)=>{
  e.preventDefault()
  // console.log(userInputData);
  const {email,password}=userInputData
if(!email ||!password){
  toast.info("Please fill the form Completely")
}else{
try{
  const result=await loginAPI({email,password})
  console.log(result);
  if (result.status===200) {
    sessionStorage.setItem("username",result.data.existingUser.username)
    sessionStorage.setItem("token",result.data.token)
setLoginStatus(true)
    setUserInputData({email:"",password:""})
setTimeout(()=>{
  navigate("/")
setLoginStatus(false)
},1000)
  }else
  toast.warning(result.response.data)
}catch(err){
  console.log(err);
}
}
}






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
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter Name" value={userInputData.username} onChange={e=>setUserInputData({...userInputData,username:e.target.value}) }/>
                </Form.Group>
              }
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email"  value={userInputData.email} onChange={e => setUserInputData({ ...userInputData,email:e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPswd">
                <Form.Control type="password" placeholder="Enter password" value={userInputData.password} onChange={e=>setUserInputData({...userInputData,password:e.target.value}) }  />
              </Form.Group>

              {
                insideRegister ?
                  <div>
                    <button onClick={handleRegister} className='btn btn-warning mb-2'>Register</button>
                    <p>Already have Account? Click here to <Link to={'/login'} className='text-dark'>Login</Link></p>
                  </div> :
                  <div>
                    <button onClick={handleLogin}  className='btn btn-warning mb-2'>Login {loginStatus&& <Spinner animation="border" variant="primary" />}</button>
                    <p>New User? Click here to <Link to={'/register'} className='text-dark'>Register</Link></p>

                  </div>
              }
            </Form>

          </div>
        </div>
      </div>
    </div>  
        <ToastContainer autoClose={3000} theme='colored'></ToastContainer>


  </div>

</>

  )
}

export default Auth