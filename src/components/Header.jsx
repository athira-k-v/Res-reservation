import React, { useEffect, useState } from 'react'
import { Badge, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
// import { useSelector } from 'react-redux';


function Header({insideDashBoard}) {



  // const cartstate=useSelector(state.cartReducer)


//  const [loginStatus, setloginStatus] = useState(false)


//   const navigate = useNavigate()

  


//   useEffect(() => {

//     if (sessionStorage.getItem("token")) {
//       setloginStatus(true)
//     } else {
//       setloginStatus(false)
//     }
//   }, [])

//   const handleNavigate = () => {
//     if(loginStatus===true){
//       navigate('/dashboard')
//     }else{
//       toast.warning("Please login")
//     }
   
//   }

// const [isAuthorised,setIsAuthorised] = useContext(TokenAuthContext)


const navigate=useNavigate()

  const handleLogOut=()=>{
    sessionStorage.clear()
    // setIsAuthorised(false)
    navigate('/')
  }





  return (
    <div>
<Navbar expand="lg" style={{backgroundColor:'black',zIndex:2}} className=' w-100 position-fixed'>
      <Container>
        <Navbar.Brand  style={{textDecoration:'none', color:'white',fontSize:'50px',fontFamily:"Cursive"}} className='fw-bolder'>
        Hunger Bounce</Navbar.Brand>


       
        {/* <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link>
            {/* <Nav.Link ><Link to={'/'} tyle={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping text-primary"></i> Cart <Badge className='bg-black text-white'>5</Badge></Link></Nav.Link> */}
            {/* <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping  text-warning"></i> Cart <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link>
          </Nav> */}

          {/* <NavDropdown  title={<i className="fa-solid fa-braille text-light" ></i>} id="basic-nav-dropdown">
<span onClick={handleNavigate} style={{textDecoration:'none'}}>
                <NavDropdown.Item href="#action/3.1">Admin</NavDropdown.Item>
  
</span>             
{/* <span onClick={handleNavigateCart} style={{textDecoration:'none'}}> */}
   {/* <NavDropdown.Item href="#action/3.2">
                  Cart */}
                  {/* {cartstate.cartItems.length} */}
                {/* </NavDropdown.Item> */}
{/* </span> */}
{/* <Link to={'/admin'} style={{textDecoration:'none'}}>
                <NavDropdown.Item href="#action/3.3">Admin</NavDropdown.Item>
  
</Link>             */}
            
            {/* </NavDropdown>  */}

            


            {
insideDashBoard&&

<div className='ms-auto'>
  <button onClick={handleLogOut} style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'><i className='fa-solid fa-sign-outn me-2'></i>LogOut</button>
</div>


}







        
      </Container>
    </Navbar>
    <ToastContainer autoClose={3000} theme='colored'></ToastContainer>


    </div>
  )
}

export default Header