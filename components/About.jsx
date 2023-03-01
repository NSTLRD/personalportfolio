import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/starlingprofile.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I love the development of Landing Pages,Blog and Ecommerce with JavaScript Framework, especially with <strong>React</strong>  since it is very robust and you can build incredible and scalable SPA.
          </p>
          <p className='py-2 text-gray-600'>
          I have also knowledge in the field of Finacial, Medical industries, and Management Systems this knowledge give me 
          skill to understanding different business and how to solve their problems otherwise I am
          Interested in large projects and I am always looking for new challenges, I have Professional Experiences in Java Framework, such as Spring, Spring Web Services,
          Hibernate, Spring MVC, Spring-boot, Spring-security.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
