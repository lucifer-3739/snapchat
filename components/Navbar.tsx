import Image from 'next/image'
import logo from "@/public/logo.png"
import LogoutButton from './shared/logout';
import { auth } from '@/auth';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = async () => {

  const authUser = await auth();
  return (
    <div className='flex items-center justify-between w-screen px-2 py-2 '>
        <div className='flex items-center justify-center gap-2'>
            <Image src={logo} width={90} height={90} alt='logo' />
            <h1 className='text-5xl font-semibold '>Chat</h1>
        </div>
        <div className='flex items-center'>
          {
            authUser ? (<LogoutButton />): (<Link href={'/login'}><Button className='rounded-full'> Login</Button></Link>)
          }
        </div>
    </div>
  )
}

export default Navbar