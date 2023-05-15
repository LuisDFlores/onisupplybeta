import React from "react";
import Single from "../assets/image-holder.png"
import Onitee from "../assets/oni_tee.png" 
const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 b">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/"/>
                    <h2 className="text-2xl font-bold text-center py-8">FONT TEXT</h2>
                    <p className="text-center text-4xl font-medium">$$$$</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                    </div>
                    <button className=" bg-[#00dfa9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Buy Now</button>
                </div>

                <div className="w-full shadow-xl bg-gray-50 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Single} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">FONT TEXT</h2>
                    <p className="text-center text-4xl font-medium">$$$$</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                    </div>
                    <button className="bg-black text-[#00dfa9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Buy Now</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
                    <h2 className="text-2xl font-bold text-center py-8">FONT TEXT</h2>
                    <p className="text-center text-4xl font-medium">$$$$</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                        <p className="py-2 border-b mx-8 mt-8">text</p>
                    </div>
                    <button className=" bg-[#00dfa9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">Buy Now</button>
                </div>

            </div>
        </div>
    )
}

export default Cards