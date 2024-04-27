import React from 'react'
import {MdDesignServices,MdDataThresholding, MdDeveloperMode} from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
//import {BiLogoGit} from 'react-icons/bi';

type Props={}
const Services = (props: Props) => {
  return (
    <div className=' w-10/12 mx-auto mt-12'> 
    <h1 className='md:text-4xl text-2xl lg:text-5xl font-bold mb-10'>
        Services</h1>
        <div className=' py-5 flex max-md:flex-wrap gap-7 justify-between'>
            <div className='d p-5 relative overflow-hidden mt-5'>
                <h1 className='text-center mt-5'>Frontend Development</h1>
                <div className=' flex justify-center mt-4'>
                    <MdDesignServices className='text-orange-500' size={28} />
                </div>
                <p className='text-center mt-10 text-neutral-300'>
                    <span className='text-xl font-bold text-orange-400'>UI/UX Design</span>
                   <p>Creating amazing user interface using HTML,JavaScript, ReactJS(Refine,Next)</p> 
                </p>
                <p className='text-center mt-10 mb-7'>
                    <a href='/projects' className='px-4 py-2 rounded-sm border-[0.5px] border-[#363638]'>Know More</a>
                    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
                    <span className='w-[20px] h-[20px] z-[-1] blur-[20px] left-[48%] bg-orange-600 absolute top-[27%]'></span>
                    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] left-0 bg-blue-600 absolute bottom-0'></span>
                    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0'></span>
                </p>
                
               
                
            </div>
            <div className='d p-5 relative overflow-hidden mt-5'>
                <h1 className='text-center mt-5'>Backend Development</h1>
                <div className=' flex justify-center mt-4'>
                    <MdDeveloperMode className='text-orange-500' size={28} />
                </div>
                <p className='text-center mt-10 text-neutral-300'>
                    <span className='text-xl font-bold text-orange-400'>Mern Stack</span>
                   <p> Creating amazing server side using MongoDB, Express, Node JS, Python</p>
                </p>
                <p className='text-center mt-10 mb-7'>
                    <a href='/projects' className='px-4 py-2 rounded-sm border-[0.5px] border-[#363638]'>Know More</a>
                    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
                    <span className='w-[20px] h-[20px] z-[-1] blur-[20px] left-[48%] bg-orange-600 absolute top-[27%]'></span>
                    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] left-0 bg-blue-600 absolute bottom-0'></span>
                    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0'></span>
                </p>
                
               
                
            </div>
            <div className='d p-5 relative overflow-hidden mt-5'>
                <h1 className='text-center mt-5'>Data Analysis</h1>
                <div className=' flex justify-center mt-4'>
                    <MdDataThresholding className='text-orange-500' size={28} />
                </div>
                <p className='text-center mt-10 text-neutral-300'>
                    <span className='text-xl font-bold text-orange-400'>Data Analytics Tools</span>
                   <p> Power BI, Tableau,Data Visualisation,Data Mining, Machine Learning,Neutral Nets,AI</p>
                </p>
                <p className='text-center mt-10 mb-7'>
                    <a href='/projects' className='px-4 py-2 rounded-sm border- [0.5px] border-[#363638]'>Know More</a>
                    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
                    <span className='w-[20px] h-[20px] z-[-1] blur-[20px] left-[48%] bg-orange-600 absolute top-[27%]'></span>
                    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] left-0 bg-blue-600 absolute bottom-0'></span>
                    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-green-600 absolute bottom-0'></span>
                </p>
                
               
                
            </div>
        </div>
      
    </div>
  )
}

export default Services
