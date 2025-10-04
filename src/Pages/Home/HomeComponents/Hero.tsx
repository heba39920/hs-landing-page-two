import { ArrowRight } from "lucide-react";
import { heroImg, organizations } from "../../../assets/images";
import { TypeAnimation } from "react-type-animation";

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
        <div className="min-w-[300px]">
          <div className="relative flex ">
            <h1 className=" text-[45px] md:text-[60px] lg:text-[88px] text-[var(--primary-color)] font-bold capitalize leading-tight">
              <span className="inline-block relative h-[1.2em] "
              
              >
                <TypeAnimation
                  sequence={quotes}
                  repeat={Infinity}
                  wrapper="span"
                  speed={50}
                  className="absolute left-0 top-0 "
                />
              </span>
              <span className="text-white block mt-22">Embedded.</span>
            </h1>
          </div>
          <p className="text-[var(--text-grey)] text-xl md:text-[26px] capitalize max-w-[612px] mt-6">
            A unified, verifiable compliance layer, fiqh‑aligned from data to deployment.
          </p>
          <button
            className="mt-[58px] bg-[var(--primary-color)] flex items-center gap-3 text-[var(--main-color)] py-[19px] px-[49px] rounded-full font-bold md:text-2xl text-lg shadow-lg hover:scale-105 transition-transform"
            aria-label="Get Started"
          >
            Get Started <ArrowRight />
          </button>
        </div>
        <div className=" flex justify-center items-center ">
          <img
            src={heroImg}
            alt="Illustration representing ethical AI"
           
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img
          src={organizations}
          alt="Partner organizations"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;