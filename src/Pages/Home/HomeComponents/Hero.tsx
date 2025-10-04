import { ArrowRight } from "lucide-react";
import { heroImg, organizations } from "../../../assets/images";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const quotes = [
    "Ethical AI.", 1000,
    "Legal framework", 1000,
    "Fiqh-aligned", 1000,
    "Sharia compliance", 1000
  ];

  return (
    <section className="pt-[50px]">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
        
   
        <motion.div
          className="min-w-[300px]"
          initial={{ opacity: 0, x: -100 }}  
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative flex ">
            <h1 className=" text-[45px] md:text-[60px] lg:text-[88px] text-[var(--primary-color)] font-bold capitalize leading-tight">
              <span className="inline-block relative h-[1.2em] ">
                <TypeAnimation
                  sequence={quotes}
                  repeat={Infinity}
                  wrapper="span"
                  speed={50}
                  className="absolute left-0 top-0 "
                />
              </span>
              <span className="text-white block mt-11 md:mt-15 lg:mt-22">
                Embedded.
              </span>
            </h1>
          </div>
          <p className="text-[var(--text-grey)] text-xl md:text-[26px] capitalize max-w-[612px] mt-6">
            A unified, verifiable compliance layer, fiqh-aligned from data to deployment.
          </p>
          <button
            className="mt-[58px] bg-[var(--primary-color)] cursor-pointer flex items-center gap-3 text-[var(--main-color)] py-[19px] px-[49px] rounded-full font-bold md:text-2xl text-lg shadow-lg hover:scale-105 transition-transform"
            aria-label="Get Started"
            type="button"
          >
            Get Started <ArrowRight />
          </button>
        </motion.div>

       
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}   
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <img
            src={heroImg}
            alt="Illustration representing ethical AI"
            loading="lazy"
          />
        </motion.div>
      </div>

    
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <img
          loading="lazy"
          src={organizations}
          alt="Partner organizations"
          className="max-w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;