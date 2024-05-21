"use client"

import { ChangeEvent, FormEvent, useState } from "react"

const SignupForm = () => {

 const [formData, setFormData] = useState ({
    email: '',
    username: '',
    password: ''
 })     

  const email = formData.email;
  const name = formData.username;
  const password = formData.password; 

  const [ isPasswordVisible, setIsPasswordVisible ] = useState(false); 
  const [ inputText, setInputText ] = useState('');

  const togglePasswordVisibility = () => {
   setIsPasswordVisible((prevVisibility) => !prevVisibility) 
  }

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
    setFormData({...formData, [e.target.name]: e.target.value});
    setInputText(e.target.value);
}

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {      
                 
      e.preventDefault();    

      const response = await fetch('/api/signup', {    
         method: 'POST',
         body: JSON.stringify({ name, email, password }),    
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       const data = await response.json();
       console.log(data);    

   }   

   

  return (    
    <form onSubmit={handleSubmit} className="w-[887px] flex flex-col gap-7 items-center mt-[50px]">
        <div className="flex flex-col w-[50%]">
        <label htmlFor="email">Email address</label>
        <input type="email"
         name="email"    
         id="email"
         placeholder="enter email"        
         value={formData.email}
         onChange={handleChange}
         className={inputText.length > 0 ? 'text-white' : 'text-default'}    
        />   
        </div>

         {/* <br />   */} 
        <div className="flex flex-col w-[50%]">
        <label htmlFor="user">Username</label>
        <input type="text"
         name="username"
         id="user"
         placeholder="Your username"
         value={formData.username}
         onChange={handleChange}
         className={inputText.length > 0 ? 'text-white' : 'text-default'}
        />
        </div>

        {/* <br /> */}

       <div className="relative flex flex-col w-[50%]">
        <label htmlFor="password">Password</label>
         <input type={ isPasswordVisible ? 'text' : 'password' } 
         name="password"
         id="password" 
         placeholder="Input your Password"
         value={formData.password}
         onChange={handleChange} 
         className={inputText.length > 0 ? 'text-white' : 'text-default'} 
        />
        <button
         onClick={togglePasswordVisibility}   
         className="absolute top-[50%] right-[10px]"   
        >
         { isPasswordVisible ? '🔐' : '🔓'}  
        </button>
       </div>

        <button type="submit" className="btn w-[50%] font-[700] text-[20px] mb-4">Next</button>                            
    </form>
  )
}

export default SignupForm  


// Password 
// 09037465611