import { Disclosure } from "@headlessui/react";
import { AuthPage } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MobileMenu from "../molecules/MobileMenu";
import DesktopMenu from "../molecules/DesktopMenu";

const Navbar = () => {
  const { logout, currentUser } = useContext(AuthPage);
  const location = useLocation();
  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (isLoginOrRegisterPage) {
      setOpen(false);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  const handleLink = () => {
    setOpen(false);
  };
  return (
    <Disclosure
      as="nav"
      className="bg-color-light text-color-darkred dark:bg-color-dark dark:text-color-light min-h-[80px] shadow-md"
    >
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-[80px] relative">
          <div className="game flex justify-center gap-4 mt-4">
            <Link className="text-3xl sm:text-4xl lg:text-5xl font-bold" to="/">
              HYPER
              <span className="text-color-brown dark:text-color-darkred">
                GAMES
              </span>
              <p className="text-xs sm:text-sm lg:text-base text-center">
                Where Gamers Meet
              </p>
            </Link>
          </div>
          {!isLoginOrRegisterPage && <MobileMenu />}
          {!isLoginOrRegisterPage && <DesktopMenu />}
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
