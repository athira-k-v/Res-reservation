import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Work() {
  return (
    <div>
        <Row className=' text-center'>
            <h1><b>How  It Works.</b></h1>
            <Col lg={4}>
                <img style={{height:'200px',width:"200px"}} src="https://i.postimg.cc/Dz0fxfrH/do-list-concept-character-writes-260nw-2211910347.webp" alt="" />
            <h2>Your Order</h2>
            <p>Thank you for being valued customer. We are so grateful to serving for the honored be clients pleasure of serving hope we meets</p>
            </Col>
            <Col lg={4}>
                <img style={{height:'200px',width:"200px"}} src="https://i.postimg.cc/k4C8Vb3K/istockphoto-1145800930-612x612.jpg" alt="" />
            <h2>Cash On Delivery</h2>
            <p>Online food Delivery for hiring Food Foodota We appreciate your business, and we’ll do best to continue to give you the new kind.</p>
            </Col>
            <Col lg={4}>
                <img style={{height:'200px',width:"200px"}} src="https://i.postimg.cc/MZD4p020/47024f8abcd68186621e38ad5fc0dec9.jpg" alt="" />
                <h2>Receive Order</h2>
                <p>We at truly appreciate your business and we’re grateful for the trust you’ve placed in us. We sincerely hope you are satisfied</p>
            </Col>
        </Row>
    </div>
  )
}

export default Work