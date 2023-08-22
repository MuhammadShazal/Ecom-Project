import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "../../../../sanity/lib/ProductsDataArrayAndType";


interface typeOfData {
    price: string,
    name: string,
    quantity: number,
}

let orignalData: Array<typeOfData> = [
    {
        price: 'price_1NXk12D4KTdcT1PaOOZEajpu',
        name:  "Men's suit",
        quantity: 1,
    },
    {
        price: 'price_1NXjzyD4KTdcT1PastE86kFx',
        name: 'Women Party Dress',
        quantity: 1,
    },
    {
        price: 'price_1NXjxhD4KTdcT1PalNYQy2Ar',
        name: 'Women Brushed Raglan',
        quantity: 1,
    },
    {
        price: 'price_1NXjwED4KTdcT1Pa5QrgWsC5',
        name: 'Women Coat',
        quantity: 1,
    },
    {
        price: 'price_1NXNanD4KTdcT1PawJJ6p2TK',
        name: "Men's Flex Push",
        quantity: 1,
    },
]

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    let cartItemsArray = await req.json();

    try {
        let line_item = orignalData.filter((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return true
                }
            }
        })
        let line_itemToSend: any = line_item.map((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return {
                        price: item.price,
                        quantity: element.quantity
                    }
                }
            }
        })

        let session = await stripe.checkout.sessions.create({
            line_items: line_itemToSend,
            mode: "payment",
            success_url: `${req.nextUrl.origin}/?success=true`,
            cancel_url: `${req.nextUrl.origin}/?success=false`
        })
        return NextResponse.json({ link: session.url });
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }

}