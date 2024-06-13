import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SERVER_URL from '../services/serverUrl'
import { updateMenuAPI } from '../services/allAPI'
import { updateResponseContext } from '../Context/ContextShare'
// import trans from '../assets/trans.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Edit({menu}) {

  const {editResponse,setEditResponse}=useContext(updateResponseContext)

  const [menuData, setMenuData] = useState({
   id:menu._id,menuName:menu.menuName, description:menu.description, rating:menu.rating, price:menu.price, menuImage: ""
  })

  const [preview,setPreview]=useState("")

  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>{
  setShow(false)
  setMenuData({id:menu._id,menuName:menu.menuName, description:menu.description, rating:menu.rating, price:menu.price, menuImage: ""
})
setPreview("")
  }

  
  useEffect(()=>{
    if(menuData.menuImage){
    setPreview(URL.createObjectURL(menuData.menuImage))
    }else{
    setPreview("")
    }
      },[menuData.menuImage])





      const handleUpdateMenu =async ()=>{
        const {id,menuName,description,rating,price,menuImage} = menuData
    
        if(!menuName || !description || !rating || !price ){
    toast.info("Please fill the form completely")
        }else{
    
          const reqBody=new FormData()
      reqBody.append("menuName",menuName)
      reqBody.append("description",description)
      reqBody.append("rating",rating)
      reqBody.append("price",price)
      // reqBody.append("delivaryTime",delivaryTime)
      preview?reqBody.append("menuImage",menuImage):reqBody.append("menuImage",menuImage)  

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview?"multipart/form-data":"application/json",
          "Authorization": `Bearer ${token}`
        }
        console.log("Proceed to Register API");

        try{
          const result =await updateMenuAPI(id,reqBody,reqHeader)
          if(result.status===200){
          handleClose()
          //share response to my project component
          setEditResponse(result.data)
          
          }else{
            console.log(result);
          }
                  }catch(err){
          console.log(err);
                  }
              }
        }
      }
      

  return (
    < >
 <button onClick={handleShow}  style={{textDecoration:'none'}} className='btn btn-link text-success d-flex align-items-center fw-bolder'><i style={{height:'34px'}} className="fa-solid fa-edit fa-2x me-2"></i></button>
 <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Menu Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
<label className=' w-100 d-flex align-items-center flex-column justify-content-center' >
  <input type="file" style={{display:"none"}} onChange={e=>setMenuData({...menuData,menuImage:e.target.files[0]})} />
  <img  height={'100%'} width={'100%'} className='mt-5' src={preview?preview:`${SERVER_URL}/uploads/${menu.menuImage}`} alt="menu upload pic" />
</label>
            </div>

           
          <div className='col-lg-8'>

<div className='mb-3'>
  <input className='border rounded p-2 w-100' type="text" placeholder='Menu Name' value={menuData.menuName} onChange={e=>setMenuData({...menuData,menuName:e.target.value})}/>
</div>
<div className='mb-3'>
  <input className='border rounded p-2 w-100' type="text" placeholder='Description ' value={menuData.description} onChange={e=>setMenuData({...menuData,description:e.target.value})}  />
</div>
<div className='mb-3'>
  <input className='border rounded p-2 w-100' type="text" placeholder='Rating'  value={menuData.rating} onChange={e=>setMenuData({...menuData,rating:e.target.value})} />
</div>
<div className='mb-3'>
  <input className='border rounded p-2 w-100' type="text" placeholder='Price' value={menuData.price} onChange={e=>setMenuData({...menuData,price:e.target.value})} />
</div>
<div className='mb-3'>
  <input className='border rounded p-2 w-100' type="text" placeholder='Delivary Time' value={menuData.delivaryTime} onChange={e=>setMenuData({...menuData,delivaryTime:e.target.value})} />
</div>


</div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateMenu}  variant="success">Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>

    </>
  )
}

export default Edit