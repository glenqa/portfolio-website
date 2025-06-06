import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepic.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Intro = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-light tracking-tight lg:mt-16 lg:text-8xl"
            >
              Glenda Tay
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-4xl 
            tracking-tight text-transparent"
            >
              NUS Business Analytics & Statistics
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial = "hidden"
            animate = "visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
                initial= {{x:100, opacity: 0}}
                animate= {{x:0, opacity: 1}}
                transition={{duration:1, delay: 1.2}}
                src={profilePic} alt="profile pic"
                className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] 
                md:h-[600px] lg:w-[450px] lg:h-[450px] object-cover rounded-full">

                
            </motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
