import React from 'react'
import LogoutButton from './shared/logout'
import { auth } from '@/auth'
import { Avatar, AvatarImage } from './ui/avatar'
import searchbar from './searchbar'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import Friends from './Friends'


const SideBar = async () => {
    const authUser = await auth()
    return (
        <div className='w-[30%] m-1.5 hidden:md:w-[5%] border-2 border-gray-500 rounded-lg'>
            <div className='flex p-3 items-center justify-between border-b border-gray-500'>
                <div className='flex items-center gap-2'>
                    {
                        authUser && (
                            <>
                                <Avatar>
                                    <AvatarImage src={authUser.user?.image!} alt='user' />
                                    <h1 className=' font-medium'>{authUser.user?.name}</h1>
                                </Avatar>
                            </>
                        )
                    }
                </div>
                <div>
                    <LogoutButton />
                </div>
            </div>
            <div className='p-3'>
                <div className='pt-1 flex items-center gap-2 rounded-lg p-2 bg-gray-400'>
                    <Search />
                    <Input type='text' placeholder='search...' className='w-full border-none' />

                </div>
                <div>
                    <Friends />
                </div>
            </div>

        </div>
    )
}

export default SideBar