import React from 'react'

const Login = () => {
  return (
    <form className='form-group custom-form' >
        <label>Email</label>
        <input type="email" required className='form-control' />
        <br />
        <label>Password</label>
        <input type="password" required className='form-control' />
        <br />
        <button  type="submit" className='btn btn-success btn-md'>LOGIN</button>
    </form>
  )
}

export default Login