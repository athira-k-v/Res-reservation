import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { Badge, Col, Nav, Row } from 'react-bootstrap';
import { getAllMenuAPI } from '../services/allAPI';
import ResCard from '../components/ResCard';

function DashBoard() {

  const [searchKey, setSearchKey] = useState("")

  const [allMenu,setAllMenu]=useState([])


  const getAllMenu = async () => {
    try {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader={
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`     
        }
      
      const result=await getAllMenuAPI(searchKey,reqHeader)
      if(result.status===200){
        setAllMenu(result.data);
      }
    }
   } catch (err) {
      console.log(err);
    }
  };

  console.log(allMenu);

  useEffect(()=>{
    getAllMenu()
  
  },[searchKey])

  return (
    <div>
         
         <div style={{backgroundColor:'black'}}>
   <Link style={{textDecoration:'none'}} to={"/"}>    <h1 className='text-white p-3 ms-5' style={{fontFamily:"Cursive",fontSize:"70px"}}>Hunger Bounce</h1></Link>
   <button style={{backgroundColor:'black'}} className='position-absolute top-0 end-0'> <Nav className="ms-auto">
            {/* <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link> */}
            {/* <Nav.Link ><Link to={'/'} tyle={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping text-primary"></i> Cart <Badge className='bg-black text-white'>5</Badge></Link></Nav.Link> */}
            {/* <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping  text-warning"></i> Cart <Badge className='bg-black text-white'>1</Badge></Link></Nav.Link> */}

          
          </Nav></button>
    </div>

    

  {/* <Row>
     	
  <Col lg={3}>
    <div className='ps-3'>
      <h2 className='ps-5'>Sort</h2>
      <div>
        <label className='container p-3' > <span style={{marginRight:'90px'}} >Relevance </span>
        <input   type="radio" /> 
        </label>
        <label className='container p-3  '> <span style={{marginRight:'30px'}}>Rating:High to Low</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'>  <span style={{marginRight:'30px'}}>Rating:Low to High</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'> <span style={{marginRight:'70px'}}>Delivary Time</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'> <span style={{marginRight:'48px'}}>Cost:High to low</span>
        <input type="radio" /> 
        </label>
        <label className='container p-3'> <span style={{marginRight:'48px'}}>Cost:High to low</span>
        <input type="radio" /> 
        </label>
      </div>
    </div>
  
  </Col>
  
  
  
  
  
  
  
  
  
  
  
  
  
  <Col lg={9}>
    
  <span className='mt-5 ms-5'>
         {allMenu.length>0?allMenu.map((project,index)=>(
             <Col key={index} sm={12} md={6} lg={4}>
             <Rescard menu={menu}></Rescard>
           </Col>
         )):
         <div className="fw-bolder fs-4 text-danger">Nothing to display!!</div>
         }
         </span>

  </Col>
  </Row> */}




<div style={{marginTop:'100px'}} className='container-fluid'> 
      <div className='d-flex justify-content-center-between'>
         <h1 className='ms-5'>All Menu</h1>
         <input onChange={e=>setSearchKey(e.target.value)} style={{width:'300px'}} className='rounded p-2 ms-auto' type="text" placeholder='Search Menu' />
      </div>
{/* <Row className='mt-5'>
{ 
allProjects.length>0? allProjects?.map((project,index)=(
  <Col key={index} sm={12} md={6} lg={4}>
    <Projectcard project={project}></Projectcard>
  </Col>
)):
<div className='fw-bolder text-danger fs-4'>
Nothing To Display !!!
</div>
  
  }
</Row> */}


<Row className='mt-5 ms-5'>
         {allMenu.length>0?allMenu.map((menu,index)=>(
             <Col key={index} sm={12} md={6} lg={4}>
             <ResCard menu={menu}></ResCard>
           </Col>
         )):
         <div style={{fontSize:"50px",fontFamily:'cursive'}} className="fw-bolder text-danger  text-center container">Nothing to Display ..!!</div>
         }
         </Row>
     </div>


      <Footer></Footer>
    </div>
  )
}

export default DashBoard