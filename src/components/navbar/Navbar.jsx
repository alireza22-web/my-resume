"use client"
import { useState } from "react"
import DarkModeToggle from "../darkToggle/DarkToggle"
import { Biography } from "../biography/Biography"

export const Navbar = ()=>{

  const [bio,setBio] = useState(false)

  return (
    <nav className="container mx-auto nav-animate px-6 flex items-center justify-between py-4 dark:bg-slate-800 dark:text-white">
      <div className="flex-1/2">
        <div className="flex  gap-2 items-center p-2 bg-gray-100 font-semibold hover:bg-gray-300 cursor-pointer transition-colors duration-200 rounded-md dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-black w-fit" onClick={()=>setBio(!bio)}>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="image/profile.jpg" alt="" />
          </div>
          <span className="flex items-center max-md:text-sm">
            <span>Alireza Khoondabi</span>
            
            {
              bio ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                
              :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            }
          </span>
        </div>
      </div>
      <ul className="flex gap-3 flex-1/2 items-center text-lg font-normal justify-center capitalize max-md:hidden">
        <li>about</li>
        <li>skill</li>
        <li></li>
      </ul>
      <div className="flex items-center justify-end md:flex-1/2 gap-4 ">
        <button className="py-1.5 rounded-lg font-semibold px-4 max-md:hidden bg-gray-100 dark:bg-yellow-400 text-black text-lg uppercase">
          <span>contact me</span>
        </button>
        <DarkModeToggle/>
      </div>
      <Biography bio={bio} />
    </nav>
  )
}