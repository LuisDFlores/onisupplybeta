import React from "react";

const NewsLetter = () => {
    return ( 
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl txt-2xl font-bold py-2">
                Don't miss out on new releases and sales</h1>
                <p>Sign up to our NewsLetter and stay up to date. </p>
            </div>

            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input classname="p-3 flex w-full rounded-md text-black" type="email" placeholder=" Enter Email "/>
                        <button className="bg-[#D5D6EA] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 ">Notify Me</button>
                </div>
            </div>
                <p>We care about the protection of your data. Read Our <span className="text-[#D5D6EA]">Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default NewsLetter