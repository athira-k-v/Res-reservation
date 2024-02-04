// import React from 'react'
// import { Link } from 'react-router-dom'
import About from '../components/About'
// // import bgi from '../assets/bgi.png'
// import ResCard from '../components/ResCard'
import Footer from '../components/Footer'
import Header from '../components/Header'

// function Home() {
//   return (
// //     

    

// <div>
//   <Header></Header>
//   <div style={{height: '100vh'}} className='bg w-100'>
//       <div  className='row align-items'>
        
      
//         {/* <div className='bg-dark'>
//             <h1 className='text-white p-3 ms-5' style={{fontFamily:"Cursive",fontSize:"70px"}}>TideRock</h1>
//             <button style={{marginTop:'50px',marginRight:'80px'}} className='position-absolute top-0 end-0 '></button>
//   </div> */}
  
//        <Link  to={'/cart'}> <i className='fa-solid fa-cart-plus text-dark  b1  top-50 start-100 translate-middle fa-2xl'></i></Link>
//        <Link to={'/wishlist'}> <i className='fa-solid fa-heart  text-dark  b1  top-50 start-0 translate-middle fa-2xl'></i></Link>
  
    
//     <div  style={{paddingTop:'100px',paddingLeft:'100px'}}>
//                     <h4 style={{color:"chocolate"}}><i className=" pb-3 "></i>Easy Way To Order Your Food...</h4>
//                     <h1 style={{fontSize:'50px'}} className='fw-bolder text-light mb-3'>
//                       <i  ></i>
//                       Order Healthy And <br />
//                       Fresh Food Any Time
//                     </h1>
//                     <p style={{textAlign:'justify',color:'white'}}> 
//                     Italian food makes people think of big family dinners. <br />
//                     So you may want to position your restaurant
//                     <br /> as a place to bring the whole family.
                    
    
//     </p>
//                     <Link className='btn btn-warning mt-3' to={'/login'} style={{textTransform:' none'}}>Starts To Explore
//                     <i className='fa-solid fa-arrow-right'></i>
//                     </Link>
//                   </div>
    
//               <About></About>    
//               <ResCard></ResCard>
//               <Footer></Footer>
//       </div>
             
//   </div>
// </div>

//   )
// }

// export default Home








import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import bgi from '../assets/photo.png'
import ResCard from '../components/ResCard'
import bgi from '../assets/bgi.png'
import Work from '../components/Work'


function Home() {

  const navigate=useNavigate()
  const handleNavigate=()=>{
      navigate('/dashboard')
  }

  return (
    <>
<Header></Header>




      <div style={{ height: '120vh' }} className='bg w-100 d-flex justify-content-center align-items-center rounded mt-3 mb-5'>
        <div className="container">
               <Link  to={'/cart'}> <i className='fa-solid fa-cart-plus text-warning b1  top-50 start-99 translate-middle fa-2xl'></i></Link>
        <Link to={'/wishlist'}> <i style={{marginTop:"40px"}} className='fa-solid fa-heart  text-danger  b1  top-50 start-2 translate-middle fa-2xl '></i></Link>

                            <h4 style={{color:"chocolate"}}><i className="fa-solid fa-truck pb-3 "></i>Easy Way To Order Your Food...</h4>


          <h3 style={{ fontSize: '70px' }} className='fw-bolder text-light mb-5 text-start text-white'>
          Order Healthy And <br />Fresh Food Any Time 
          
          </h3>
          <div className="col-lg-5">
              <p className='mt-4' style={{ textAlign: 'justify', color: 'white' }}>                     Italian food makes people think of big family dinners.
                 So you may want to position your restaurant
                     as a place to bring the whole family.
</p>
              <Link style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow mt-3 mb-4' to={'/login'}>Starts to Explore <i className="fa-solid fa-arrow-right-long"></i> </Link>
            </div>
        </div>
      </div>
      <About></About>
      {/* <div style={{ height: '90vh' }} className=' w-100 d-flex justify-content-center align-items-center rounded mt-3 mb-5'>
        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-7">
              <img className='img-fluid' src="" alt="" />
            </div>

            
          </div>
        </div>
      </div> */}
      
      <div className="mt-5">
        <h1 className='text-center mb-5 p-5'>What's On Your Mind </h1>

        <marquee >
          <div className="d-flex ">
            <div className="project me-5 ">
              <ResCard/>
            </div>
            
          </div>
        </marquee>

        <div className="text-center">
          <button style={{textDecoration:'none'}} onClick={handleNavigate} className='btn btn-link border-black text-dark btn-warning mt-3 shadow mt-3 mb-4'>View More </button>
        </div>
        <Work></Work>
        <Footer></Footer>
      </div>

    </>
  )
}

export default Home