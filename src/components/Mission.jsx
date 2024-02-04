import { motion } from "framer-motion"; 
export default function Mission() {
  return(
    <>
      <motion.div whileHover={{scale:1.1}} transition={{ ease: [0.25, 0.5, 0.75, 1] }} className="flex flex-col shadow-2xl shadow-black w-96 h-fit p-12 border-2 rounded-xl mx-auto cursor-pointer">
        <h1 className="text-2xl ">MISSION</h1>
        <p>
The mission of the church is to nurture spiritual development, fostering a community of faith where individuals can worship, connect, and grow in their relationship with God. </p>
      </motion.div>
    </>
  );
}