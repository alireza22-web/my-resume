"use client"
import { SkilleLogo } from "@/db/skilleLogo"
import { motion } from "framer-motion"

export const Skille = ()=>{

  return (
    <div className="pt-20 p-8 bg-white dark:bg-slate-800 dark:text-black">
      
        <div className="container  mx-auto w-[800px] max-lg:w-[600px] max-lg:grid-cols-3 max-md:w-[300px] max-sm:w-fit max-sm:gap-x-2 max-md:grid-cols-2 grid grid-cols-4 place-items-center gap-y-12">
          {
            SkilleLogo.map((item,index)=>{
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 ,delay:.5}}
                  viewport={{once:true}}
                  >
                  <div className="hover:ml-2 box transition-all duration-200 flex flex-col gap-4 bg-neutral-200  font-semibold rounded-lg p-4 items-center justify-center">
                    <img className="w-20" src={`image/${item.img}`} alt="" />
                    <span className="">{item.title}</span>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
    </div>
  )
}