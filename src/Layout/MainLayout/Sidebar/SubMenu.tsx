import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

interface MenuItem {
  name: string;
  icon: React.ComponentType<{ size: number }>;
  menus?: string[];
}

interface SubMenuProps {
  data: MenuItem;
}

function SubMenu({ data }: SubMenuProps): JSX.Element {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div>
      <li
        className={`link ${pathname.includes(data.name) && 'bg-gray-200 text-black'}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {<data.icon size={23} />}
        <p className="flex-1 capitalize ">{data.name}</p>
        <IoIosArrowDown className={`${subMenuOpen && 'rotate-180'} duration-200`} />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
      >
        {data.menus?.map((menu: string) => (
          <li key={menu}>
            <NavLink to={`/${data.name}/${menu}`} className="link !bg-transparent capitalize">
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default SubMenu;
