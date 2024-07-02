//import { copyWithStructuralSharing } from '@reduxjs/toolkit/query'
import React from 'react'
import { useSelector } from 'react-redux'
import { logout } from '../reduxwork/UserSlice'
import { useDispatch } from 'react-redux'

const Profile = () => {
  const { UserData } = useSelector((state) => state.user)
  const dispatcher = useDispatch()

  return (
    <div className='page8'>Profile
      <h2>Name:{UserData.CustomerName}</h2>
      <h2>Email:{UserData.CustomerEmail}</h2>
      <button onClick={() => dispatcher(logout)}>LOGOUT</button>
    </div>
  )
}

export default Profile