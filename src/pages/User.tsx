import React from 'react'
import { useParams } from 'react-router-dom'


const User:React.FC = () => {

    // data type returned will be string|undefined
    const {userId} = useParams();

  return (
    <div>
        <h1>User Page</h1>
        <p>Viewing User Details for user: {userId}</p>
    </div>
  )
}

export default User