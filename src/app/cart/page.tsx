import CartComp from "../../../components/views/CartParent/cartChild"
import ContextWrapper from "@/global/context"

async function fatchAllStoreProducts() {
  let res = await fetch(`https://0se5oe1p.api.sanity.io/v2023-05-26/data/query/production?query=*%5B_type%20%3D%3D%20'products'%5D`, {
    cache: "no-store",
  })
  return res.json();
};

const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts();
  return (
    <ContextWrapper>
      <CartComp allProductsOfStore={allProductsOfStore.result} />
    </ContextWrapper>
  )
}

export default Cart



// // import CartComp from "../../../components/shared/CartComponent/CartComponent"
// // import ContextWrapper from "@/global/context"
// // import { cookies } from "next/headers"


// // async function fatchAllStoreProducts() {
// // //   let res = await fetch(`https://peu0aj6l.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`, {
// //     cache: "no-store",
// //   })
// //   return res.json();
// // };



// const Cart = async () => {
//     // const uid = uuid();
//     // const setcookies = cookies().get("user_id")?.value

//     // const user_id = cookies().get("user_id")
//         const res = await fetch(`/api/cart?user_id=b41d0624-2179-4975-afc4-bc919e52899b`,{
//             method: "GET",})
// //   let allProductsOfStore = await fatchAllStoreProducts();
//   return (
//     // <ContextWrapper>
//     console.log("response of a", res)
//     // </ContextWrapper>
//   )
// }

// export default Cart