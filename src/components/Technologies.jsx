import { SiR, SiPostgresql } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import Pythonlogo from "../assets/python.png";
import Mysqllogo from "../assets/mysql.png";
import Javalogo from "../assets/java.png";
import Htmllogo from "../assets/htmllogo.png";
import CSSlogo from "../assets/css-logo.png";
import JSlogo from "../assets/js.png";
import Gitlogo from "../assets/git.png";
import Figmalogo from "../assets/figmalogo.png";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [-10,10],
    transition: {
      duration: duration,
      ease: "linear", 
      repeat: Infinity,
      repeatType: "reverse"
    },
  },

})

const Technologies = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>

      <motion.div 
        whileInView={{opacity:1, x:0}} initial = {{opacity:0, x:-100}} transition = {{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-6">
        
        <motion.div 
        variants={iconVariants(2.5)}
        initial = "initial"
        animate = "animate"
        
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={Pythonlogo}
            alt="Python"
            className="h-20 w-20 object-contain"
            title="Python"
          />
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <SiR className="text-7xl text-[#276DC3]" title="R" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={Mysqllogo}
            alt="Mysql"
            className="h-20 w-20 object-contain"
            title="Mysql"
          />
        </motion.div>

        <motion.div 
        variants={iconVariants(3.5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          
          <SiPostgresql
            className="text-7xl text-[#336791]"
            title="PostgreSQL"
          />
        </motion.div>

        <motion.div 
        variants={iconVariants(6)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={Javalogo}
            alt="Java"
            className="h-20 w-20 object-contain"
            title="Java"
          />
        </motion.div>

        <motion.div
        variants={iconVariants(4.5)}
        initial = "initial"
        animate = "animate" 
        
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={Htmllogo}
            alt="HTML"
            className="h-20 w-20 object-contain"
            title="HTML"
          />
        </motion.div>

        <motion.div 
        variants={iconVariants(7)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={CSSlogo}
            alt="CSS"
            className="h-20 w-20 object-contain"
            title="CSS"
          />
        </motion.div>

        <motion.div 
        variants={iconVariants(7.5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={JSlogo}
            alt="JavaScript"
            className="h-20 w-20 object-contain"
            title="JavaScript"
          />
        </motion.div>

        <motion.div 
        variants={iconVariants(8)}
        initial = "initial"
        animate = "animate"
        
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <RiReactjsLine className="text-7xl text-[#61DAFB]" title="React" />
        </motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <FaVuejs className="text-7xl text-[#42B883]" title="Vue.js" />
        </motion.div>

        <motion.div 
        variants={iconVariants(3.5)}
        initial = "initial"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={Gitlogo}
            alt="Git"
            className="h-20 w-20 object-contain"
            title="Git"
          />
        </motion.div>

        <motion.div 
        variants={iconVariants(2.5)}
        initial = "initial"
        animate = "animate"
        
        className="rounded-2xl border-4 border-neutral-700 p-4">
          <img
            src={Figmalogo}
            alt="Figma"
            className="h-20 w-20 object-contain"
            title="Figma"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
