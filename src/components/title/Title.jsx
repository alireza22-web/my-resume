export const Title = ()=>{
  return (
    <div className="container mx-auto  px-6 ">
      <div className="absolute border-red-700 right-0 size-[1050px] max-xl:size-[850px] max-lg:size-[620px] max-md:hidden -z-10 ">
        <img src="image/bg-slider.svg" className=""/>
      </div>
      <div>
        <div className="max-md:block mx-auto hidden w-[300px]">
          <img src="image/programmer-bro.svg" className="" alt="" />
        </div>
        <div className="py-52 max-xl:py-32 max-lg:py-16 max-md:py-4 w-1/2 max-md:w-fit max-md:px-4">
          <h1 className="text-6xl mb-3 h_title max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            I'm <span className="dark:text-yellow-400 font-semibold text-gray-600">Alireza Khoondabi</span> 
          </h1>
          <p className="text-xl opacity-0 pl-4 border-l-2 border-dashed max-lg:text-lg max-md:text-base dark:border-yellow-400 border-gray-600 p_title">
            Frontend Developer with a passion for creating creative and engaging user interfaces! Skilled in React.js, Tailwind CSS, and JavaScript, always eager to learn new trends and optimize user experience. If you need a fast, responsive, and visually stunning website, I'm here! 
          </p>
        </div>
      </div>
    </div>
  )
}