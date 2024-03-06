import React from 'react'
import { FaUser } from 'react-icons/fa';
export default function Percentage() {
  return (
    <div className="flex ml-20 mt-10">
        <h1 className="mt-[-40px]">Analyst Estimates </h1>
        <div className="relative w-24 h-24">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-green-100 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center text-green-500 font-bold text-xl">
          76%
        </div>
      </div>
      <svg className="absolute inset-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11"  strokeWidth="2" />
      </svg>
    </div>
        <div className="ml-10 ">
            <div className="flex"><div><p>Buy</p></div>    
        <div className="bg-gray-200 w-80 h-2  rounded-lg mb-3 mt-2 ml-3">
      <div className="bg-green-500 h-full rounded-lg" style={{ width: '76%' }}></div>
    </div></div>
    <div className="flex"><div><p>Hold</p></div>  
    <div className="bg-gray-200 w-80 h-2 rounded-lg mb-3 mt-2 ml-3">
      <div className="bg-gray-500 h-full rounded-lg" style={{ width: '8%' }}></div>
    </div>
    </div>
    <div className="flex"><div><p>Sell</p></div>
    <div className="bg-gray-200 w-80 h-2 rounded-lg mb-3 mt-2 ml-3">
      <div className="bg-red-500 h-full rounded-lg" style={{ width: '16%' }}></div>
    </div>
    </div>
        </div>
      
    </div>
  )
}
