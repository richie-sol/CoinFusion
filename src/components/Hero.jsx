import Button from "./Button";
import Vector from "../assets/Vector.png";
import BlueImg from "../assets/blueImage.png";
import Bitcoin from "../assets/Bitcoin.png";
import FVector from "../assets/fVector.png";
import { easeIn, motion, spring, useInView, animate } from "motion/react";
import { useRef } from "react";
function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: spring, ease: easeIn, damping: 20 }}
        className="max-w-6xl mx-auto mt-32 flex flex-col space-y-8"
      >
        <h1 className="text-6xl font-medium text-white text-center max-w-lg mx-auto">
          Unleash Bitcoin full potential
        </h1>
        <p className="text-white max-w-xs text-center mx-auto text-sm">
          Stacks enables DeFi, NFTs, apps, and smart contracts for bitcoin
        </p>
        <div className="mx-auto">
          <Button>See whats built on stock</Button>
        </div>
      </motion.div>
      <div className="mt-20 max-w-6xl mx-auto p-2">
        <div>
          <p className="text-white mb-10 px-2">Latest Ecosystem news</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: spring, ease: easeIn, damping: 30 }}
          className="max-w-6xl mx-auto text-white flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:space-x-4"
        >
          <div className="flex hover:bg-slate-100 hover:text-myGray cursor-pointer transition duration-250 space-x-4 items-center p-4 rounded-full bg-myGray">
            <img src={Vector} alt="" className="w-8" />
            <p className="max-w-[10rem] text-xs">
              Alex rasises $8.6M to bring Defi to the..
            </p>
          </div>
          <div className="flex space-x-4 hover:bg-slate-100 hover:text-myGray cursor-pointer transition duration-250 items-center p-4 rounded-full bg-myGray">
            <img src={BlueImg} alt="" className="w-8" />
            <p className="max-w-[10rem] text-xs">
              Nyc get own cryptocurrancy after
            </p>
          </div>
          <div className=" group flex hover:bg-slate-100 hover:text-myGray cursor-pointer transition duration-250 space-x-4 items-center p-4 rounded-full bg-myGray">
            <img src={FVector} alt="" className="w-6" />
            <p className="max-w-[10rem] text-xs">
              Alex rasises $8.6M to bring Defi to the..
            </p>
          </div>
          <div className="flex hover:bg-slate-100 hover:text-myGray cursor-pointer transition duration-250 space-x-4 items-center p-4 rounded-full bg-myGray">
            <img src={Bitcoin} alt="" className="w-6" />
            <p className="max-w-[10rem] text-xs">
              Alex rasises $8.6M to bring Defi to the..
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
