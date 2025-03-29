import { useContext, useState } from "react";
import { AuthPage } from "../../context/AuthContext";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import SwitchButton from "../atoms/SwitchButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DesktopMenu = () => {
  const { logout, currentUser } = useContext(AuthPage);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  return (
    <div className="hidden sm:flex items-center gap-2">
         <SwitchButton className="hidden sm:flex" />
      {currentUser ? (
        <div className="absolute inset-y-0 left-0 items-center mr-2 sm:static sm:inset-auto flex gap-1 mt-4">
          <h5 className="bg-color-cream dark:bg-color-anthracite text-[0.7rem] text-color-darkred p-2 mt-2 rounded-full shadow-sm">
            {currentUser?.displayName}
          </h5>
          <Menu>
            <div className="mt-2">
              <MenuButton className="relative flex rounded-full  text-sm focus:outline-none">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Avatar src={currentUser?.photoURL || Avatar} />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 top-20 z-50 mt-2 origin-top-right rounded-md bg-color-yellow py-1 shadow-lg ring-1 ring-color-orange transition focus:outline-none"
              >
                <MenuItem>
                  <span
                    className="block px-4 py-2 text-sm text-color-dark cursor-alias"
                    onClick={handleLogout}
                  >
                    Logout
                  </span>
                </MenuItem>
              </MenuItems>
            </div>
          </Menu>
        </div>
      ) : (
        <div className="flex gap-2 overflow-x-auto md:w-auto custom-scrollbar my-4">
          <Link
            to="/register"
            className="mt-8 px-4 py-2 text-sm  border-color-anthracite border-[2px] bg-color-yellow text-white rounded-md hover:bg-color-lightgrey"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="mt-8 px-4 py-2 text-sm bg-color-yellow  border-color-anthracite border-[2px] text-white rounded-md hover:bg-color-lightgrey"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
