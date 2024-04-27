import Image from 'next/image'

import Container from './Container'
import Services from './services/page'
import Projects from './projects/page'
import Tools from './tools/page'
import Link from 'next/link'
import Contact from './contact/page'

export default function Home() {
  return (
    <div>
  
   
   <Container />
   <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-9 mb-[-20px]' id='services'>
   </div>
    <Services />
   
   <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-10'>
   
   </div>
   <Projects />
   <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-10'>
   
   </div>
   
   <Tools />
   <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-10'>
   
   </div>
   <Contact />
   
   <div className='w-10/12 mx-auto my-10 text-center'>
  
</div>

   

   </div>
  )
}
