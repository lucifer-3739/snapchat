import Image from 'next/image'
import logo from "@/public/logo.png"
import React from 'react'

const AuthLyout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-black h-screen'>
      <div className='w-screen h-screen flex items-center justify-center'>
        <div className='bg-gray-400 p-10 flex items-center justify-center text-center shadow-lg rounded-lg flex-col'>
          <Image src={logo} alt='Logo' height={110} width={110} />
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLyout


