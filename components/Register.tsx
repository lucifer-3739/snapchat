import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";

function Register() {
  return (
    <div>
      <h1 className='text-center text-2xl font-medium my-3'>Register to Chat</h1>
      <Button className='w-full my-4 gap-2'> <FcGoogle className="h-6 w-6" />Sign up with Google</Button>
      <p>Already have an account? <Link href={'/login'} className='underline'> Login</Link> </p>
    </div>
  )
}

export default Register