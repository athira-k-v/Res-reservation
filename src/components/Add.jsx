import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import img from '../assets/img.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { addMenuAPI } from '../services/allAPI';
import { addResponseContext } from '../Context/ContextShare';

function Add() {

  const { addResponse,setAddResponse } = useContext(addResponseContext)

  const [menuData, setMenuData] = useState({
    menuName: "",description: "",rating: "",price: "",delivaryTime: "",menuImage: ""
  })

  const [imageFileStatus, setImageFileStatus] = useState(false)

  const [preview,setPreview] = useState("")

  console.log(menuData);

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)

  const handleClose = () => {
    setShow(false)
    setMenuData({
      menuName: "",description: "",rating: "",price: "",delivaryTime: "",menuImage: ""
    })
    setPreview(uploadMenu)
  }

  useEffect(() => {
    if (menuData.menuImage?.type == "image/png" || menuData.menuImage?.type == "image/jpeg" || menuData.menuImage?.type == "image/jpg") {
      // console.log("generale img url");
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(menuData.menuImage))

    } else {
      setPreview("")
      setImageFileStatus(false)
      // console.log("upload image with ....");
    }
  }, [menuData.menuImage])

  const handleMenuUpload = async() => {
    const {menuName,description,rating,price,delivaryTime,menuImage } = menuData
    if (!menuName || !description || !rating || !price || !delivaryTime || !menuImage) {
      toast.info("please fill the form completely")
    } else {
      const reqBody = new FormData()
      reqBody.append("menuName",menuName)
      reqBody.append("description",description)
      reqBody.append("rating",rating)
      reqBody.append("price",price)
      reqBody.append("delivaryTime",delivaryTime)
      reqBody.append("menuImage",menuImage)


      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        console.log("proceed to api call");
        try {
          const result = await addMenuAPI(reqBody,reqHeader)
          console.log(result);
          if (result.status === 200) {
            toast.success(r`New Menu ${result.data.menuName} has added successfully`);
            setAddResponse(result.data)                                                         
            handleClose()
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }




  return (
    < >
      <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link text-warning d-flex align-items-center fw-bolder'><i style={{ height: '34px' }} className="fa-solid fa-plus fa-2x me-2"></i> Add Menu</button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-lg-4'>
              <label className=' w-100 d-flex align-items-center flex-column justify-content-center' >
                <input type="file" style={{ display: "none" }} onChange={e => setMenuData({ ...menuData, menuImage: e.target.files[0] })} />
                <img height={'100%'} width={'100%'} className='mt-5' src={preview ? preview : img} alt="project upload pic" />
              </label>
              {!imageFileStatus && <div className='text-danger'>
                *Upload only following file type (jpg.jpeg,png)*
              </div>}
            </div>

            <div className='col-lg-8'>

              <div className='mb-3'>
                <input className='border rounded p-2 w-100' type="text" placeholder='Menu Name' value={menuData.menuName} onChange={e => setMenuData({ ...menuData, menuName: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' type="text" placeholder='Description ' value={menuData.description} onChange={e => setMenuData({ ...menuData, description: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' type="text" placeholder='Rating' value={menuData.rating} onChange={e => setMenuData({ ...menuData, rating: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' type="text" placeholder='Price' value={menuData.price} onChange={e => setMenuData({ ...menuData, price: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input className='border rounded p-2 w-100' type="text" placeholder='Delivary Time' value={menuData.delivaryTime} onChange={e => setMenuData({ ...menuData, delivaryTime: e.target.value })} />
              </div>


            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Cancel
          </Button>
          <Button variant="success" onClick={handleMenuUpload} >Save</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
    </>
  )

}

export default Add