import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AnimatedSection = ({ children, animation = variants, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;