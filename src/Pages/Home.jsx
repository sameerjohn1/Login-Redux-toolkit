import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to="/login" className='btn btn-primary btn-md' >Login</Link>
    </>
  )
}

export default Home