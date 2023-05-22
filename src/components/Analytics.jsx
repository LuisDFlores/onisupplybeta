import React from "react";
import Image1 from '../assets/image-holder.png'
import Onilogo from "../assets/logo-black.png"
const Analytics =() =>{
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
                <img clasname="w-100px h-200px  my-4"src={Onilogo} alt="/"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#D5D6EA] font-bold">ONIsupply Dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Journey starts here</h1>
                    <p>
                    This company is not about being the best of the best, its about being the best you can be. The best you can be to make yourself happy. A company driven by self love and not envy.
                    </p>
                    <button className="bg-black text-[#D5D6EA] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"> Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics