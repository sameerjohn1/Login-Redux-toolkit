import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function getUser(){
    // eslint-disable-next-line
    let user=localStorage.getItem("user");
    if(user){
        user=JSON.parse(user)
    }else{
        user=null
    }
    return user
}

const Home = () => {
    const [user, setUser] = useState(getUser())

    const handleLogout=()=>{
        localStorage.removeItem("user")
        setUser(null)
    }
   
  return (
    <>
    {user?(
        <>
        <h4>Hello, {user.firstName} {user.lastName}</h4>
        <h5>{user.email}</h5>
        <button className='btn btn-primary btn-md' onClick={handleLogout} >Logout</button>
        </>
    ):(
    <Link to="/login" className='btn btn-primary btn-md' >Login</Link>

    )}
    </>
  )
}

export default Home