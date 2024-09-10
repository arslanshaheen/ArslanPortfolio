"use client";
import { motion} from 'framer-motion'
import React, { useState } from 'react';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import { Tooltip , TooltipContent,
  TooltipProvider
  ,TooltipTrigger } from '@/components/ui/tooltip';

  import Link from 'next/link';
  import Image from 'next/image';

  const projects=[
    {
      num:'01',
      category:'front-end',
      title:'Project 1',
      description:'My team and I have created a website called "Cohr." This website is used by many companies. It is designed to manage employee attendance, leaves, and track the time employees arrive and depart. We developed this website using Next.js, Tailwind CSS, and TypeScript..',
     stack:[
       {name:"Html"},
       {name:"css "},
         {name:"Typscript"},
           {name:"nextjs"},
         ],
         image:"/assets/work/cohr.png",
         live:'https://cloud.quohr.com/employee/my-timesheet',
         github:'https://github.com/arslanshaheen',
       },
       {
        num:'02',
        category:'full-stack',
        title:'Project 2',
        description:'Our team and I developed a school application for a USA client. This application functions like a regular application and was created using Tailwind CSS, Storybook, React Query, and TypeScript.',
       stack:[
         {name:"tanstack queries"},
         {name:"tailwincss"},
           {name:"nodejs"},
             {name:"nextjs"},
           ],
           image:"/assets/work/cqed.png",
           live:'https://cqed-dev.staginguconnect.com/login',
           github:'https://github.com/arslanshaheen',
         },
         {
          num:'03',
          category:'front-end',
          title:'Project 3',
          description:'I created an e-commerce store named "Hamilain" according to a clients order. This store was developed using React, custom CSS, and Ant Design..',
         stack:[
           {name:"antdesign",},
           {name:""},
             {name:"javascript"},
               {name:"reactjs"},
             ],
             image:"/assets/work/theHamalin.png",
             live:'https://www.thehimalians.com/',
             github:'https://github.com/arslanshaheen/ant-ecommerce',
           }
     ]
  
function  Work() {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange=(swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:'easeIn'}}} className='min-h-[88vh] flex flex-col justify-center py-12 xl:px-0
    '> 
      
        <div className="container mx-auto">
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{
              project.num}</div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                {/* description */}
                <p className='text-white/60'>{project.description}</p>
<ul className='flex gap-4'>
  {project.stack.map((item, index)=>{
    return(
      <li key={index} className='text-xl text-accent'>
      {item.name}
      {index !==project.stack.length-1 && ','}
      </li>
    )

  })}
</ul>
<div className='border border-white/20'></div>
<div className='flex items-center gap-4'>
  <Link href={project.live}> 
<TooltipProvider delayDuration={100}>
  <Tooltip>
    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">

        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
      
    </TooltipTrigger>
    <TooltipContent>
      <p >Live projects</p>
    </TooltipContent>
  </Tooltip>

</TooltipProvider>
</Link>
<Link href={project.github}> 
<TooltipProvider delayDuration={100}>
  <Tooltip>
    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">

        <BsGithub className='text-white text-3xl group-hover:text-accent'/>
      
    </TooltipTrigger>
    <TooltipContent>
      <p >Github repositary</p>
    </TooltipContent>
  </Tooltip>

</TooltipProvider>
</Link>
</div>
 </div>
          

          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} sliderPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>
              {
                projects.map((item, index) => 
                  (
                  <SwiperSlide key={index} className='w-full'>
                   <div className='h-[468px] relative group flex justify-center items-center bg-pink-50/20'>
                   {/* overlay */}
                   <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                   {/* image */}
                   <div className='relative w-full h-full'>
                   <Image src={project.image} fill className='object-cover' alt=''/>
                   </div>
    
                   </div>
                  </SwiperSlide>
                ))
              }
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px) xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'/>
            </Swiper>
          </div>
          </div>
          
        </div>
      
    </motion.section>
  )
}

export default Work;