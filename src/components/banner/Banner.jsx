import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-blue-50 min-h-[500px]">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-10">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{duration: 8, repeat: Infinity}}
            className="max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-[#3C65F5] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{duration: 8, delay: 4, repeat: Infinity}}
            className="max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-[#3C65F5] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest Job For{" "}
            <motion.span
              animate={{ color: ["#3390ff"] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              You!
            </motion.span>
          </motion.h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn bg-[#3C65F5] hover:bg-[#3C65F5] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
