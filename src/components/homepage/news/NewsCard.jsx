"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { IoShareSocialSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">

                <div className="flex items-center justify-between mb-4 bg-slate-200 p-2 rounded">
                    <div className="flex items-center gap-2">
                        <Image
                            src={news?.author?.img || "/default-avatar.png"}
                            alt={news?.author?.name || "author"}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">
                                {news?.author?.name || "Unknown"}
                            </h2>
                            <p className="text-sm text-gray-400">
                                {news?.author?.published_date}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaRegBookmark />
                        <IoShareSocialSharp />
                    </div>
                </div>

                <h2 className="card-title">{news?.title}</h2>

                <img
                    src={news?.image_url || "/fallback.jpg"}
                    alt={news?.title || "news image"}
                    className="w-full h-auto rounded"
                />

                <p>
                    {news?.details
                        ? news.details.length > 250
                            ? news.details.slice(0, 250) + "..."
                            : news.details
                        : "No details available"}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <p className="flex items-center gap-2">
                            <FcRating /> {news?.rating?.number || 0}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEye /> {news?.total_view || 0} Views
                        </p>
                    </div>

                    <Link
                        href={`/news/${news?._id}`}
                        className="btn btn-sm btn-outline"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;