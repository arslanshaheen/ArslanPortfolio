import {animate, motion} from "framer-motion"

const stairAnimation={
    intial:{
        top:"0%"
    },
    animate:{
        top:"100%"
    },
    exit:{
        top:["100%","0%"],
    },
}
// calculate the reverse index for staggred delay
const reverseIndex =(index)=>{
    const totalSteps=6; //number of steps
   
    return totalSteps - index - 1;
}

function Stairs() {
  return (
    <>
    {/* // render 6 motion divs each represent a step of the stairs

    // each div will have same animtion define by the stairAnimation object the delay for each div is calcutation
    // sinamically based on its reversea indexed
    // step creating a staggered effect with decreasing delay for each subsequent step. */}
   {[...Array(6)].map((_, index)=>{
    return(
    <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
        duration:0.4,
        ease: "easeInOut",
 delay :reverseIndex(index)*0.1,


    }}
    className="h-full w-full bg-white relative"
    />
)
   }) }
    </>
  )
}

export default Stairs