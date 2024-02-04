import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
<div className='bg-dark'>
          <Link style={{textDecoration:'none'}} to={"/"}>    <h1 className='text-white p-3 ms-5' style={{fontFamily:"Cursive",fontSize:"70px"}}>Hunger Bounce</h1></Link>
  
</div>
      <div className='container'>
      <h3>Cart Summary</h3>
      <table className='table'>
      <thead>
  <tr>
    <th>#</th>
    <th>Product </th>
    <th>Image</th>
    <th>Quantity</th>
    <th>Price</th>
    <th></th>
   
  </tr>
     </thead>
     <tbody>
      <td>1</td>
      <td>Burger</td>
      <td><img width={'100px'} height={'100px'} src="https://i.postimg.cc/XN2wzN2c/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" /></td>
      <td>
      <div className='d-flex align-items-center' > 
         <span   style={{cursor:"pointer"}} className='me-1 fw-bolder btn'>-</span>
         <h5>1</h5>
          <span  style={{cursor:"pointer"}} className='me-1 fw-bolder btn'>+</span>
          </div>
      </td>
      <td>125</td>
      <td></td>
     </tbody>
      </table>
      <Link  style={{ textTransform: 'none', color: 'black' ,textAlign:"center"}} className='btn btn-warning mt-3 shadow mt-3 mb-4 ' to={'/address'}> Continue<i className="fa-solid fa-arrow-right-long"></i> </Link>

      </div>
      


      {/* <div className='d-flex flex-column justify-content-center align-items-center w-100 mb-5' >
              <img height={'100px'} className='img-fluid' src="https://i.postimg.cc/4ynyj6pR/preview-removebg-preview.png" alt="" />
              <h1> Your Cart Is Empty !!!</h1></div>  */}
      
      <Footer></Footer>
    </div>
  
  )}

export default Cart