import Link from 'next/link'
import SignupForm from '../components/SignupForm'

const signup = () => {
  return (
    <div className='w-[887px] h-[690px] flex flex-col justify-center items-center'> 
        <h1 className='mr-[-20px]'>Sign up to start listening</h1> 
        <SignupForm/>
        <h2 className='text-[gray]'>Already have an account?
        <Link href="/login" className='underline text-[white]'> Log in here</Link>  
        </h2>      
    </div>
  )   
}

export default signup