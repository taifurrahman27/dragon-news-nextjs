import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="text-center py-2.5">All Categories</h2>

            <ul className="flex flex-col gap-3">
                {
                    categories.news_category.map(category => <li key={category.category_id} className={`${activeId === category.category_id ? 'bg-blue-500 text-white' : 'bg-slate-200'} p-2.5 rounded-md font-bold text-center text-xl`}>
                        <Link href={`/category/${category.category_id}`}
                            className='block'>
                            {category.category_name}
                        </Link>

                    </li>)
                }

            </ul>
        </div>
    );
};

export default LeftSideBar;