import locked from "../assets/locked.png";
import Button from "./Button";
import wallet from "../assets/wallet.png";
import defi from "../assets/defi.png";
import xverse from "../assets/xverse.png";
import alex from "../assets/alex.png";
import { motion, easeIn, spring, animate, useInView } from "motion/react";
import SecuredItem from "./SecuredItem";
import { useRef } from "react";
function Secured() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const myVariant = {
    active: {
      opacity: 1,
      x: 0,
      transition: { type: spring, damping: 20, ease: easeIn },
    },
    inactive: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <div className="p-8 bg-black rounded-3xl py-16 my-10 max-w-6xl mx-auto ">
      <div className="flex flex-col md:flex-row  gap-4 justify-between">
        <div className="flex flex-col space-y-4">
          <p className="text-primary text-sm font-semibold">
            Stacks for developer
          </p>
          <h2 className="max-w-md text-white">
            Build powerful apps, secured by bitcoin
          </h2>
          <p className="max-w-md text-xs text-white">
            Stacks connects to Bitcoin, enabiling you to build apps, smart
            contracts, and digital assets that are integerated with Bitcoin`s
            security, capital , and networks.
          </p>
          <div>
            <Button>Start Stacking</Button>
          </div>
        </div>
        <div className="md:w-[450px]">
          <img src={locked} alt="" />
        </div>
      </div>
      <div>
        <div className="text-white max-w-xs mt-16">
          <h2>See what's being built</h2>
        </div>
        <motion.div
          ref={ref}
          variants={myVariant}
          initial="inactive"
          animate={isInView ? "active" : "inactive"}
          className="flex flex-col md:flex-row mt-6 text-sm text-white p-2 gap-2 justify-between"
        >
          <SecuredItem src={wallet} text="Stacks web wallet" />
          <SecuredItem src={defi} text="Defi platform" />
          <SecuredItem src={xverse} text="Xverse app Jolocam" />
          <SecuredItem src={alex} text="Xverse meta wallet" />
        </motion.div>
      </div>
    </div>
  );
}

export default Secured;
