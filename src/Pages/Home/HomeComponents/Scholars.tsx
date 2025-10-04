import { ChevronRight } from "lucide-react";
import { bgBlue, scholars } from "../../../assets/images";
import {motion} from "framer-motion";
const Scholars = () => {
  return (
    <section className="py-24 " aria-label="Scholars section">      
      <article className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-8">
            <motion.div
          initial={{ opacity: 0, x: -100 }}  
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} className="flex justify-center md:justify-end">
            <img
              src={scholars}
              alt="A group of scholars"
              loading="lazy"
              className="max-w-full h-auto rounded-md shadow-md"
            />
          </motion.div>

       
          <motion.div
          initial={{ opacity: 0, x: 100 }}  
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} className="space-y-5 ">
         
 <img src={bgBlue} alt="background" className="absolute right-0"/>
            
            <span
              className="text-[var(--text-purple)] text-xs md:text-2xl font-semibold block mb-4"
              aria-label="Section label"
            >
              ONE ENGINE
            </span>

            <h2 className="md:text-4xl lg:text-[58px] text-3xl font-semibold max-w-[589px] leading-tight">
              Scholar Precision. Enterprise Speed. One Engine
            </h2>

            <p className="mt-0 mb-9 text-lg md:text-xl lg:text-3xl text-[var(--text-grey)] max-w-[587px]">
              Whether you’re startup shipping fast or an enterprise optimizing
              processes, Shariabase gives you a scholar-grade. Shariah + Legal
              brain inside your product stack.
            </p>

            <button
              className="flex items-center gap-3 text-[var(--text-purple)] text-ms md:text-[28px] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--ring-color, rgba(0,0,0,0.1))]"
              aria-label="Check Us Now"
            >
              Check Us Now <ChevronRight />
            </button>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default Scholars;