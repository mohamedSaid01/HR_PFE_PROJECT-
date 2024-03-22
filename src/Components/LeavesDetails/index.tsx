import React, { useState } from 'react'
import sickIcon from '../../Assets/Icons/sickIcon.svg';
import sunIcon from '../../Assets/Icons/sunIcon.svg';
import infoTriangleIcon from '../../Assets/Icons/infoTriangleIcon.svg';
import karimImg from '../../Assets/Images/karim.png';

function LeavesDetails() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index:any) => {
        setActiveItem(index);
    };
  return (
    <div className='flex flex-col gap-16'>
        <div className='ml-10'>
            <ul className='flex gap-24 text-sm font-normal text-gray-500'>
                    <li className={`cursor-pointer ${activeItem === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 hover:border-b-2 hover:border-blue-600'}`} onClick={() => handleItemClick(1)}>Waiting for approval</li>
                    <li className={`cursor-pointer ${activeItem === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 hover:border-b-2 hover:border-blue-600'}`} onClick={() => handleItemClick(2)}>Approved</li>
                    <li className={`cursor-pointer ${activeItem === 3 ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 hover:border-b-2 hover:border-blue-600'}`} onClick={() => handleItemClick(3)}>Rejected</li>
            </ul>
        </div>
        <div className=''>
        <table className="w-full text-xs text-left rtl:text-right">
        <thead className='flex-grow' >
            <tr className="border-b border-gray-300">
                <th scope="col" className="px-6 py-3 font-normal text-gray-500">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 font-normal text-gray-500">
                    From - TO
                </th>
                <th scope="col" className="px-6 py-3 font-normal text-gray-500">
                   Type
                </th>
                <th scope="col" className="px-6 py-3 font-normal text-gray-500">
                   Status
                </th>
            </tr>
        </thead>
        <tbody className='flex-grow'>
            <tr className="border-b border-gray-300">
                <th scope="row" className="flex items-center gap-2 px-5 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={karimImg} alt="Jese image" />
                    <div className="">
                        <div className="text-black text-sm font-medium">Karim Benmbarek</div>
                        <div className="font-light text-gray-500">UX/UI Designer</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                15 Jan - 20 Jan
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                      <div className={'w-8 h-8 rounded-full flex justify-center items-center bg-red-100'}>
                        <img src={sickIcon} alt="this icon" className='w-4' />
                      </div>
                        <p className='font-medium text-xs text-red-500'>Sick Leave</p>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="font-medium text-yellow-400">Waiting for HR approval</p>
                </td>
            </tr>
            <tr className="border-b border-gray-300">
                <th scope="row" className="flex items-center gap-2 px-5 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={karimImg} alt="Jese image" />
                    <div className="">
                        <div className="text-black text-sm font-medium">Chance Mango</div>
                        <div className="font-light text-gray-500">Marketer</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                15 Jan - 20 Jan
                </td>
                <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                      <div className={'w-8 h-8 rounded-full flex justify-center items-center bg-orange-100'}>
                        <img src={sunIcon} alt="this icon" className='w-4' />
                      </div>
                        <p className='font-medium text-xs text-orange-400'>Vacation Leave</p>
                    </div>
                </td>
                <td className="px-6 py-4">
                        <p className="font-medium text-yellow-400">Waiting for HR approval</p>
                </td>
            </tr>
            <tr className="border-b border-gray-300">
                <th scope="row" className="flex items-center gap-2 px-5 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={karimImg} alt="Jese image" />
                    <div className="">
                        <div className="text-black text-sm font-medium">Gretchen Geidt</div>
                        <div className="font-light text-gray-500">Graphic Designer</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                15 Jan - 20 Jan
                </td>
                <td className="px-6 py-4">
                <div className="flex items-center gap-1">
                      <div className={'w-8 h-8 rounded-full flex justify-center items-center bg-purple-200'}>
                        <img src={infoTriangleIcon} alt="this icon" className='w-4' />
                      </div>
                        <p className='font-medium text-xs text-purple-500'>Casual Leave</p>
                    </div>
                </td>
                <td className="px-6 py-4">
                        <p className="font-medium text-yellow-400">Waiting for HR approval</p>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
    </div>
  )
}

export default LeavesDetails
   