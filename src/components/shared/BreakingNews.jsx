import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-gray-300  py-2 px-4">
            <button className=" btn text-white bg-red-400 font-bold py-1 px-3 rounded mr-4">
                Latest News
            </button>
            <Marquee speed={50}
                pauseOnHover={true} className="bg-red-100  py-2">
                <span className="mx-4 font-bold">Breaking News:</span>
                <span className="mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <span className="mx-4">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                <span className="mx-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </Marquee>
        </div>
    );
};

export default BreakingNews;