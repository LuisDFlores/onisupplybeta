import React from "react"; 
import Typed from 'react-typed';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

    const Hero = () =>{
        return (
            <div className="text-white">
                <div className="max-w-[800px] mt[96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                    <p className=" text-[#D5D6EA] font-bold p-2">To go beyond your Potential</p>
                    <h1 className="md:text-7xl sm:text-6xl text 4xl font-bold md:py-6">
                    Potential With ONIsupply
                    </h1>
                    <div className="flex justify-center items-center ">
                         <p className="md:text 5xl sm:text-4xl font-bold py-4">
                         Affordable and Stylish for
                         </p>
                        <Typed className="md:text-5xl sm:text-4xl txt-xl font-bold md:pl-4 pl-2"
                        strings={['Powerlifting','Skateboarding','Lifestyle']} typespeed={320} backspeed={140} loop/>
                    </div>
                    <p className="med:-2xl text-xl font-bond text-gray-500"> Choose from the best to improve</p>
                    <button className="bg-[#D5D6EA] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" > Fall / Winter Lookbook </button>
                    </div>
            </div>

        )
    }

export default Hero