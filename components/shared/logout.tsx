import React from 'react'
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

import { logoutHandler } from '@/lib/serveractions';

const LogoutButton = async () => {
    // const logoutHandler = async () => {
    //     'use server'
    //     try {
    //         await signOut();
    //     } catch (error) {
    //         console.log(error);
    //         throw error;
    //     }
    //     redirect("/login")
    // }
    return (
        <form action={logoutHandler}> 
            <Button className='rounded-full' size={"icon"}><LogOut size={'20px'} /></Button>
        </form>
    )
}

export default LogoutButton;