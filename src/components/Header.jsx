import React from 'react'
import { Badge, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
<Navbar expand="lg" style={{backgroundColor:'black',zIndex:2}} className=' w-100 position-fixed'>
      <Container>
        <Navbar.Brand  style={{textDecoration:'none', color:'white',fontSize:'50px',fontFamily:"Cursive"}} className='fw-bolder'>
        Hunger Bounce</Navbar.Brand>


       
        <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link>
            {/* <Nav.Link ><Link to={'/'} tyle={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping text-primary"></i> Cart <Badge className='bg-black text-white'>5</Badge></Link></Nav.Link> */}
            <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping  text-warning"></i> Cart <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link>
          </Nav>

          
        
      </Container>
    </Navbar>


    </div>
  )
}

export default Header