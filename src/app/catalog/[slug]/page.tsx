// import BASE_PATH_FORAPI from "@/components/shared/BasePath"
import { responseType, oneProductType } from "../../../../sanity/lib/ProductsDataArrayAndType"
import ProductDetail from "../../../../components/views/ProductDetail"
import ContextWrapper from "../../../global/context"
import { FC } from "react"
import { Metadata } from 'next';
// import { sanityClient as client } from "../../../../sanity/lib/sanityClient";


// metadata genrator
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const product = await fetch(`https://0se5oe1p.api.sanity.io/v2023-06-06/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D`).then((res: any) => res.json());
    const titleToSet: oneProductType = product.result.find((item: oneProductType) => item.slug.current == slug);
        // console.log("ProductName Console", titleToSet?.productName)
    return {
        title: titleToSet?.productName,
        description: titleToSet?.description,
    };
}



// fetch particular data of product using slug
async function fetchPreviewData(slug: string) {
    let res = await fetch(`https://0se5oe1p.api.sanity.io/v2023-06-06/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`)
    // let res = await fetch(`https://0se5oe1p.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current%3D%3D+%22%24%7B${slug}%7D%22%5D`)
    return res.json();
};



// will make static pages of every product
export async function generateStaticParams() {
    let res = await fetch(`https://0se5oe1p.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type%20%3D%3D%20'products'%5D`, {
        next: {
            revalidate: 60
        }
    }).then((res: any) => res.json())
    return res.result.map((item: oneProductType) => { slug: item.slug });
};


const Catalog = async ({ params }: { params: { slug: string } }) => {
    let data: responseType = await fetchPreviewData(params.slug)
    return (
        <ContextWrapper>
            <ProductDetail item={data.result[0]} />
        </ContextWrapper>
    )
}

export default Catalog