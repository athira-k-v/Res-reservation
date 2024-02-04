import React from 'react'
import { Badge, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function View() {
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
        <div style={{paddingTop:'100px'}} >
      <div className='container mt-5 mb-5'>
        <div className='row'> 
        <div className='col-lg-4'>
      <img width={'100%'}  src="https://i.postimg.cc/XN2wzN2c/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" />
        </div>
  <div className='col-lg-2'>   
  </div>
  <div className='col-lg-6'>
<Link to={'/wishlist'}>
        <span className=' fa-solid fa-heart text-danger '></span>
    
</Link>    <h1>Burger</h1>
    <h3 className='text-primary'>199</h3>
    <p>
    Chicken Burger Topped with melted cheese slice,leafy lettuce,tomato and burgerious special sauce on a potato bun
    </p>
    <div className='d-flex align-items-center' > 
         <span   style={{cursor:"pointer"}} className='me-1 fw-bolder btn'>-</span>
         <h5>1</h5>
          <span  style={{cursor:"pointer"}} className='me-1 fw-bolder  btn'>+</span>
          </div>
     
    <div className='d-flex-justify-content-between mt-5'>
<Link to={'/cart'}>
          <button className='btn btn-danger mt-3 shadow mt-3 mb-4 me-5' >Add Item</button>
    
</Link><Link to={'/payment'}>
          <button  className='btn btn-danger mt-3 shadow mt-3 mb-4 '>Place Order</button>
    
</Link>    </div>
  </div>
        </div>
      </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default View