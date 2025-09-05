import { useEffect, useRef, useState } from "react";
import { CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { Link, NavLink } from "react-router";

const styles = {
  iconStyle:
    "h-10 w-10 transition-all duration-300 ease-in-out cursor-pointer hover:text-green-200",
  navLinkStyle:
    "block text-center hover:rounded-2xl hover:bg-linear-to-r hover:from-green-300 hover:to-green-100 hover:text-green-950 active:rounded-2xl active:bg-linear-to-r active:from-green-300 active:to-green-100 active:text-green-950 px-4 py-1 hover:font-semibold active:hover:font-semibold",
};
//  <li>
//             <NavLink className={handleLinkClick} to={"/oil"}>
//               Buy now
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={handleLinkClick} to={"/bag"}>
//               Buy Avoca Tote Bag
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={handleLinkClick} to={"/bundle"}>
//               Avoca Ultimate Bundle
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className={handleLinkClick} to={"/pourer"}>
//               Gold Stainless Steel Pourer
//             </NavLink>
//           </li>
const navLinks = [
  { title: "Buy now", to: "/oil" },
  { title: "Buy Avoca Tote Bag", to: "/bag" },
  { title: "Avoca Ultimate Bundle", to: "/bundle" },
  { title: "Gold Stainless Steel Pourer", to: "/pourer" },
];

function NavBar() {
  const navRef = useRef(null);
  const [isOpen, setIsopen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  function handleMenuClick() {
    setIsopen((open) => !open);
  }
  function handleLinkClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }

    // Optional: handle window resize
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > navHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navHeight]);

  return (
    <div style={{ height: `${navHeight}px` }}>
      <header
        className={`z-50 w-full transition-all duration-300 ease-in-out ${isSticky ? "fixed top-0 bg-green-950/90 shadow-md" : "relative bg-green-900"}`}
      >
        <nav
          ref={navRef}
          className={`grid grid-cols-3 items-center px-2 py-4 text-green-50`}
        >
          <Link to={"/"}>
            <img
              onClick={handleLinkClick}
              src="logos/logo-light.avif"
              alt="company-logo"
              className="col-start-2 row-start-1 h-5 place-self-center lg:col-start-1 lg:h-auto lg:w-auto lg:justify-self-start"
            />
          </Link>
          <div
            onClick={handleMenuClick}
            className="col-start-1 row-start-1 justify-self-start lg:hidden"
          >
            <CiMenuBurger
              className={`${!isOpen ? styles.iconStyle : "hidden"} hover:scale-105`}
            />

            <TfiClose
              className={`${isOpen ? styles.iconStyle : "hidden"} hover:rotate-180`}
            />
          </div>

          <ul className="hidden gap-3.5 justify-self-center font-semibold whitespace-nowrap md:text-sm lg:flex lg:justify-self-start lg:text-lg">
            {navLinks.map((el) => {
              return (
                <li>
                  <NavLink onClick={handleLinkClick} to={el.to}>
                    {el.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <CiShoppingCart
            className={`${styles.iconStyle} col-start-3 row-start-1 justify-self-end hover:scale-105`}
          />
        </nav>

        {/* <h1
        className={`relative top-[calc(${navHeight}-100vh)] w-[50dvw] bg-red-600 text-black`}
        >
        HI
        </h1> */}
        <div
          style={{ height: `calc(100dvh - ${navHeight}px)` }}
          className={`absolute top-[${navHeight}px] ${isOpen ? "block translate-x-0 border-t-[1px] border-t-gray-400 opacity-100" : "-translate-x-full opacity-0"} z-50 flex w-[100dvw] items-center justify-center bg-green-800 text-green-50 transition-all duration-300 ease-in-out sm:w-[50dvw]`}
        >
          <ul onClick={handleMenuClick} className={`space-y-2 sm:space-y-4`}>
            {navLinks.map((el) => {
              return (
                <li>
                  <NavLink
                    className={styles.navLinkStyle}
                    onClick={handleLinkClick}
                    to={el.to}
                  >
                    {el.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
