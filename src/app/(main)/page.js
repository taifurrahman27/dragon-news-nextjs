
async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const data = await res.json();

  return data.data;
}


export default async function Home() {

  const categories = await getCategories();
  console.log(categories.news_category, "category");


  return <div className="container mx-auto my-10 grid grid-cols-12 md:grid-cols-24 lg:grid-cols-36 gap-4">
    <div className="text-4xl col-span-3 md:col-span-6 lg:col-span-9 font-bold bg-cyan-200 my-2.5 ">
      <h2 className="text-center py-2.5">All Categories</h2>

      <ul className="flex flex-col gap-3">
        {
          categories.news_category.map(category => <li key={category.category_id} className="bg-slate-200 p-2.5 rounded-md font-bold text-center text-xl">{category.category_name}</li>)
        }

      </ul>
    </div>
    <div className="text-4xl col-span-6 md:col-span-12 lg:col-span-18 font-bold bg-red-200 my-2.5">
      <h2 className="text-center py-2.5">All News</h2>    </div>
    <div className="text-4xl col-span-3 md:col-span-6 lg:col-span-9 font-bold bg-green-200 my-2.5">
      <h2 className="text-center py-2.5">Social  Media</h2>    </div>

  </div>
}
