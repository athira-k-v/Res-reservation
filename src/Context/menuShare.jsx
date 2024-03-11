import React, { createContext, useState } from 'react'
export const menuContext=createContext()

function MenuShare({children}) {
    const [menu, setMenu] = useState("");

  return (



<menuContext.Provider value={{menu,setMenu}}>
        {children}
    
</menuContext.Provider>    
  )
}

export default MenuShare