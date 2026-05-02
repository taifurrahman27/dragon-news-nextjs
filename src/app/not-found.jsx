import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col mx-auto space-y-5 mt-10  text-center justify-center'>
            <h2 className='text-5xl font-bold text-red-400'>Page Not Found</h2>
            <p className='font-medium text-2xl text-purple-700'>The page you are looking for does not exist.</p>
            <Link href="/" className='text-blue-500 hover:underline'>Go back to Home</Link>

        </div>
    );
};

export default NotFound;