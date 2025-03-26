export const Biography = ({bio})=>{
  console.log(bio);
  
  return (
    <div className={` bg-neutral-200 text-gray-900 fixed dark:bg-slate-700 dark:text-gray-100 -translate-x-1/2 -translate-y-1/2 p-5 left-1/2 z-50 ${bio? `top-96`:`-top-full` } transition-all duration-500 max-md:min-w-80 shadow-lg rounded-md`}>
      <div className="flex items-center gap-8 max-lg:flex-col">
        <div className="w-40 h-40 rounded-full overflow-hidden ">
          <img src="image/profile.jpg" className="w-full h-full" alt="" />
        </div>
        <p className="text-gray-700 flex-1/2 text-justify max-lg:text-base text-lg dark:text-gray-200">
          I'm <span className="text-black dark:text-yellow-500">Alireza</span>, a front-end developer passionate about coding and UI design. I spend most of my time learning new technologies and optimizing user experiences. I love the world of the web and creativity, always looking for new challenges!
        </p>
      </div>
    </div>
  )
}