import Image from 'next/image';
import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import swimmingImg from '../../../assets/swimming.png';
import clasImg from '../../../assets/class.png';
import playgroundImg from '../../../assets/playground.png';
import rightSidebarImage from '../../../assets/bg.png';

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h2>Login with</h2>

                <div className='flex flex-col gap-1.5'>

                    <button className='btn border-2 border-blue-400 py-2.5 rounded-md my-1 mt-1.5 w-full'><FaGoogle className='text-red-700' />
                        Google</button>
                    <button className='btn border-2 border-blue-400 py-2.5 rounded-md my-1 mt-1.5 w-full'><FaGithub className='text-gray-800' />GitHub</button>
                    <button className='btn border-2 border-blue-400 py-2.5 rounded-md my-1 mt-1.5 w-full'><FaFacebookF className='text-blue-600' />
                        Facebook</button>

                </div>
            </div>

            <div className='my-5 shadow-md p-2 rounded-md'>
                <h2>Find Us On</h2>

                <div className='flex flex-col gap-1'>
                    <button className='rounded-md border-[0.5px] border-gray-100 py-4 flex items-center justify-left my-1 mt-1.5 w-full'><FaFacebookF className='text-blue-600 text-2xl mr-2' />
                        Facebook</button>
                    <button className='rounded-md border-[0.5px] border-gray-100 py-4 flex items-center justify-left my-1 mt-1.5 w-full'><BsTwitter className='text-blue-600 text-xl ml-2 mr-2' />
                        Twitter</button>
                    <button className='rounded-md border-[0.5px] border-gray-100   py-4 flex items-center justify-left my-1 mt-1.5 w-full'><BsInstagram className='text-red-600 text-xl ml-2 mr-2' />
                        Instagram</button>

                </div>

                <div className='my-5 shadow-md p-2 rounded-md bg-gray-100'>
                    <h2 className='text-2xl font-bold'>Q-Zone</h2>
                    <Image src={swimmingImg} alt="swimming image" width={400} height={400} className='rounded-md mt-5' />
                    <Image src={clasImg} alt="class image" width={400} height={400} className='rounded-md mt-5' />
                    <Image src={playgroundImg} alt="playground image" width={400} height={400} className='rounded-md mt-5' />

                    <Image src={rightSidebarImage} alt="right sidebar image" width={400} height={400} className='rounded-md mt-5' />
                </div>

            </div>
        </div>
    );
};

export default RightSideBar;