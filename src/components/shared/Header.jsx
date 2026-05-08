import React from 'react';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { formatDate } from 'date-fns';

const Header = () => {
    return (
        <div className='container mx-auto text-center py-8 shadow-md rounded-md bg-slate-50'>
            <Image src={logo} alt="Logo" width={300} height={200} className="mx-auto mb-4 bg-slate-100 p-2" />
            <h4>Journalism Without Fear or Favour</h4>
            <p>{formatDate(new Date(), 'EEEE, MMMM dd, yyyy')}</p>

        </div>
    );
};

export default Header;