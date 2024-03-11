import React, { useEffect, useState } from 'react'
// import Profile from '../components/Profile'
import MyMenu from '../components/MyMenu'
import ReserveDetails from '../components/ReserveDetails'
import Header from '../components/Header'


function Admin() {

  const[username,setUsername ] = useState("")
  


  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      setUsername(sessionStorage.getItem("username"))
    } else {
      setUsername("")
    }
  }, [])

  return (
    <>
<Header insideDashBoard></Header>
      <div  className='container'>
        <h1 style={{ fontFamily: 'Apple Chancery, cursive', fontSize: '70px',textAlign:'center' ,marginBottom:'100px' }}>Admin</h1>
        <div className='row'>
          
          <div className='col-lg-4'>
            <MyMenu></MyMenu>
          </div>
          <div className='col-lg-8'>
           <ReserveDetails></ReserveDetails>
          </div>

        </div>
      </div>
    </>
  )
}

export default Admin