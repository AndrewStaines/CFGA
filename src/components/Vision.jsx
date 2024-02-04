import { motion } from "framer-motion"; 
export default function Vision() {
  return(
    <>
      <motion.div whileHover={{scale:1.1}} transition={{ ease: [0.25, 0.5, 0.75, 1] }} className="flex flex-col shadow-2xl shadow-black w-36 xl:w-96 h-fit  p-4 xl:p-12 border-2 rounded-xl mx-auto cursor-pointer">
        <h1 className="text-sm xl:text-2xl">VISION</h1>
        <p className="text-xs xl:text-lg">The vision of a church often involves a forward-looking perspective on its desired future impact 
        and role in the lives of its members and the community.
         </p>
      </motion.div>
    </>
  );
}