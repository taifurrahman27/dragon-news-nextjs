import { getNewsDetailsById } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { BiArrowToLeft } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';

const NewsDetailsPage = async ({ params }) => {

    const { id } = await params;
    console.log(id, "params er res");

    const newsDetails = await getNewsDetailsById(id);
    console.log(newsDetails, "news details er res");

    return (
        <div className="card max-w-4xl mx-auto my-5 p-4 border border-gray-300 rounded-md">
            <h1 className="text-2xl font-bold mb-4">{newsDetails.title}</h1>
            <div className='card-body'>
                <p className="text-gray-600 mb-2">Author: {newsDetails.author.name || 'Unknown'}</p>
                <p className="text-gray-600 mb-4">Published: {newsDetails.author.published_date || 'Unknown'}</p>
                <img src={newsDetails.image_url} alt={newsDetails.title} className="w-full h-auto mb-4" />
                <p>{newsDetails.details}</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-2'><FcRating />
                        {newsDetails.rating.number}</p>
                    <p className='flex items-center gap-2'><FaEye />
                        {newsDetails.total_view} Views</p>
                </div>

                <Link href={`/category/${newsDetails.category_id}`} ><button className="btn  btn-secondary"><BiArrowToLeft /> All News in this Category</button></Link>
            </div>

        </div>
    );
};

export default NewsDetailsPage;