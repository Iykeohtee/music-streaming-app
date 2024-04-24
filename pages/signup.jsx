import Link from 'next/link'
import SignupForm from '../components/SignupForm'

const signup = () => {
  return (
    <div>
        <h1>Create an account</h1> 
        <SignupForm/>
         Already have an account? <Link href="/login">Sign in</Link>
    </div>
  )   
}

export default signup