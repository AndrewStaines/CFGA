import React from "react";
import { motion, useAnimation } from "framer-motion";
import SideBar from "./MenuBar";
import Image from "./Image";
import Mission from "./Mission";
import { useInView } from "react-intersection-observer";
import gj from "../assets/50.png";
import TimeLine from "./Timeline";
import Vision from "./Vision";
import Table from "./Table";

function Home() {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ 
        opacity: 1,
        y: 0,
        transition: { type: "spring" , delay: 0.5},
    });
    } else {
      controls.start({ opacity: 0,
        y: -50,
        transition: { type: "spring", delay: 0.5 }, 
    });
    }
  }, [controls, inView]);

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ 
        opacity: 1,
        y: 0,
        transition: { type: "spring" , delay: 0.5},
    });
    } else {
      controls1.start({ opacity: 0,
        y: -50,
        transition: { type: "spring", delay: 0.5 }, 
    });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ 
        opacity: 1,
        y: 0,
        transition: { type: "spring" , delay: 0.5},
    });
    } else {
      controls2.start({ opacity: 0,
        y: -50,
        transition: { type: "spring", delay: 0.5 }, 
    });
    }
  }, [controls2, inView2]);


  return (
    <div>
      <SideBar />
      <Image />
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        className="mid"
      >
        <div className="mid1 colGrid">
        <Mission/>
        <Vision/>
        </div>
      </motion.div>
      <motion.div
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, y: 50 }}
        className="mid"
      >
        <img src={gj} alt="" width={'35%'} />
        <div className="tim">
        <TimeLine/>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        animate={controls2}
        initial={{ opacity: 0, y: 50 }}
        className="mid">
        <Table />
      </motion.div>
    </div>
  );
}

export default Home;
