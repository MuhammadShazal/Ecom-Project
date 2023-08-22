"use client"
import ContextWrapper from "@/global/context"
import SubComp from "./comp/SubComp"

const TopLabel = () => {

    return (
        <ContextWrapper>
            <div className="overflow-hidden border-b text-gray-100 bg-teal-700">
                <div className="px-4 max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <p><img src="https://readme-typing-svg.demolab.com?font=Preahvihear&pause=1000&color=FFFFFF&width=435&lines=Effortless+Elegance+Redefined;Cozy+%26+Stylish%3A+Fall%2FWinter+Collection;Tailored+Perfection+%E2%80%93+Customize+Your+Look;Sustainable+Fashion%2C+Uncompromised+Style;Trendsetting+Styles+Await+%E2%80%93+Shop+Now!" alt="Typing SVG" /></p>
                    </div>
                    <SubComp />
                </div>
            </div>
        </ContextWrapper>
        
    )
}

export default TopLabel