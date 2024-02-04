import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginuser } from '../Store/UserSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    //states
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // redux state
    const {loading,error}=useSelector((state)=>state.user)

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleLoginEvent=(e)=>{
        e.preventDefault()

        let userCredentials={
            email,password
        }

        dispatch(loginuser(userCredentials)).then((result)=>{
            if(result.payload){
                setEmail("")
                setPassword("")
                navigate("/")
            }
        })
    }

  return (
    <form className='form-group custom-form' onSubmit={handleLoginEvent} >
        <label>Email</label>
        <input type="email" required className='form-control'  value={email} onChange={(e)=>setEmail(e.target.vaslue)} />
        <br />
        <label>Password</label>
        <input type="password" required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <button  type="submit" className='btn btn-success btn-md'>
            {loading?"Loading":"Login"}
        </button>
        {error&&(
            <div className='alert alert-danger' role="alert">{error}</div>
        )}
    </form>
  )
}

export default Login