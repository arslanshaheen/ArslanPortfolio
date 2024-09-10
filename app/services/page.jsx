"use client"
import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"

const Services =[
  {
    num:'01',
    title:'Web Development',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus faucibus justo, ac ullamcorper enim gravida vel.',
href:""
  },
  {
    num:"02",
    title: "Android development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus faucibus justo, ac ullamcorper enim gravida vel.",
href:""

  },
  {
    num:"03",
    title: "web development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus faucibus justo, ac ullamcorper enim gravida vel.",
    href:""
  },
  {
    num:"04",
    title: "web development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus faucibus justo, ac ullamcorper enim gravida vel.",
    href:""
  }
]

import {motion} from "framer-motion";
function services() {
  return (
    <section className=" min-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto"> 
      <motion.div 
      initial={{opacity:0}} 
      animate={{opacity:1, 
      transition:{delay:2.4, duration:0.4, ease:'easeIn'},}}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
       {Services.map((servies, index) => {
        return (
          <div key={index} 
          className="flex-1 flex flex-col  justify-center gap-6 group ">
            {/* top */}
            <div className=" w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{servies.num}</div>
              <Link href={servies.href}
               className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                <BsArrowDownRight  className="text-primary text-3xl"/>
              </Link>
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{servies.title}</h2>
            <p className="text-white/60">{servies.description}</p>
            <div className="border-b border-white/20 w-full"></div>
          </div>
        );
      })}
        </motion.div></div>
      </section>
  )
}

export default services