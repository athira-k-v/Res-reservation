// import React from 'react'
// import { Link } from 'react-router-dom'
import About from '../components/About'
// // import bgi from '../assets/bgi.png'
// import ResCard from '../components/ResCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import bgi from '../assets/photo.png'
import ResCard from '../components/ResCard'
// import Work from '../components/Work'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { getHomeMenuAPI } from '../services/allAPI'




function Home() {


  const [allMenu, setAllMenu] = useState([])

  const [loginStatus, setloginStatus] = useState(false)


  const navigate = useNavigate()


  const getHomeMenu = async () => {
    try {
      const result = await getHomeMenuAPI()
      if (result.status === 200) {
        setAllMenu(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(allMenu);

  useEffect(() => {
    getHomeMenu()
    if (sessionStorage.getItem("token")) {
      setloginStatus(true)
    } else {
      setloginStatus(false)
    }
  }, [])

  const handleNavigate = () => {
    if (loginStatus === true) {
      navigate('/dashboard')
    } else {
      toast.warning("Please login")
    }

  }
 

  const handleNavigateReserve = () => {
    if (loginStatus === true) {
      navigate('/reservation')
    } else {
      toast.warning("Please login")
    }

  }

  return (
    <>
      <Header></Header>




      <div style={{ height: '120vh' }} className='bg w-100 d-flex justify-content-center align-items-center rounded mt-3 mb-5'>
        <div className="container">
        <Link style={{ textTransform: 'none', color: 'black' }} className='btn btn-info mt-3 shadow mt-3 mb-4' to={'/admin'}>admin </Link>
          {/* <span onClick={handleNavigateCart}>  <i className='fa-solid fa-cart-plus text-warning b1  top-50 start-99 translate-middle fa-2xl'></i></span> */}
          {/* <span onClick={handleNavigateWishlist}> */}
            {/* <i style={{ marginTop: "40px" }} className='fa-solid fa-heart  text-danger  b1  top-50 start-2 translate-middle fa-2xl '></i>

          </span> */}
          {/* <h4 style={{ color: "chocolate" }}><i className="fa-solid fa-truck pb-3 "></i>Easy Way To Order Your Food...</h4> */}


          <h3 style={{ fontSize: '70px' }} className='fw-bolder text-light mb-5 text-start text-white'>
            Order Healthy And <br />Fresh Food Any Time

          </h3>
          <div className="col-lg-5">
            <p className='mt-4' style={{ textAlign: 'justify', color: 'white' }}>Italian food makes people think of big family dinners.
              So you may want to position your restaurant
              as a place to bring the whole family.
            </p>

            {loginStatus ? <Link style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow mt-3 mb-4' to={'/dashboard'}>View Menu<i className="fa-solid fa-arrow-right-long"></i> </Link> :
              <Link style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow mt-3 mb-4' to={'/login'}>Starts to Explore <i className="fa-solid fa-arrow-right-long"></i> </Link>
            }    

            </div>

            <div onClick={handleNavigateReserve}  style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow mt-3 mb-4' >Reserve Your Seat <i className="fa-solid fa-arrow-right-long"></i> </div>


{/* {loginStatus ? 
<Link style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow mt-3 mb-4' to={'/reservation'}>Reserve Your Seat<i className="fa-solid fa-arrow-right-long"></i> </Link>
 :
              <Link style={{ textTransform: 'none', color: 'black' }} className='btn btn-warning mt-3 shadow mt-3 mb-4' to={'/reservation'}>Reserve Your Seat <i className="fa-solid fa-arrow-right-long"></i> </Link>
            }   */}

    </div>
      </div>
      <About></About>
      

      <div className="mt-5">
        <h1 className='text-center mb-5 p-5'>What's On Your Mind </h1>

        <marquee >
          <div className="d-flex ">

            {allMenu.length>0 && allMenu.map((menu,index)=>(
              <div key={index} className="project me-5 ">
                <ResCard menu={menu} />
              </div>
            
            ))
}
              
          </div>
        </marquee>

        <div className="text-center">
          <button style={{ textDecoration: 'none' }} onClick={handleNavigate} className='btn btn-link border-black text-dark btn-warning mt-3 shadow mt-3 mb-4'>View More </button>
        </div>
        {/* <Work></Work> */}
        <Footer></Footer>
        <ToastContainer autoClose={3000} theme='colored'></ToastContainer>

      </div>

    </>
  )
}

export default Home