import Image from 'next/image'
import React from 'react'
import chat from "@/public/des.png"
import { Button } from './ui/button'
import { Laptop, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/auth';

const Header = async () => {

    const authUser = await auth();

    return (
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <div>
                <h1 className='text-7xl font-semibold'>
                    Chat
                </h1>
                <h1 className='my-6 text-xl'>
                    Chat, Call, and Video Call your friends and<br /> family from wherever you are.
                </h1>
                <div className='relative'>
                    {/* <div className='absolute -inset-1 bg-pink-600 rounded-full blur-md opacity-100' /> */}
                    {
                        authUser ? <Link href={"/login"}>
                        <Button className=' relative gap-2 text-xl rounded-full'> <MessageCircleMore  className='' />Start chat</Button>
                    </Link>: <Link href={"/login"}>
                        <Button className=' relative gap-2 text-xl rounded-full'> <Laptop className='-rotate-6' />Login to chat</Button>
                    </Link>
                    }
                </div>
            </div>
            <div>
                <Image src={chat} alt='chat image' width={900} height={900} className='-rotate-[5.5deg]' />
            </div>
        </div>
    )
}

export default Header