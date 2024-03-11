import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import DashBoard from './pages/DashBoard'
// import Cart from './pages/Cart'
import Payment from './pages/Payment'
import View from './pages/View'
import Address from './pages/Address'
import Admin from './pages/Admin'
import Reservation from './pages/Reservation'

function App() {
  

  return (
    <>

<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/register' element={<Auth insideRegister></Auth>}></Route>
  <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
  {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
  <Route path='/payment' element={<Payment></Payment>}></Route>
  <Route path='/login' element={<Auth></Auth>}></Route>
  <Route path='/address' element={<Address></Address>}></Route>
  <Route path='/view' element={<View></View>}></Route>
  <Route path='/admin' element={<Admin></Admin>}></Route>
  {/* <Route path='/ca/rt' element={<Cart></Cart>}></Route> */}
  <Route path='/reservation' element={<Reservation></Reservation>}></Route>
  {/* <Route path='/reservationdetails' element={<Reservation></Reservation>}></Route> */}

</Routes>


{/* <ResCard></ResCard> */}

    {/* <Footer></Footer> */}
    </>
  )
}

export default App
