"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from "../../assets/user.png";
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession()

    const user = session?.user;

    return (
        <div className='container mx-auto flex justify-between items-center text-center py-8'>
            <div>
            </div>
            <ul className="flex justify-center space-x-4 font-bold">
                <li><Navlink href="/" className="hover:underline">Home</Navlink></li>
                <li><Navlink href="/about-us" className="hover:underline">About</Navlink></li>
                <li><Navlink href="/career" className="hover:underline">Career</Navlink></li>
            </ul>

            {
                user ? (<div className='flex items-center gap-2'>
                    <h3>Welcome, <span className='text-purple-600 font-bold mx-2 italic bg-radial'>{user.name?.toUpperCase()}</span></h3>
                    <Image src={user?.image || userAvater} alt="Logo" width={60} height={60} className='rounded-full' />
                    <Link
                        href="/"
                        className="btn btn-error text-white hover:underline"
                        onClick={async () => {
                            await authClient.signOut();
                        }}
                    >
                        Logout
                    </Link>
                </div>) : (<div className='flex items-center gap-2'>
                    <Image src={userAvater} alt="Logo" width={50} height={50} />
                    <Link
                        href="/login"
                        className="btn text-blue-500 hover:underline"

                    >
                        Login
                    </Link>
                </div>)
            }

        </div>
    );
};

export default Navbar;