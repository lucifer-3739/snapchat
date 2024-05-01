import SideBar from '@/components/SideBar'
import React from 'react'

const ChatLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex h-screen'>
        <SideBar />
        {children}
    </div>
  )
}

export default ChatLayout