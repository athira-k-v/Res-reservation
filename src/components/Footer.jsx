import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
 <div> <div className='d-flex justify-content-center align-items-center flex-column text-light mt-5 p-4 py-5' style={{width:"100%",backgroundColor:'black'}}>
    <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
      <div style={{width:'400px'}} className='website'>
        <Link style={{textDecoration:'none',color:'white'}} to={'/'}><h4><i style={{height:'25px'}} ></i><b>Hunger Bounce</b></h4></Link>
        <h6>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</h6>
        <h6>Phone: +92300-400-2333</h6>
        <h6>Email: hungerbounce@gmail.com</h6>
      </div>
      <div className='links d-flex flex-column'>
          <h4>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>About</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Blog</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
      </div>
      <div className='guides d-flex flex-column'>
          <h4>Guides</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>About</Link>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>Pricing Plan</Link>
      </div>
      <div className='contact d-flex flex-column flex-wrap'>
          <h4>Contact Us</h4>
          <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter your mail'/>
                <button className='btn btn-warning ms-3'><i className='fa-solid fa-arrow-right fa-beat'></i></button>
          </div>
          <div className='icons mt-3 d-flex justify-content-between fs-5'>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-linkedin-in'></i></Link>
                <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-facebook'></i></Link>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-twitter'></i></Link>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-tiktok'></i></Link>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-envelope'></i></Link>
                <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-github'></i></Link>

          </div>
      </div>
    </div>
    <div className='pt-3'>Copyright @ 2024 Hunger Bounce. Built with React</div>
  </div></div>

    </div>
  )
}

export default Footer