import React, { useState } from 'react'
import {Col, Modal, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import SERVER_URL from '../services/serverUrl';
import { useDispatch } from 'react-redux';
// import { addToCartHandler } from '../actions/cartActions';
// import { Link } from 'react-router-dom';
// import Header from './Header';


function ResCard({menu}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// const dispatch=useDispatch()
//   const addToCartHandler=()=>{
    
// dispatch(addToCartHandler(menu,quantity))



//   }

  return (
    
    <>
         
         <Card className='shadow mb-5 btn'style={{width:'20rem'}} onClick={handleShow}>
        <Card.Img  style={{height:"20rem"}}  variant="top" src={`${SERVER_URL}/uploads/${menu?.menuImage}`} />
        <Card.Body>
          <Card.Title >{menu?.menuName}</Card.Title>
        </Card.Body>
      </Card>
     
<Modal size='lg'   show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{menu?.menuName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src={`${SERVER_URL}/uploads/${menu?.menuImage}`} alt="" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className='fw-bolder text-warning'>{menu?.menuName}</h2>
              <h3 className='fw-bolder text-info'>Rs.{menu?.price}</h3>
              <h4>{menu?.description}</h4>
              {/* <select className='m-2 w-100 h-10  rounded'>
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i+1} value={i+1} >{i+1}</option>
                  )
                })}
              </select> */}
             {/* <div className='d-inline h-100 fs-5'>
Total price
             </div> */}
            </Col>
          </Row>
          {/* <div className='mt-3'>
           <button   className='btn btn-danger ms-2'>ADD ITEM</button>
           {/* <button className='btn btn-danger ms-5'>PLACE ORDER</button> */}
          {/* </div>} */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ResCard