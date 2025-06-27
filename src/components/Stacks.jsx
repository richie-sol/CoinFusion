import { BiTransferAlt } from "react-icons/bi";
import { BsLightningFill } from "react-icons/bs";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { motion, easeIn, spring, animate, useInView } from "motion/react";
import { useRef } from "react";
import StackCard from "./StackCard";
function Stacks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variant = {
    inactive: {
      y: 100,
    },
    active: {
      y: 0,
    },
  };
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <motion.h2
          ref={ref}
          variants={variant}
          initial="inactive"
          animate={isInView ? "active" : "inactive"}
          transition={{ type: spring, ease: easeIn, damping: 30 }}
          className="text-center font-semibold max-w-md mx-auto"
        >
          Stacks Unleashed Bitcoin
        </motion.h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-2 justify-between mt-6 space-y-6 md:space-y-0 p-2">
        <StackCard
          icon={
            <BiTransferAlt
              fill="white"
              size={25}
              className="group-hover:fill-primary"
            />
          }
          title="Proof of transfer"
          description="The consensus mechanism that connects stacks and bitcoin."
        />
        <StackCard
          icon={
            <BsLightningFill
              fill="white"
              size={25}
              className="group-hover:fill-primary"
            />
          }
          title="Bitcoin to NFTs"
          description="NFTs is secured by bitcoin by exploding on the network"
        />
        <StackCard
          icon={
            <BsCurrencyBitcoin
              fill="white"
              size={25}
              className="group-hover:fill-primary"
            />
          }
          title="Bitcoin to DeFi"
          description="Stacks bring DeFi to bitcoin, unlocking over $2 trillion in capital."
        />
      </div>
    </>
  );
}

export default Stacks;
