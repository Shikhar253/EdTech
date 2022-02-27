import React from 'react'
import HomeImg from "../assets/home.svg"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className=" md:pt-24 bg-homeImg h-screen w-full">
            <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="pr-4 md:flex md:flex-col md:justify-center align-middle pt-24">

                        <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-secondary font-carattere md:text-4xl lg:text-7xl">EdTech</h2>

                        <p className="self-center text-xl tracking-wide text-justify text-white">EdTech is an AR-based web platform where students come across and learn about various complex biology topics. Learn with the help of interactive 3D Models and Augnmented Reality.</p>

                        <Link to="/learn" className="md:w-1/3">
                            <button className="p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg ">Learn</button>
                        </Link>

                    </div>

                    <div className="h-full">
                        <img src={HomeImg} alt="img" className="w-full lg:p-10" />
                    </div>

                </div>
            </div>

        </div>
    )
}
