import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';


const NewsByCategoryIdPage = async ({ params }) => {

    const { id } = await params;

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id);
    console.log(news, "news er n");


    return (
        <div className="container mx-auto my-10 grid grid-cols-12 md:grid-cols-24 lg:grid-cols-36 gap-4">

            <div className="text-xl col-span-3 md:col-span-6 lg:col-span-9 font-bold  my-2.5 ">
                <LeftSideBar categories={categories} activeId={id} />
            </div>



            <div className="text-xl col-span-6 md:col-span-12 lg:col-span-18 font-bold bg-red-200 my-2.5">
                <h2 className="text-center py-2.5">News By Category</h2>

                <div className="border border-gray-300 p-2 rounded-md">

                    {news.length === 0 ? (
                        <p className="text-center text-gray-500">No news found for this category.</p>
                    ) : (
                        news.map((news) => (
                            <NewsCard key={news._id} news={news} />
                        ))
                    )}

                </div>

            </div>



            <div className="text-xl col-span-3 md:col-span-6 lg:col-span-9 font-bold my-2.5">
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsByCategoryIdPage;
