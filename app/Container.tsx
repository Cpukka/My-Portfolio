import React from 'react';
import man from './man.jpg';
import {AiOutlineGithub } from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai'

type Props = {}

const Container = (props: Props) => {
    return (
        <div className='lg:pt-16 pt-4 relative w-10/12 mx-auto'>
            <div className='md:flex items-center justify-between flex-row-reverse'>
                <div className='flex justify-end items-end max-md:pt-4'>
                    <div
                        className='relative'>
                        <img className='w-80 border-[10px] border-orange-500 rounded-lg h-auto transform scale-x-100' width={600}src='man.jpg' alt='me' />
                        <div className='w-[60%] overflow-hidden h-[70%] z-[-1] top-[10%] left-[20%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 absolute'>

                        </div>
                    </div>
                </div>
                <div className='p-4 pl-0 mt-5 sm:mt-20'>

                    <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>Hello!</p>
                    <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6'>
                        I&apos;m Chimaobi
                        <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'>
                            A Front-End Developer
                        </p>
                    </h1>
                    <p className='text-base text-orange-400 sm:text-xl md:text-base lg:text-xl xl:text-2xl lg:pt-6'>
                        Bringing imagination to software solution!
                    </p>
                    <div className='flex items-center mt-6 md:mt-14'>
                        <ul className='flex flex-center space-x-2 sm:space-x-5 mr-6 my-4'>
                            <li><a href='https://github.com/Cpukka' className='hover:opacity-100 opacity-75 transition-none ease-in duration-150'>< AiOutlineGithub size={25}/></a></li>
                            <li><a href='https://www.linkedin.com/in/chimaobi-uboegbu-401ba27a/' className='hover:opacity-100 opacity-75 transition ease-in duration-150'>< AiOutlineLinkedin size={25}/></a></li>
                        </ul>
                        <a href ='mailto:chimaobiu@yahoo.com' className='px-4 py-[5px] whitespace-nowrap transition ease-in
                        duration-150 bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5px] border-orange-400'>
                            Email me
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Container
