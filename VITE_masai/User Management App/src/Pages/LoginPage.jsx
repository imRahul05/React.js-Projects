import React,{useContext,} from 'react'
import { AuthContext } from '../Context/AuthContext'

const LoginPage = () => {

const {data,setData} = useContext(AuthContext)

const handleChange =()=>{
  const {name,value} = e.target
   setData =({
    ...data,
    [name]:value
   })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    login(data,navigate)
    

}
  return (
   <>
  <form onSubmit={handleSubmit}>
  <h1>Login</h1>
   <label>UserMail:</label>
   <input type='email'
   placeholder='Enter your mailID'
   name='email'
   value={data.email}
   onChange={handleChange}
   />


  <label>Password:</label>
   <input type='password'
   name='password'
   placeholder='type your password..'
   value={data.password}
   onChange={handleChange}
   />
   

   <button type='submit' >Submit</button>
  </form>
   </>
  )
}

export default LoginPage