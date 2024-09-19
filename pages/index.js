import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="homePage overflow-hidden">
      <div className="lg:bg-[#F2EDE4] lg:w-full lg:h-[99.9vh] overflow-hidden">
        <motion.img
          initial={{
            x: -90,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          src="/dcloth.jpg"
          className="lg:w-[400px] h-full w-full lg:h-[600px] absolute lg:left-7 lg:top-6 lg:mt-10 lg:rounded-xl"
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
          }}
          src="/dclothh.jpg"
          className="hidden lg:flex lg:w-[515px] lg:absolute right-1 lg:h-[650px] lg:top-[75px] lg:rounded-tl-[48%]"
        />

        <div className="relative mt-20 text-center lg:m-auto lg:w-[700px] z-10">
          <motion.h1
            initial={{
              y: -30,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 2,
            }}
            className="text-5xl font-bold text-white lg:text-black pt-48 lg:text-8xl  lg:font-bold lg:pt-56 lg:z-10"
          >
            Get A prefec<span className="text-white">t</span> luxurious loo
            <span className="text-white">ks</span>
          </motion.h1>
          <motion.p
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.8,
              duration: 2.5,
            }}
            className="text-xl font-medium lg:pt-6 lg:text-2xl lg:font-medium text-[#592B20]"
          >
            <i>Bringing your fashion styles, up to taste!</i>
          </motion.p>

          <p className="lg:mt-10 mt-32 text-[#592B20] font-medium text-xl ">
            Ajimoti Victoria Iyanu 194853
          </p>
        </div>
        <div className="overlay absolute h-[99.9vh] lg:hidden"></div>
      </div>
    </main>
  );
}
