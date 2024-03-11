import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteMenuAPI, getUserMenuAPI } from '../services/allAPI'
import { addResponseContext, updateResponseContext } from '../Context/ContextShare'



function MyMenu() {

  const {editResponse,setEditResponse} =useContext(updateResponseContext)

  const {addResponse,setAddResponse} =useContext(addResponseContext)

  const [allMenu, setAllMenu] = useState([])


  const getUserMenu = async () => {
    try {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await getUserMenuAPI(reqHeader)
        if (result.status === 200) {
          setAllMenu(result.data)
        }
      }

    } catch (err) {
      console.log(err);
    }
  }
  console.log(allMenu);
  useEffect(()=>{
    getUserMenu()
  },[addResponse])



  const handleDeleteMenu=async(menuId)=>{
    const token=sessionStorage.getItem("token")
    if (token) {
     const reqHeader = {
       "Content-Type": "application/json",
       "Authorization": `Bearer ${token}`
     }
  try{
  const result=await deleteMenuAPI(menuId,reqHeader)
  if(result.status==200){
   getUserMenu()
  }else{
  
  }
  }catch(err){
  console.log(err);
  }
  }
  }



  
  return (
    <div>

<div className='border rounded p-2'>
      <div className="d-flex justify-content-between">
        <h2>Add Menu</h2>
        <Add></Add>
      </div>

      <div className="mt-4">
        
          { allMenu.length>0? allMenu.map((menu,index)=>(
 <div key={index} className="border rounded d-flex justify-content-between align-items-center mb-3 p-2">
 <h5>{menu?.menuName} </h5>
 <div className="icons d-flex align-items-center">
   <Edit menu={menu} ></Edit>
   <button onClick={()=>handleDeleteMenu(menu._id)} className='btn btn-link text-danger ms-1'><i style={{ height: '34px' }} className="fa-solid fa-trash fa-2x"></i></button>
 </div>
</div>
          )):
          <div>
            No Menu
          </div>
           
}
         
      </div>
    </div>
  

    </div>
  )
}

export default MyMenu