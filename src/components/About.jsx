import React from 'react'
import about from '../assets/about.jpg'

function About() {
    return (


        <div>
            <div style={{ height: '100vh'}} className='w-100 d-flex justify-content-center align-items-center rounded mt-3 mb-5'>
                <div className="container">

                   

                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <img style={{height:'300px',width:'300px'}} className='img-fluid mt-5' src={about} alt="" />
                        </div>

                        <div className="col-lg-4">
                        <h1 style={{ fontSize: '70px' }} className='fw-bolder text-light mt-5  text-end text-dark'>
                        About Us
                    </h1>
                            <p className='mt-4' style={{ textAlign: 'justify', color: 'black' }}><b>Welcome</b> to <b style={{ color: "chocolate", fontSize: '25px',fontFamily:'cursive' }}>Hunger Bounce</b>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus accusantium blanditiis illum modi adipisci optio dicta ea? Numquam asperiores consequatur officia nobis assumenda provident quisquam nemo ea quis vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptate numquam ullam animi inventore sequi, illum tempora consequatur, repellat perspiciatis officiis laudantium ipsum! Dignissimos excepturi temporibus error, totam unde earum.
                             </p>
                        </div>
                    </div>
                </div>
            </div>



            

        </div>
    )
}

export default About