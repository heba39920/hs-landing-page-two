import { ChevronRight } from "lucide-react";
import { scholars } from "../../../assets/images";

const Scholars = () => {
  return (
    <section className="py-24">
      <div className="flex justify-center items-center md:flex-nowrap flex-wrap">
        <div>
          <img src={scholars} alt="scholars" />
        </div>
        <div>
          <span className="text-[var(--text-purple)] text-xs md:text-2xl font-semibold mb-[46px]">
            ONE ENGINE
          </span>
          <h2 className="md:text-4xl lg:text-[58px] text-3xl font-semibold max-w-[589px]">
            Scholar Precision. Enterprise Speed. One Engine
          </h2>
          <p className="mt-9 mb-[76px] text-lg md:text-xl lg:text-3xl text-[var(--text-grey)] max-w-[587px]">
            Whether you’re startup shipping fast or an enterprise optimizing
            processes, Shariabase gives you a scholar-grade. Shariah + Legal
            brain inside your product stack.
          </p>
          <button className="flex gap-3 items-center text-[var(--text-purple)] text-ms md:text-[28px] font-semibold">
            Check Us Now <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Scholars;
