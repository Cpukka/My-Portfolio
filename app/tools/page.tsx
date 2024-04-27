import React from 'react';
import figma from './figma.jpeg';
import planet from './planet.jpeg';
import vercel from './vercel.svg';
import vscode from './vs-code.jpeg';
import mongodb from './mongodb.jpeg';
import gitpng from './gitpng.png';
import sqlpng from './sqlpng.png';
import chromepng from './chromepng.png';
import exppng from './exppng.png';
import Image from 'next/image'

const Tools = () => {
  return (
    <div className='w-10/12 mx-auto mb-32 mt-10'>
         <h1 className='md:text-4xl text-2xl lg:text-5xl font-bold'>
        Tools</h1>
      <p className='pt-6 text-nutral 300'>
       The products, Apps and serivces i use on adaily basis for work.
      </p>
      <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='chromepng.png' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Chrome Browser</h1>
                <p className='text-nuetral-400'>
                    Chrome,My daily testing and debbugging web applications browser.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='mongodb.jpeg' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Used MongoDb</h1>
                <p className='text-nuetral-400'>
                    Mongo Db, My daily website database platform.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='vs-code.jpeg' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Visual Studio code</h1>
                <p className='text-nuetral-400'>
                    Used to develop most app.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='figma.jpeg' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Figma</h1>
                <p className='text-nuetral-400'>
                    My choice for design tool.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='gitpng.png' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Git</h1>
                <p className='text-nuetral-400'>
                    Git, My prefered version control.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='vercel.svg' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Vercel</h1>
                <p className='text-nuetral-400'>
                    Vercel, My daily web app deployment platform.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='sqlpng.png' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>SQL</h1>
                <p className='text-nuetral-400'>
                    SQL Db, another website database platform.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='next.png' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Next JS</h1>
                <p className='text-nuetral-400'>
                    Next JS, My best React JS framework for App development.
                </p>
            </div>
        </a>
        <a href='' className='border-[0.5px] border-neutral-500 block rounded-2xl my-6'>
            <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                <img className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src='exppng.png' alt='' />
            </div>
            <div className='p-8 py-10'>
                <h1 className='mb-1 font-bold'>Next JS</h1>
                <p className='text-nuetral-400'>
                    Express JS, My best web server for project.
                </p>
            </div>
        </a>
        
        
      </div>
      
    </div>
  )
}

export default Tools
