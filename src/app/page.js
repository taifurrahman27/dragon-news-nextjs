import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col flex-1  items-center justify-center p-4">
      <Header />
      <Navbar />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to My Next.js App!
      </h1>


    </div>
  );
}
