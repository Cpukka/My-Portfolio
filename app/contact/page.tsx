import React from 'react';
import {SlCallIn} from 'react-icons/sl'
const Contact = () => {
  return (
    <div className='w-10/12 mx-auto mt-12'>
      <h1 className='md:text-4xl text-2xl lg:text-5xl font-bold mb-10'>
        Contact
      </h1>
      <div className='p-5 relative overflow-hidden mt-5'>
        <h1 className='text-center mt-5'>Contact me</h1>
        <p className='text-center mt-10 text-neutral-300'>
          If you have any questions or inquiries, feel free to reach out to us.
        </p>
        <p className='text-center mt-10 mb-7'>
          <a
            href='mailto:chimaobiu@yahoo.com'
            className='px-4 py-2 bg-orange-500 rounded-sm border-[1.5px] border-[#363638]'
          >
            Email me 
            
          </a>
          <br></br>
          <p><SlCallIn size={18}/>+234 8035950927</p>
        </p>
      </div>
    </div>
  );
};

export default Contact;
