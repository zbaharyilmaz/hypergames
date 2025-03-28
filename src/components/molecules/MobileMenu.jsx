import { Disclosure } from "@headlessui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthPage } from "../../context/AuthContext";

const MobileMenu = () => {
    const { logout, currentUser } = useContext(AuthPage);
    const [open, setOpen] = useState(false);
    const navigate=useNavigate()
    const handleLogout = () => {
        logout();
        setOpen(false);
    }
  return (
    <div className="sm:hidden mt-4 mr-4">
      <Disclosure.Button className="text-color-darkred dark:text-color-yellow focus:outline-none">
        <span className="sr-only">Open menu</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Disclosure.Button>
      <Disclosure.Panel className="sm:hidden">
        {currentUser ? (
          <div className="absolute right-0 z-50 origin-top-right rounded-md bg-color-light py-1 shadow-lg ring-1 ring-color-lightgrey focus:outline-none">
            <span
              className="block px-4 py-2 text-sm text-color-dark hover:bg-color-lightgrey cursor-alias"
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
        ) : (
          <div className="absolute right-0 z-50 origin-top-right rounded-md bg-color-light py-1 shadow-lg ring-1 ring-color-lightgrey focus:outline-none">
            {/* <SwitchButton className="block px-4 py-2 text-sm text-color-dark hover:bg-color-lightgrey" /> */}
            <span
              className="block px-4 py-2 text-sm text-color-dark hover:bg-color-lightgrey"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
            <span
              className="block px-4 py-2 text-sm text-color-dark hover:bg-color-lightgrey"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </div>
        )}
      </Disclosure.Panel>
    </div>
  );
};

export default MobileMenu;
