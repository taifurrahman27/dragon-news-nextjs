import React from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';

const Header = () => {
    return (
        <div className='container mx-auto text-center py-8'>
            <Image src={logo} alt="Logo" width={200} height={200} className="mx-auto mb-4" />
            <h1 className='text-4xl'>Welcome  to Header</h1>
            <h4>
                This is a simple header component that can be reused across your Next.js application.
            </h4>
        </div>
    );
};

export default Header;