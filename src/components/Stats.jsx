import Button from "./Button";
import stats from "../assets/stats.png";
import { motion, easeIn, spring, animate, useInView } from "motion/react";
import { useRef } from "react";
function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: spring, ease: easeIn, damping: 30 }}
      className="max-w-6xl mx-auto my-32 flex flex-col gap-8 md:gap-2 md:flex-row p-2 justify-between"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="max-w-xs">Stacking, a new way to earn bitcoin</h2>
        <p className="max-w-md text-sm">
          Hold and temporarily lock STX, stacks native currency, and support the
          networks security and consensus. As a rewards, you`ll earn BTC.
        </p>
        <div>
          <Button>Start Stacking</Button>
        </div>
      </div>
      <div className="md:w-[500px]">
        <img src={stats} alt="" />
      </div>
    </motion.div>
  );
}

export default Stats;
