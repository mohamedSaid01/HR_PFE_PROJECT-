import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SubMenu from "./SubMenu";
import { SlSettings } from "react-icons/sl";
import dashboard from "../../../Assets/Icons/dashboardIcon.svg";
import mySpace from "../../../Assets/Icons/mySpaceIcon.svg";
import employee from "../../../Assets/Icons/employeeIcons.svg";
import leaves from "../../../Assets/Icons/leavesIcon.svg";
import logOut from "../../../Assets/Icons/logOutIcon.svg";
import leavemetryImage from "../../../Assets/Images/logo.svg";
import { IoIosArrowBack } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size: number }>;
  menus?: string[];
}

function Sidebar(): JSX.Element {
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }    
    : {
        open: {
          width: "15rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "5rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList: MenuItem[] = [
    {
      name: "Settings",
      icon: SlSettings,
      menus: ["Department", "Holidays", "Leave Settings", "User Settings"],
    },
  ];

  return (
    <div className="">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
            h-screen"
      >
        <div className="flex flex-col gap-60">
        <div className="flex flex-col gap-10">
        <div className="flex items-center justify-center mt-12">
          <img src={leavemetryImage} width={130} alt="thisLogoLeavemetry" />
        </div>
        <div className="flex flex-col h-full ">
          <ul className="whitespace-pre px-4 text-[0.9rem] flex flex-col  gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/dashboard"} className="link text-gray-600">
                <img src={dashboard} className="w-5" alt="Dashboard" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/myspace"} className="link text-gray-600">
                <img src={mySpace} className="w-5" alt="My Space" />
                My Space
              </NavLink>
            </li>
            <li>
              <NavLink to={"/employee"} className="link text-gray-600">
                <img src={employee} className="w-5" alt="Employees" />
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink to={"/leaves"} className="link text-gray-600">
                <img src={leaves} className="w-5" alt="Leaves" />
                Leaves
              </NavLink>
            </li>
            {(open || isTabletMid) && (
              <div>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
          </ul>
        </div>
        </div>
        {open && (
            <div className="absolute bottom-4">
              <div className="p-4 m-5 text-red-500">
                <NavLink to={"/"} className="link text-gra6-500">
                <img src={logOut} className="min-w-max" alt="Leaves" />
                <p>Log out</p>
              </NavLink>
              </div>
            </div>
          )}
          </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
}

export default Sidebar;
