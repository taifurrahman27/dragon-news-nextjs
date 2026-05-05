import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaRegBookmark } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { IoShareSocialSharp } from 'react-icons/io5';

const NewsCard = ({ news }) => {

    console.log(news.image_url);

    return (

        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">

                <div className='flex items-center justify-between mb-4 bg-slate-200'>
                    <div className='flex items-center gap-2'>
                        <Image src={news.author?.img} alt={news.author?.name} width={40} height={40} />
                        <div><h2 className=' text-lg font-semibold'>{news.author?.name}</h2>
                            <p className='text-sm text-gray-400'>{news.author?.published_date}</p></div>

                    </div>
                    <div className='flex items-center gap-4'>
                        <FaRegBookmark />
                        <IoShareSocialSharp />

                    </div>
                </div>

                <h2 className="card-title">{news.title}</h2>
                <div>

                    <img
                        src={news.image_url}
                        alt={news.title}
                        className="w-full h-auto"
                    />
                </div>

                <p>{news.details.length > 250 ? news.details.slice(0, 250) + '...' : news.details}</p>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <p className='flex items-center gap-2'><FcRating />
                            {news.rating.number}</p>
                        <p className='flex items-center gap-2'><FaEye />
                            {news.total_view} Views</p>
                    </div>

                    <Link href={`/news/${news._id}`} ><button className="btn btn-sm btn-outline">Read More</button></Link>
                </div>

            </div>

        </div>
    );
};

export default NewsCard;