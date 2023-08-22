import HeroBanner from '../../components/sections/HeroBanner'
import PromotionsTab from '../../components/sections/PromotionsTab'
import HomeProductSection from '../../components/sections/HomeProductSection'
import { responseType } from '../../sanity/lib/ProductsDataArrayAndType'
// import Navbar from '../../components/sections/Navbar'


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}


export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  return (
    <main className="">
       {/* <Navbar/>  */}
        <HeroBanner/>
        <PromotionsTab/>
        <HomeProductSection ProductData={result}/>
    </main>
  )
}
