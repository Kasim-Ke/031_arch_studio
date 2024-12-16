import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import welcomDektop from "./desktop/image-welcome.jpg";
import { useState } from "react";

const HomeSection = () => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); // Keep triggerOnce true

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Ensure animation triggers only once
    }
  }, [controls, inView, hasAnimated]);

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const secondaryHeadingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { duration: 0.6, delay: i * 0.3 + 0.4 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } },
  };

  return (
    <div
      ref={ref}
      className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] h-full my-[80px] mx-auto"
    >
      <div className="relative lg:w-[1110px] lg:h-[655px] md:w-[581px] md:h-[570px] w-[311px] h-[627px] flex justify-between flex-col items-start mx-auto">
        {/* Large Welcome Heading */}
        <motion.h1
          className="lg:absolute lg:top-[-90px] lg:text-[250px] md:text-[120px] font-bold md:text-[#EEEFF4] md:block hidden z-10"
          variants={headingVariants}
          initial="hidden"
          animate={controls}
        >
          Welcome
        </motion.h1>

        {/* Main Content */}
        <div className="lg:absolute lg:top-[160px] lg:left-[180px] lg:w-[446px] lg:h-[483px] md:h-[411px] h-full flex flex-col mx-auto justify-between">
          <motion.h2
            className="md:text-[72px] md:leading-[64px] text-[48px] leading-[52px] tracking-[-1.71px] font-bold md:tracking-[-2px] md:py-0 py-5 z-20 text-[#1B1D23]"
            variants={secondaryHeadingVariants}
            initial="hidden"
            animate={controls}
          >
            Welcome to Arch Studio
          </motion.h2>

          <motion.div
            className="lg:h-[342px]
          py-5 md:h-[280px] h-full text-[#60636D] flex flex-col justify-between lg:leading-[24px]"
          >
            {[
              "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position deliver exceptional results.",
              " \n",

              "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
              " \n",

              "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony with the surrounding area to create truly stunning projects that will stand the test of time.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.img
          className="object-cover right-0 absolute bottom-0 lg:block hidden"
          src={welcomDektop}
          alt="welcomDektop"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
        />
      </div>
    </div>
  );
};

export default HomeSection;
