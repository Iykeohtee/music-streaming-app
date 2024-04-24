"use client"

import { ChangeEvent, FormEvent, useState } from "react"

const SignupForm = () => {

 const [formData, setFormData] = useState ({
    email: '',
    username: '',
    password: ''
 })     

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
    setFormData({...formData, [e.target.name]: e.target.value})            
}

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {             
      e.preventDefault(); 
   }
   

  return (
    <form onSubmit={handleSubmit}>
        <input type="email"
         name="email"    
         placeholder="enter email"    
         value={formData.email}
         onChange={handleChange} 
        />

         {/* <br />   */} 

        <input type="text"
         name="username"
         placeholder="Your username"
         value={formData.username}
         onChange={handleChange}
        />

        {/* <br /> */}

        <input type="password" 
         name="password"
         placeholder="Input your Password"
         value={formData.password}
         onChange={handleChange} 
        />
        <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignupForm


// Password 
// 09037465611