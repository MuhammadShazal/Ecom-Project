import { BsCart2 } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"


const Hero = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="py-5 flex justify-between items-center px-2">
            {/* right side */}
            <div className="space-y-6 max-w-sm">
                <button
                    aria-label="redirect the user to sale page"
                    className="rounded-md bg-teal-700 text-white font-medium px-4 py-2"
                >
                    Sale 70%
                </button>
                <h1 className="text-4xl md:text-6xl text-gray-800 font-bold">An Industrial Take on Streetwear</h1>
                <p className="text-gray-700">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <Link href={"/All_Products"}>
                <button
                    className="flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-teal-700 text-white font-semibold py-3 px-5 mt-2"
                >
                    <BsCart2 />
                    <p className="whitespace-pre leading-4">
                    Start Shopping
                    </p>
                </button>
                </Link>
                <div className="flex gap-4">
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"/assets/Featured1.png"} alt="featuredIcon" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"/assets/Featured2.png"} alt="featuredIcon" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"/assets/Featured3.png"} alt="featuredIcon" />
                    </div>
                    <div className="w-14 md:w-28">
                        <Image width={100} height={100} src={"/assets/Featured4.png"} alt="featuredIcon" />
                    </div>
                </div>
            </div>

            {/* left side */}
            <div className="hidden md:flex bg-teal-700 rounded-full">
                <Image src="/assets/header.png" alt="heroimg" width={600} height={600}/>
            </div>
        </div>
        </div>
    )
}

export default Hero