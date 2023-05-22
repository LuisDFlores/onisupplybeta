import React from "react";
import Single from "../assets/image-holder.png"
import Onitee from "../assets/oni_tee.png" 
import Onipants from "../assets/oni_pants.png"
import Onibag from "../assets/oni_bag.png"
const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 b">
                    <h2 className="text-2xl font-bold text-center py-8">Oni-Supply Tote Bag</h2>
                    <img className="w-[full] mx-auto  bg-white" src={Onibag} alt="/" />
                    <p className="text-center text-3xl text-bold font-medium line-through "></p>
                    <p className="text-center text-4xl text-bold font-medium   "></p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Beta Launch Series 1</p>
                    </div>
                    <button className=" bg-[#D5D6EA] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">More Pics</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                   
                    <h2 className="text-2xl font-bold text-center py-8">Oni-Supply Tee</h2>
                    <img className=" mx-auto w-[full] bg-transparent" src={Onitee} alt="/" />
                    <p className="text-center text-3xl text-bold font-medium line-through "></p>
                    <p className="text-center text-4xl text-bold font-medium   "></p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Beta Launch Series 1</p>
                    </div>
                    <button className="bg-black text-[#D5D6EA] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">More Pics</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-8">Oni-Supply Joggers</h2>
                    <img className="w-[full] mx-auto  bg-white" src={Onipants} alt="/" />
                    <p className="text-center text-3xl text-bold font-medium line-through"></p>
                    <p className="text-center text-4xl text-bold font-medium   "></p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Beta Launch Series 1</p>
                    </div>
                    <button className=" bg-[#D5D6EA] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ">More Pics</button>
                </div>

            </div>
        </div>
    )
}

export default Cards