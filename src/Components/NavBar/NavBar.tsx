import { Menu, Moon } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { flag, logo, logoWord } from "../../assets/images";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggled, setToggled] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 0);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const handleNavigate = useCallback(() => setToggled(false), []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setToggled(false);
      }
    };

    if (toggled) {
      document.addEventListener("mousedown", onClickOutside);
      return () => document.removeEventListener("mousedown", onClickOutside);
    }
  }, [toggled]);

  const links = [
    { label: "Home", path: "/home" },
    { label: "Workflow", path: "/workflow" },
    { label: "Templates", path: "/templates" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header aria-label="Main navigation">
      <div className=" p-[1.5px] bg-transparent lg:bg-gradient-to-r from-[var(--primary-color)] via-transparent to-transparent rounded-full">
        <div className="bg-[var(--main-color)] lg:px-12  rounded-full">
          <nav
            ref={navRef}
            className={`text-[var(--text-color)] ${scrolled ? "scrolled" : ""}`}
            aria-label="Site navigation"
          >
            <div className="flex lg:flex-nowrap flex-wrap items-center justify-between">
              <a aria-label="Site logo" href="/" className="flex gap-[7px] items-center">
                <img src={logo} alt="Site logo"   loading="lazy"/>
                <img src={logoWord} alt="Site wordMark"   loading="lazy"/>
              </a>
              
              <button
                data-collapse-toggle="navbar-default"
                onClick={() => setToggled((t) => !t)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center border border-white rounded-lg lg:hidden hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded={toggled}
                aria-label={toggled ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">Toggle navigation</span>
                <Menu aria-hidden="true" />
              </button>

              <div
                id="navbar-default"
            className={`transition-all duration-800 ${toggled ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} w-full lg:block lg:w-auto overflow-hidden`}
              >
                <ul className="flex flex-col lg:flex-row gap-5 lg:bg-transparent p-4 lg:p-0 mt-4 lg:mt-0 border lg:border-0 rounded-lg lg:rounded-none lg:overflow-visible lg:gap-9">
                  {links.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        to={link.path}
                        className="flex items-center gap-3 font-semibold hover:text-[var(--primary-color)] transition-transform"
                        aria-label={`${link.label} section`}
                        title={link.label}
                        onClick={handleNavigate}
                      >
                        {link.label}
                        <span className="sr-only">{link.label}</span>
                      </NavLink>
                    </li>
                  ))}

                  <li className="lg:hidden ">
                    <div className="mt-2 flex justify-between">
                    <button className="btn bg-[var(--primary-color)] text-[var(--main-color)] px-[15px] py-[10px] rounded-tl-[0] rounded-full text-sm font-bold">
                  Start Now
                </button>
                 <div className="lg:hidden items-center gap-6 flex ">
                     <img src={flag} className="h-4 w-6" alt="language switcher"   loading="lazy" />
                     <Moon />
                  </div>
                    </div>
                  </li>
                
                </ul>
              </div>
  <div className="hidden items-center gap-6 lg:flex">
                     <img src={flag} className="h-4 w-6 cursor-pointer" alt="language switcher"   loading="lazy"/>
                     <Moon className="cursor-pointer"/>
                  </div>
              {/* Right-side action for larger screens */}
              <div className="hidden lg:flex items-center px-2 text-sm lg:text-[16px]">
                <button 
                type="button"
                className="cursor-pointer bg-[var(--primary-color)] text-[var(--main-color)] px-[52.5px] py-[31.5px] rounded-tl-[0] rounded-full text-lg font-bold hover:scale-105 transition-transform">
                  Start Now
                </button>
              </div>
            
            </div>
            
          </nav>
             
        </div>
      </div>
    </header>
  );
};

export default NavBar;