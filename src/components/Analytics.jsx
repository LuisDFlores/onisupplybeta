import React from "react";
import Image1 from '../assets/image-holder.png'
const Analytics =() =>{
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
                <img clasname="w-[500px] mx-auto my-4"src={Image1} alt="/"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">ONIsupply Dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Journey starts here</h1>
                    <p>
                    lorem paragraphdddddddddddddddddddddddddddddddddddddddddddddddd adfdsf
                    </p>
                    <button className="bg-black text-[#00dfa9] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"> Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics