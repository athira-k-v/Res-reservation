import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
// import SERVER_URL from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bookReservationAPI } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
// import { menuContext } from '../Context/menuShare';



function Reservation({insideDashBoard}) {













 const navigate=useNavigate()

  
  const [userInputData, setUserInputData] = useState({
    firstName:"",lastName:"",date:"", time:"", email:"",seatNumber:"",phone:""
  })



const handleBooking=async(e)=>{
  e.preventDefault()
  console.log(userInputData);


//   // console.log(userInputData);
  const {firstName,lastName,date,time,email,seatNumber,phone}=userInputData
if(!firstName || !lastName || !date || !time || !email || !seatNumber || !phone){
  toast.info("Please fill the form Completely")
}else{
  // toast.success("proceed api")
try{
  const result=await bookReservationAPI(userInputData)
  console.log(result);
  if (result.status === 200) {
    toast.success(`Booked Successfully `)
    setUserInputData({ firstName:"",lastName:"",date:"", time:"", email:"",seatNumber:"",phone:""})
setTimeout(()=>{
  navigate("/")
},2000)
  }else
  toast.warning(result.response.data)
}catch(err){
  console.log(err);
}
}
}

















  return (
    <div>

      <Header insideDashBoard></Header>
        {/* <section className="reservation" id="reservation"> */}
      {/* <div className="container"> */}
      <div style={{marginTop:'150px'}}>
         <Row className='d-flex text-center justify-content'>
            <Col lg={4}>
              <div className="banner">
                <img src="https://i.postimg.cc/ZnxNkjKs/appointment-booking-with-calendar-52683-39831.avif" alt="res" />
              </div>
            </Col>
         <Col lg={8}>
              <div className="banner">
                <div className="reservation_form_box">
                  <h1>MAKE A RESERVATION</h1>
                  <p>For Further Questions, Please Call</p>
                  <form >
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={userInputData.firstName}
                        onChange={e=>setUserInputData({...userInputData,firstName:e.target.value})}
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={userInputData.lastName}
                        onChange={e=>setUserInputData({...userInputData,lastName:e.target.value})}
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        placeholder="Date"
                        value={userInputData.date}
                        onChange={e=>setUserInputData({...userInputData,date:e.target.value})}
                      />
                      <input
                        type="time"
                        placeholder="Time"
                        value={userInputData.time}
                        onChange={e=>setUserInputData({...userInputData,time:e.target.value})}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="email_tag"
                        value={userInputData.email}
                        onChange={e=>setUserInputData({...userInputData,email:e.target.value})}
                      />
                
                      <input
                        type="number"
                        placeholder="Phone"
                        value={userInputData.phone}
                        onChange={e=>setUserInputData({...userInputData,phone:e.target.value})}
                      />
      
      
      
      <select  className='form-control  se' value={userInputData.seatNumber} onChange={e=>setUserInputData({...userInputData,seatNumber:e.target.value})}  >
          {[...Array(20).keys()].map((x , i)=>{
              return <option value={i+1}>{i+1}</option>
          })}
      </select>
                    </div>
      
      
                    
                    <button
                     onClick={handleBooking}
                  //   onSubmit={handleReservation}
                    >
                      RESERVE NOW{" "}
                      <span>
                        {/* <HiOutlineArrowNarrowRight /> */}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
         </Col>
         </Row>
      </div>
      {/* </div> */}
    {/* </section> */}


    <ToastContainer autoClose={3000}  />
    </div>
  )
}

export default Reservation