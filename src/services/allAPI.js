import { commonApi } from "./commonApi"
import SERVER_URL from "./serverUrl"


//register
export const registerAPI =async(user)=>{
    return  await commonApi("POST",`${SERVER_URL}/register`,user,"")
  }
  
//login
  export const loginAPI =async(user)=>{
    return  await commonApi("POST",`${SERVER_URL}/login`,user,"")
  }

  //add ,menu api
  export const addMenuAPI =async(reqBody,reqHeader)=>{
    return  await commonApi("POST",`${SERVER_URL}/add-menu`,reqBody,reqHeader)
  }


  //get home menu api
  export const  getHomeMenuAPI =async()=>{
    return  await commonApi("GET",`${SERVER_URL}/get-home-menu`,"","")
  }

  //get All menu

export const  getAllMenuAPI =async(searchKey,reqHeader)=>{
  return  await commonApi("GET",`${SERVER_URL}/get-all-menu?search=${searchKey}`,"",reqHeader)
}


//get user menu

export const  getUserMenuAPI =async(reqHeader)=>{
  return  await commonApi("GET",`${SERVER_URL}/get-user-menu`,"",reqHeader)
}

//edit menu

export const  updateMenuAPI =async(menuId,reqBody,reqHeader)=>{
  return  await commonApi("PUT",`${SERVER_URL}/menu/edit/${menuId}`,reqBody,reqHeader)
}


//menu/delete

export const  deleteMenuAPI =async(menuId,reqHeader)=>{
  return  await commonApi("DELETE",`${SERVER_URL}/remove-menu/${menuId}`,{},reqHeader)
}





//book movie
export const bookReservationAPI=async(user)=>{                 
  return await commonApi("POST",`${SERVER_URL}/reservation`,user,"")
}




export const  getAllReservationAPI =async(reqHeader)=>{
  return  await commonApi("GET",`${SERVER_URL}/get-all-reservation`,"",reqHeader)
}

// export const registerAPI =async(user)=>{
//   return  await commonApi("POST",`${SERVER_URL}/register`,user,"")
// }