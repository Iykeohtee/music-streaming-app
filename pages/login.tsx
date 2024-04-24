import React from 'react'
import LoginForm from '@/components/LoginForm'  
import Link from 'next/link'

const login = () => {
  return (
    <div>
      login into your account
      <LoginForm/> 
      Don't have an account? <Link href="/signup">SignUp</Link>
    </div>
  )
}

export default login