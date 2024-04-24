"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react' 

const LoginForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value }) 
  }

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

   }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name='username'
      placeholder='username'
      value={formData.username}
      onChange={handleChange}
      />

      <input type="password" 
       name='password'
       placeholder='input password'
       value={formData.password}
       onChange={handleChange} 
      />

      <button type='submit'>Sign In</button>
     

    </form>
  )
}

export default LoginForm