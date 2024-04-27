'use client'

import React, { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import Link from 'next/link';

type Props= {}
const Navbar=(props: Props) => {
    const [showNav, setShowNav] = useState<boolean>(true)
  return (
    <div className='flex items-center justify-between
    flex-nowrap w-full pb-0 border-b-2 border-orange-500'>
   
      <div className='sm:text-3xl text-xl font-bold inline-block'>
        <a href='/' className='inline-block'>Chimaobi</a></div>
        <div className='sm:hidden' onClick = {() => setShowNav(!showNav)}><GiHamburgerMenu size={24} />
        </div>
        <nav className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-400 ${showNav ? "top-16 visible": "max-sm:invisible top-0"}`}>
          <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
            <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-32"}`}>
              <Link href='/services' className='whitespace-nowrap px-2'>Services</Link>
            </li>
            <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-32"}`}>
              <Link href='/projects' className='whitespace-nowrap px-2'>Projects</Link>
            </li>
            <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-32"}`}>
              <Link href='/tools' className='whitespace-nowrap px-2'>Tools</Link>
            </li>
            <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0":"max-sm:-translate-x-32"}`}>
              <Link href={'/contact'} className='whitespace-nowrap px-2'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
   
  )
}

export default Navbar;
