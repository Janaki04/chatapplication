import React from 'react'
import image from "../assets/Call Service.png"

function NewCov() {
  return (
       <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white relative select-none">
          <div className="w-64 h-64 relative mb-4 flex items-center justify-center">
           <img src={image}/>
          </div>
          <p className="text-xs font-bold text-gray-900 tracking-wide">
            Select a conversation or start a <span className="text-blue-500 hover:underline cursor-pointer font-extrabold">new one</span>
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
        </div>
  )
}

export default NewCov