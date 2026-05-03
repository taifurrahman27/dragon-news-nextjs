import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from "../../assets/user.png";
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center text-center py-8'>
            <div>
            </div>
            <ul className="flex justify-center space-x-4 font-bold">
                <li><Navlink href="/" className="hover:underline">Home</Navlink></li>
                <li><Navlink href="/about-us" className="hover:underline">About</Navlink></li>
                <li><Navlink href="/career" className="hover:underline">Career</Navlink></li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image src={userAvater} alt="Logo" width={50} height={50} />
                <button>
                    <Link href="/login" className="btn text-blue-500 hover:underline">Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;