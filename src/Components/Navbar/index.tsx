import React, { useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import settingIcon from '../../Assets/Icons/settingsIcon.svg'
import notificationIcon from '../../Assets/Icons/notificationIcon.svg'
import karimImg from '../../Assets/Images/karim.png';

function Navbar() {
    const [profile, setProfile] = useState(false);
    const { pathname } = useLocation();
    const { aID } = useParams();
  return (
    <div className='w-full flex items-center justify-between border-b border-gray-300 mt-4'>
              <p className="navbar-right-title font-semibold ml-16 mb-4">
                            {pathname.split("/")[1] === "Settings" ? (
                                <>
                                Settings
                                <span className="text-gray-400 font-normal">/{aID}</span>
                                </>
                            ) : (
                                pathname.replace("/", "")
                            )}
                            </p>
                            <div className='flex items-center gap-4 mr-16 mb-4'>
                                            <div className='cursor-pointer hover:scale-110'>
                                                <img src={notificationIcon} alt="icon" className='w-5'/>
                                            </div>
                                            <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                                <div className="rounded-full">
                                                    {profile ? (
                                                        <ul className="w-32 border-r bg-white absolute rounded shadow sm:mt-16">
                                                            <li className="ml-2 flex w-full justify-between text-black-600 font-medium cursor-pointer items-center mt-2">
                                                                <div className="flex items-center ">
                                                                        <img src={settingIcon}  alt="this"/>
                                                                    <span className="text-xs ml-2">User Settings</span>
                                                                </div>
                                                            </li>
                                                            <li className="ml-2 flex w-full justify-between text-gray-600  cursor-pointer items-center mt-2 mb-2">
                                                                <div className="flex items-center text-red-500 font-medium">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout ml-1" width={22} height={22} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                                    </svg>
                                                                    <NavLink to="/"><span className="text-xs ml-2">LogOut</span></NavLink>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <div className="relative">
                                                        <img className="rounded-full h-10 w-10 object-cover" src={karimImg} alt="avatar" />
                                                        <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer text-gray-600">
                                                    <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                            </div>
                            </div>
    </div>
  )
}

export default Navbar
