import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import MyOrder from './page/MyOrders'
import MyNavbar from './MyNavbar'
import Login from './page/Login'
import MyCard from './page/MyCard'
import REGISTRETION from './page/REGISTRETION'
import Profile from './page/Profile'
import Orderinfo from './page/Orderinfo'
import ProtectedRoute from './page/ProtectedRoute'
import { useSelector } from 'react-redux'
const MyRoutes = () => {
  const { isLogin } = useSelector((state) => state.user)
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myorder' element={<MyOrder />} />
          <Route path='/mycard' element={<MyCard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registretion' element={<REGISTRETION />} />
          <Route path='/profile' element={
            <ProtectedRoute loggedIn={isLogin}>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='/orderinfo' element={<Orderinfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes