"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navlink = ({ href, children }) => {

    const pathname = usePathname();
    const isActive = pathname === href;


    return (
        <Link href={href} className={isActive ? 'text-blue-500 underline' : 'text-gray-400 hover:underline'}>
            {children}
        </Link>
    );
};

export default Navlink;