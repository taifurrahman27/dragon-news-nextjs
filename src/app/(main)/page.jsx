import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

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

    <div className="text-xl col-span-3 md:col-span-6 lg:col-span-9 font-bold  my-2.5 ">
      <LeftSideBar categories={categories} activeId={"01"} />
    </div>

    <div className="text-xl col-span-6 md:col-span-12 lg:col-span-18 font-bold bg-red-200 my-2.5">
      <h2 className="text-center py-2.5">All News</h2>
    </div>

    <div className="text-xl col-span-3 md:col-span-6 lg:col-span-9 font-bold my-2.5">
      <RightSideBar />
    </div>

  </div>
}
