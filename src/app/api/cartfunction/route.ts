// import { NextRequest, NextResponse, } from "next/server"
// import { db, cartTable } from "../../../../sanity/lib/drizzle" 
// import {v4 as uuid} from 'uuid'
// import { cookies } from "next/headers"
// import { eq,and } from "drizzle-orm";

// // export async function GET(req: NextRequest) {
// //     let url = req.nextUrl.searchParams;
// //     try {
// //         if (url.has("user_id")) {
// //             let allCartData = await db.select().from(cartTable).where(eq(cartTable.user_id, (url.get("user_id") as string)));
// //             return NextResponse.json({ allCartData })
// //         }
// //     } catch (error) {
// //         console.log("error : ", (error as { message: string }).message)
// //         return NextResponse.json({ error })
// //     };
// // };

// export async function GET(request: NextRequest){
//     try {
//         const res = await db.select().from(cartTable)
//         return NextResponse.json({ res })
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({ message: "something went wrong" })
        
//     }
// }

// export async function POST(request: NextRequest) {

//     const req = await request.json()

//     const uid = uuid();
//     const setcookies =cookies()

//     const user_id = cookies().get("user_id")
//     if (!user_id) {
//         setcookies.set("user_id" , uid)
//     }


//     try {
//         const res = await db.insert(cartTable).values({
//             product_id: req.product_id,
//             quantity: 1,
//             user_id: cookies().get("user_id")?.value as string,
//         }).returning();
//         return NextResponse.json({ res })
//     } catch (error) {
//     }
// }








import { cartTable, db } from "../../../../sanity/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm"

export async function GET(req: NextRequest) {
    let url = req.nextUrl.searchParams;
    try {
        if (url.has("user_id")) {
            let allCartData = await db.select().from(cartTable).where(eq(cartTable.user_id, (url.get("user_id") as string)));
            return NextResponse.json({ allCartData })
        }
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({ error })
    };
};

export async function POST(req: NextRequest) {
    let request = await req.json();
    console.log(request.product_id && request.quantity && request.user_id && request.price)
    try {
        if (request.product_id && request.quantity && request.user_id && request.price) {
            let response = await db.insert(cartTable).values(request).returning();
            return NextResponse.json({ response })
        } else {
            throw Error("Please put product_id quantity user_id")
        }   
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({ error })
    }
}

export async function PUT(req: NextRequest) {
    let request = await req.json();

    try {
        let response = await db.update(cartTable).set(request).
            where(
                and(eq(cartTable.product_id, request.product_id), eq(cartTable.user_id, request.user_id))
            ).returning();
        return NextResponse.json({ response })
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({ error })
    }
}


export async function DELETE(req: NextRequest) {
    let url = req.nextUrl.searchParams;

    try {
        if (url.has("product_id") && url.has("user_id")) {
            let response = await db.delete(cartTable).
                where(
                    and(eq(cartTable.product_id, (url.get("product_id") as string)), eq(cartTable.user_id, (url.get("user_id") as string)))
                ).returning()
            return NextResponse.json({ response });
        }
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({ error })
    }
} 


