import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetailedInfo = () => {
    const {userId} = useParams();
  return (
    <div><h1>DetailedInfo for User {userId}</h1></div>
  )
}

export default UserDetailedInfo