import { redirect } from "next/navigation";


const defaultCategory = '01';

export default async function Home() {

  redirect(`/category/${defaultCategory}`)

}
