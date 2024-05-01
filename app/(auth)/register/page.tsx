import { signIn } from '@/auth';
import Register from '@/components/Register';
import React from 'react'

function RegisterPage() {
  const registerHandler = async () => {
    'use server'
    await signIn('google');
  }
  return (
    <form action={registerHandler}>
      <Register />
    </form>
  )
}

export default RegisterPage;