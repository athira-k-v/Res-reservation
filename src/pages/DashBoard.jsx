import React from 'react'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { Badge, Col, Nav, Row } from 'react-bootstrap';

function DashBoard() {

  return (
    <div>
         
         <div style={{backgroundColor:'black'}}>
   <Link style={{textDecoration:'none'}} to={"/"}>    <h1 className='text-white p-3 ms-5' style={{fontFamily:"Cursive",fontSize:"70px"}}>Hunger Bounce</h1></Link>
   <button style={{backgroundColor:'black'}} className='position-absolute top-0 end-0'> <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link>
            {/* <Nav.Link ><Link to={'/'} tyle={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping text-primary"></i> Cart <Badge className='bg-black text-white'>5</Badge></Link></Nav.Link> */}
            <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping  text-warning"></i> Cart <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link>

          
          </Nav></button>
    </div>

    

  <Row>
     	
  <Col lg={3}>
    <div className='ps-3'>
      <h2 className='ps-5'>Sort</h2>
      <div>
        <label className='container p-3' > <span style={{marginRight:'90px'}} >Relevance </span>
        <input   type="radio" /> 
        </label>
        <label className='container p-3  '> <span style={{marginRight:'30px'}}>Rating:High to Low</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'>  <span style={{marginRight:'30px'}}>Rating:Low to High</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'> <span style={{marginRight:'70px'}}>Delivary Time</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'> <span style={{marginRight:'48px'}}>Cost:High to low</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'> <span style={{marginRight:'48px'}}>Cost:High to low</span>
        <input type="radio" /> 
        </label>
      </div>
    </div>
  
  </Col>
  
  
  
  
  
  
  
  
  
  
  
  
  
  <Col lg={9}>
    
        <div style={{marginTop:'100px'}} className='container-fluid'> 
          <div className='d-flex justify-content-center-between'>
             <h1 className='ms-5'>Our Menu</h1>
             <input style={{width:'300px'}} className='rounded p-2 ms-auto' type="text" placeholder='Search Our Dish' />
          </div>
    <div>
    
    <div className='p-5 ' >
                <Card style={{ width: '18rem'}} className='shadow'>
    <Link to={'/view'}>
              <Card.Img variant="top" src="https://i.postimg.cc/XN2wzN2c/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" />
      
    </Link>        <Card.Body>
              <Card.Title className='text-center'>Burger</Card.Title>
              
            </Card.Body>
          </Card>
            </div>    
    </div>
    
         </div>
  </Col>
  </Row>
      <Footer></Footer>
    </div>
  )
}

export default DashBoard