import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Footer from './components/Footer'
// import Header from './components/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'
// import ResCard from './components/ResCard'
import Wishlist from './pages/Wishlist'
import DashBoard from './pages/DashBoard'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
import View from './pages/View'
import Address from './pages/Address'

function App() {
  

  return (
    <>
    {/* <Header></Header> */}

<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/register' element={<Auth insideRegister></Auth>}></Route>
  <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
  <Route path='/cart' element={<Cart></Cart>}></Route>
  <Route path='/payment' element={<Payment></Payment>}></Route>
  <Route path='/login' element={<Auth></Auth>}></Route>
  <Route path='/address' element={<Address></Address>}></Route>
  <Route path='/view' element={<View></View>}></Route>
</Routes>


{/* <ResCard></ResCard> */}

    {/* <Footer></Footer> */}
    </>
  )
}

export default App
