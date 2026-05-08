import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className="container mx-auto flex items-center bg-gray-200  py-2 px-4">
            <button className=" btn text-white bg-red-400 font-bold py-1 px-3 rounded mr-4">
                Latest News
            </button>
            <Marquee speed={50}
                pauseOnHover={true}
                className="text-lg py-2 text-red-700">
                <span className="mx-4 font-bold">Breaking News:</span>
                <span className="mx-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet.</span>
                <span className="mx-4">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine.</span>
                <span className="mx-4">Biden announces $3 billion Ukraine military aid package on its Independence Day.</span>
            </Marquee>
        </div>
    );
};

export default BreakingNews;