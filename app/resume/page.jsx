"use client"

import { FaHtml5,FaCss3, FaJs,FaReact,FaFigma, FaNodeJs  } from "react-icons/fa"

import {SiTailwindcss,SiNextdotjs} from 'react-icons/si'

const about ={
  title:"About me",

  description:"I proficient software developer with a Bachelor of Science in Computer Science (BSCS). He has gained extensive experience as a web developer and IT support engineer. Arslan is skilled in various programming languages and frameworks, including JavaScript and React. His expertise extends to configuring TypeScript and Tailwind CSS in Svelte, showcasing his ability to integrate modern technologies into his projects. Additionally, Arslan has a creative side, as he enjoys designing attractive wallpapers for Instagram and translating Urdu poetry into English. His diverse skill set and passion for both technical and creative endeavors make him a versatile and accomplished professional in the field of software development. ",
  info:[
    {
      fieldName:"Name:",
      fieldValue:"Arslan shah",
    },
    {
      fieldName:"Phone:",
      fieldValue:"(+92)3554364413",
    },
    {
      fieldName:"Experience:",
      fieldValue:"4+ years",
    },
    {
      fieldName:"Nationality:",
      fieldValue:"Pak",
    },
    {
      fieldName:"Email:",
      fieldValue:"arslanshaheen1999@gmail",
    },
    {
      fieldName:"Freelancer:",
      fieldValue:"Available",
    },
    {
      fieldName:" Languages:",
      fieldValue:"English,urdue,",
    },
  ]
}


const experience={
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:' proficient software developer with a Bachelor of Science in Computer Science (BSCS). He has gained extensive experience as a web developer and IT support engineer. Arslan is skilled in various programming languages and frameworks, including JavaScript and React. His expertise extends to configuring TypeScript and Tailwind CSS in Svelte, showcasing his ability to integrate modern technologies into his projects. Additionally, Arslan has a creative side, as he enjoys designing attractive wallpapers for Instagram and translating Urdu poetry into English. His diverse skill set and passion for both technical and creative endeavors make him a versatile and accomplished professional in the field of software development..',
  items:[
    {
      company:'Uconnect gilgit pakistan',
      Position:'Senior Software Engineer',
      location:'Gilgit',
      duration:'2023-present',
 
    },
    {
      company:' Nexesbarry',
      Position:' Mern stack developer',
      location:'Lahore',
      duration:'2023-2024',
     
    },
    {
      company:'business developmemt',
     Position:"Freelance",
     location:"gilgit",
     duration:"2021-22",
    },
   
  
  ]
    
}

const education={
  icon:'/assets/resume/cap.svg',
  title:'My education',
  description:'Arslan holds a Bachelor of Science in Computer Science (BSCS) and has gained valuable experience as a web developer and IT support engineer. His educational background, combined with hands-on experience in these roles, has equipped him with a strong foundation in both web development and IT support, enabling him to tackle a variety of technical challenges effectively',
  items:[
    {
      institution:'virtual university pakistan',
     degree :'bachelors in computer science',
      
      duration:'2023',
     
    },
    {
      institution:'Emaan insituted and mangement science',
     degree :' degree ADP-CS IN Wed Development',
     
      duration:'2023',
    
    },
    {
      institution:'Udemey online course',
     degree :' certified python Course',
     
      duration:'2027',
     
    },
    {
      institution:'Freecodecamp online course',
     degree :' certified data analysis coursee',
     duration:'2027',
    
    },
    {
      institution:'   Aga khan  university karachi',
     degree :' certified IT support engineering',
      duration:'2022 -23',
    }


    
    
  ]
    
}

const skills={
  title: "My skills",
  description:" Expert in JavaScript and TypeScript, with strong command over frameworks like React and Svelte.Skilled in both front-end and back-end development, specializing in the MERN stack (MongoDB, Express.js, React, Node.js) for building dynamic web applications.Proficient in configuring and integrating modern technologies, such as TypeScript and Tailwind CSS in Svelte projects.Experienced in providing comprehensive IT support, troubleshooting, and resolving technical issues effectively.Capable of identifying growth opportunities, driving business strategies, and developing innovative solutions that align with market trends.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html5"
    },
    {
      icon:<FaCss3/>,
      name:"css 3"
    },
    {
      icon:<FaJs/>,
      name:"javascript"
    },
    {
      icon:<FaReact/>,
      name:"ReactJS"
    },
    {
      icon:<FaFigma/>,
      name:"Figma"
    },
    {
      icon:<FaNodeJs/>,
      name:"NodeJS"
    },
    
   
  
    {
      icon:<SiNextdotjs/>,
      name:"Next.JS"
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind CSS"
    }
  ]
} 

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"


import { motion } from "framer-motion";
function Resume() {
  return (
    <motion.div initial={{opacity:0}}
     animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"},}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container max-auto ">
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

      <div className="min-h-[70vh] w-full">
       <TabsContent value="experience" className="w-full">
        <div className="flex flex-col text-center gap-[30px] xl:text-left">
          <h3 className="text-4xl font-bold">{experience.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-autp xl:mx-0">{experience.description}</p>
          <ScrollArea className="h-[200px]  ">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {experience.items.map((item,index)=>{
                return(
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                   
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Position}</h3>
                    <h3 className="text-accent">{item.location}</h3>

                    <div className="flex items-center gap-3">
                      <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                     
                      </div>
                   
                  </li>
                )
              })}
            </ul>
          </ScrollArea>
        </div>
      
       </TabsContent>

       
       <TabsContent value="education" className="w-full">  <div className="flex flex-col text-center gap-[30px] xl:text-left">
          <h3 className="text-4xl font-bold">{education.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-autp xl:mx-0">{education.description}</p>
          <ScrollArea className="h-[200px]  ">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
              {education.items.map((item,index)=>{
                return(
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                   
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                    {/* <h3 className="text-accent">{item.location}</h3> */}

                    <div className="flex items-center gap-3">
                      <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.institution}</p>
                     
                      </div>
                   
                  </li>
                )
              })}
            </ul>
          </ScrollArea>
        </div></TabsContent>
       <TabsContent value="skills" className="w-full ">
       
        <div className="flex flex-col gap-[30px]">
        
          <div className="flex flex-col gap-[30px] text-center xl:text-left "> 
          
            <h3 className="text-4xl font-bold">{skills.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {skills.description}</p>
          
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill,index) =>{
                return<li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full p-10 bg-[#232329] rounded-xl items-center flex justify-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              })}
            </ul>
          
          </div>
        </div>
       </TabsContent> 
        <TabsContent value="about" className="w-full text-center xl:text-left">
        <div className="flex flex-col gap-[30px] ">
          <h3 className="text-4xl font-bold">{about.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item, index)=>{
              return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className="text-white/60">{item.fieldName}</span>
                <span className="text-xl">{item.fieldValue}</span>
              </li>
                


              
            })}
          </ul>
        </div>
       </TabsContent> 
      </div>

        </Tabs>
      </div>
      
    </motion.div>
  )
}

export default Resume