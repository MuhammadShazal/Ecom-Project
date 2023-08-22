
import CardAll from "../../../../components/views/CardAll";
import { oneProductType } from "../../../../sanity/lib/ProductsDataArrayAndType";
import { urlForImage } from "../../../../sanity/lib/image";
import { sanityClient as client } from "../../../../sanity/lib/sanityClient"
import Image from 'next/image'



async function getAllProductForSearch() {
    let response = await client.fetch(`*[_type == "products"]`);
    return response
}

const Search = async ({ params }: { params: { query: string } }) => {
    let slug = (params.query).toLowerCase()
    let data = await getAllProductForSearch();
    let dataToMap = await data.filter((item: oneProductType) => {
        ((item.productName).toLowerCase()).indexOf(slug)
        if ((item.productName).toLowerCase().indexOf(slug) >= 0) {
            return true
        } else {
            return false
        }
    }
    )



    // console.log(datatoMap)

    return (

        <div>
            <div
                className="grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
                {dataToMap && dataToMap.map((items: oneProductType, index: number) => (
                    <CardAll key={index} singleProductData={items} />
                ))}
            </div>
        </div>

    )

}
export default Search