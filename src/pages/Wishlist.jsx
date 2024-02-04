import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux'

function Wishlist() {

  // const wishlist=useSelector(state=>state.wishlistReducer)

  // const dispatch=useDispatch()
  
  // const handleRemoveWishlist=(product)=>{
  //   dispatch(removeFromWishlist(product?.id))
  //   dispatch (addToCart(product))
  // }



  return (
    <div>

<div className='bg-dark'>
<Link style={{textDecoration:'none'}} to={'/'}>  <h1 className='text-white p-3 ms-5' style={{fontFamily:"Cursive",fontSize:"70px"}}>Hunger Bounce</h1></Link>
</div>
        <div className='p-5 ' >
            <Card style={{ width: '18rem'}} className='shadow'>
        <Card.Img variant="top" src="https://i.postimg.cc/661J9BDc/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.avif" />
        <Card.Body>
          <Card.Title>Ramen</Card.Title>
          <Button variant="" className='btn btn-link'>        <Link  style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow  mb-4 ' to={''}>Delete </Link>
</Button>
          <Button variant="" className='btn btn-link'>        <Link  style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow  mb-4 ' to={'/cart'}>Add Item</Link>
</Button>
        </Card.Body>
      </Card>
        </div>

{/* 
<div style={{paddingTop:'100px'}}>
       <div className='container'>
        <Row className='mt-5'>
          
         
          <Col  style={{marginBottom:'10px'}} sm={12} md={6} lg={4} xl={3}>
          <Card className='card-shadow' style={{ width: '18rem' }}>
        <Card.Img height={'200px'} variant="top" src="" />
        <Card.Body>
          <div className='d-flex-justify-content-between'>
  <button  className='btn btn-link'> <i className='fa-solid fa-heart-circle-minus text-danger'></i>
  </button>
  <button   className='btn btn-link'><i className='fa-solid fa-cart-plus text-success'></i></button>
          </div>
        </Card.Body>
      </Card>
          </Col>
          
      
        </Row>
       </div>
      </div> */}






{/* <div style={{paddingTop:'100px'}}>
       <div className='container'>
        <Row className='mt-5'>
          {wishlist?.length>0?wishlist?.map((product,index)=>(
          <Col key={index} style={{marginBottom:'10px'}} sm={12} md={6} lg={4} xl={3}>
          <Card className='card-shadow' style={{ width: '18rem' }}>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
          <div className='d-flex-justify-content-between'>
  <button  className='btn btn-link'> <i className='fa-solid fa-heart-circle-minus text-danger'></i>
  </button>
  <button  onClick={()=>handleRemoveWishlist(product)} className='btn btn-link'><i className='fa-solid fa-cart-plus text-success'></i></button>
          </div>
        </Card.Body>
      </Card>
          </Col>
            )):
          <div style={{height:'40vh'}} className='d-flex flex-column justify-content-center align-items-center w-100 mb-5'>
  <img  height={'400px'} src="https://i.postimg.cc/d0B01HBK/confusing-woman-due-to-empty-cart-4558760-3780056.webp" alt="empty cart" />
  <h2 className='text-dark'>Your Wishlist is Empty</h2>
          </div>
          }
        </Row>
       </div>
      </div> */}


    <Footer></Footer>
    </div>
  )
}

export default Wishlist