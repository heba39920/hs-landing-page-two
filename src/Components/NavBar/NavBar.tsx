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
      <div className=" p-[1.5px] bg-transparent md:bg-gradient-to-r from-[var(--primary-color)] via-transparent to-transparent rounded-full">
        <div className="bg-[var(--main-color)] md:px-12  rounded-full">
          <nav
            ref={navRef}
            className={`text-[var(--text-color)] ${scrolled ? "scrolled" : ""}`}
            aria-label="Site navigation"
          >
            <div className="flex md:flex-nowrap flex-wrap items-center justify-between">
              <a aria-label="Site logo" href="/" className="flex gap-[7px] items-center">
                <img src={logo} alt="Site logo" />
                <img src={logoWord} alt="Site wordMark" />
              </a>
              
              <button
                data-collapse-toggle="navbar-default"
                onClick={() => setToggled((t) => !t)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center border border-white rounded-lg md:hidden hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded={toggled}
                aria-label={toggled ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">Toggle navigation</span>
                <Menu aria-hidden="true" />
              </button>

              <div
                id="navbar-default"
                className={`${toggled ? "block" : "hidden"} w-full md:block md:w-auto`}
              >
                <ul className="flex flex-col md:flex-row gap-5 md:bg-transparent p-4 md:p-0 mt-4 md:mt-0 border md:border-0 rounded-lg md:rounded-none md:overflow-visible lg:gap-9">
                  {links.map((link) => (
                    <li key={link.label}>
                      <NavLink
                        to={link.path}
                        className="flex items-center gap-3 font-semibold"
                        aria-label={`${link.label} section`}
                        title={link.label}
                        onClick={handleNavigate}
                      >
                        {link.label}
                        <span className="sr-only">{link.label}</span>
                      </NavLink>
                    </li>
                  ))}

                  <li className="md:hidden ">
                    <div className="mt-2 flex justify-between">
                    <button className="btn bg-[var(--primary-color)] text-[var(--main-color)] px-[15px] py-[10px] rounded-tl-[0] rounded-full text-sm font-bold">
                  Start Now
                </button>
                 <div className="md:hidden items-center gap-6 flex ">
                     <img src={flag} className="h-4 w-6" alt="language switcher" />
                     <Moon />
                  </div>
                    </div>
                  </li>
                
                </ul>
              </div>
  <div className="hidden items-center gap-6 md:flex">
                     <img src={flag} className="h-4 w-6" alt="language switcher" />
                     <Moon />
                  </div>
              {/* Right-side action for larger screens */}
              <div className="hidden md:flex items-center px-2 text-sm md:text-[16px]">
                <button className="btn bg-[var(--primary-color)] text-[var(--main-color)] px-[52.5px] py-[31.5px] rounded-tl-[0] rounded-full text-lg font-bold">
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