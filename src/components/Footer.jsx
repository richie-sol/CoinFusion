import React from "react";
import { motion, easeIn, spring, animate, useInView } from "motion/react";
import { useRef } from "react";
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variant = {
    inactive: {
      opacity: 0,
      y: 100,
    },
    active: {
      opacity: 1,
      y: 0,
      transition: {
        type: spring,
        ease: easeIn,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };
  const stacks = [
    "Wallets",
    "Docs",
    "Get GXT",
    "Apps",
    "Learning resources",
    "Eco System",
    "Event",
    "Blog",
    "Resources",
    "Videos Learning",
    "Ethereum Learning",
    "Smart contract",
    "NFTs",
  ];
  return (
    <div className="bg-black py-6 font-sans px-4 rounded-t-2xl mt-10">
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-white">Explore Stacks</h2>
        <motion.div
          ref={ref}
          variants={variant}
          animate={isInView ? "active" : "inactive"}
          className="flex flex-wrap gap-4 my-10"
        >
          {stacks.map((stack, index) => {
            return (
              <a
                href=""
                key={index}
                className="px-4 hover:bg-primary transition duration-200 cursor-pointer py-2 border-slate-50 border-[1px] rounded-full text-white"
              >
                {stack}
              </a>
            );
          })}
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-primary font-bold">CoinFusion</p>
        <p className="text-white text-xs">
          Terms & Conditions | Sitemap | Privacy Policy | Cookies Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
