import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  return (
    <div className=''>
      <h1 className='text-center text-2xl font-medium my-3'>Login to Chat</h1>
      <Button className='w-full my-4 gap-2'> 
      <FcGoogle className="h-6 w-6" />Login up with Google</Button>
      <p>Create an account? <Link href={'/register'} className='underline'> Register</Link> </p>
    </div>
  )
}

export default Login