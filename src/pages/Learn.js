import React from 'react'
import { Link } from "react-router-dom"
import HumanBrainImg from "../assets/humanBrain.jpeg"
import HumanLungsImg from "../assets/humanLungs.jpeg"
import HumanMusclesImg from "../assets/HumanMuscle.jpeg"
import HumanSkullImg from "../assets/humanSkull.jpeg"
import HumanStomachImg from "../assets/humanStomach.jpeg"

export default function Learn() {
  return (
    <div>
      <div className="grid w-full py-10 place-items-center">
        <h1 className="pb-2 text-5xl text-white font-semibold tracking-wide">
          Choose Topic
        </h1>
        <div className="inline-flex h-1 bg-secondary rounded-full w-56"></div>
      </div>

      <div className="flex flex-wrap justify-around w-full px-16 py-8">

        <Link to='/lungs'>
          <div className="m-8">
            <div className="w-72 h-60 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={HumanLungsImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Human Lungs</div>
            </div>
          </div>
        </Link>

        <Link to='/brain'>
          <div className="m-8">
            <div className="w-72 h-60 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={HumanBrainImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Human Brain</div>
            </div>
          </div>
        </Link>

        <Link to='/muscle'>
          <div className="m-8">
            <div className="w-72 h-60 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={HumanMusclesImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Human Muscle</div>
            </div>
          </div>
        </Link>

        <Link to='/skull'>
          <div className="m-8">
            <div className="w-72 h-60 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={HumanSkullImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Human Skull</div>
            </div>
          </div>
        </Link>

        <Link to='/stomach'>
          <div className="m-8">
            <div className="w-72 h-60 cursor-pointer transition duration-500 transform hover:scale-105">
              <img className="pb-8 border-4 bg-primary border-secondary rounded-lg" alt="" src={HumanStomachImg} />
              <div className="grid place-items-center mx-1 -mt-8 text-xl font-semibold text-white bg-homeImg font-sourceSerifPro">Human Stomach</div>
            </div>
          </div>
        </Link>

        <div className="m-8">
          <div className="w-56 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg bg-primary">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white bg-homeImg font-sourceSerifPro">More topics comming soon..</div>
          </div>
        </div>

      </div>
    </div>
  )
}
