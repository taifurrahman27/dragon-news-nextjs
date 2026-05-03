import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import React from 'react';

async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    const data = await res.json();
    return data.data;
}


async function getNewsByCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch news by category ID');
    }
    const data = await res.json();
    return data.data;
}


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
                <h2 className="text-center py-2.5">All News</h2>

                <div className="border border-gray-300 p-2 rounded-md">
                    {
                        news.map((n) => (
                            <div key={n._id} className="border-b border-gray-300 py-2">
                                <h3 className="border border-gray-300 p-4 bg-slate-50 rounded-md text-lg font-bold">{n.title}</h3>
                            </div>
                        ))
                    }
                </div>

            </div>



            <div className="text-xl col-span-3 md:col-span-6 lg:col-span-9 font-bold my-2.5">
                <RightSideBar />
            </div>

        </div>
    );
};

export default NewsByCategoryIdPage;