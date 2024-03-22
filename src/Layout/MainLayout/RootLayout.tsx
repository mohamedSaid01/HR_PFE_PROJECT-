import React from 'react'
import Sidebar from './Sidebar'
import Navbar from '../../Components/Navbar'

function RootLayout({children}:any) {
  return (
      <div className='flex'>
        <Sidebar />
        <div className='flex flex-col gap-10 w-full'>
          <Navbar />
          <main className="max-w-5xl flex-1 mx-auto py-5 ml-20 mx-12 w-full">{children}</main>
        </div>

      </div>
  )
}

export default RootLayout
