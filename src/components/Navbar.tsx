import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = ({ onNavClick, navRefs }: any) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    ref: React.RefObject<HTMLDivElement>,
    to: string
  ) => {
    event.preventDefault();
    onNavClick(ref);
    setCurrentPath(to);
  };

  const navItems = [
    { label: "Home", to: "/", ref: navRefs.homeRef },
    { label: "About", to: "/about", ref: navRefs.aboutRef },
    { label: "Skills", to: "/skills", ref: navRefs.skillsRef },
    { label: "Projects", to: "/projects", ref: navRefs.projectsRef },
    { label: "Contact", to: "/contact", ref: navRefs.contactRef },
  ];

  return (
    <nav className="navbar fixed inset-x-0 flex items-center justify-center z-50">
      <ul className="flex items-center gap-3 md:gap-10 justify-around text-md w-fit mx-auto bg-stone-800 px-2 md:px-4 py-2 rounded-full my-2 box">
        {navItems.map((item) => (
          <li key={item.label} className="flex items-center">
            <a
              href={item.to}
              className={`${
                currentPath === item.to
                  ? "bg-indigo-950 p-2 rounded-2xl"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={(e) => handleNavLinkClick(e, item.ref, item.to)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
