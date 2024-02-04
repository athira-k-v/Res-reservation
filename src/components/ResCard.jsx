// import { Modal } from 'bootstrap';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import Header from './Header';


function ResCard() {


  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    
    <div style={{ height: '100vh' }}>
          {/* <div className='mt-5'> 
        <h1 className='text-center' >Our Catagories</h1>
       <marquee behavior="" direction=""> 
          <div className='d-flex justify-content-between'>
            <div className='project me-5'>
            
            </div>
          </div>
        </marquee> 
         <div className='text-center'>
              <Link to={'/dashboard'}><button className='btn btn-link'  style={{textDecoration:'none',textTransform:' none'}}>View More </button></Link>
            </div> 
       </div>  */}
   <marquee>
        <CardGroup >
          <Card style={{marginRight:'20px'}}>
            <Card.Img variant="top" style={{height:"300px"}} src="https://i.postimg.cc/XN2wzN2c/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Burger</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{marginRight:'20px'}}>
            <Card.Img variant="top" style={{height:"300px"}} src="https://i.postimg.cc/Gt09ZNyR/vertical-view-delicious-fresh-juices-fruits-wooden-tray-brown-background.jpg"/>
            <Card.Body className='text-center'>
              <Card.Title>Juices</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{marginRight:'20px'}}>
            <Card.Img variant="top" style={{height:"300px"}} src="https://i.postimg.cc/0N2SfLpH/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Pizza</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{marginRight:'20px'}}>
            <Card.Img variant="top" style={{height:"300px"}} src="https://i.postimg.cc/NFMYCkNt/falooda-recipe-1.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Falooda</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
       </marquee>

    </div>
  )
}

export default ResCard