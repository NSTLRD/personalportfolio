import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
<<<<<<< HEAD
import ecommerceImg from '../public/assets/projects/Ecommerce.jpg';
=======
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
<<<<<<< HEAD
          src={ecommerceImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>The Gissel Store </h2>
          <h3>React JS / Tailwind / AWS Amplify</h3>
=======
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Property Finders</h2>
          <h3>React JS / Tailwind / Firebase</h3>
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
<<<<<<< HEAD
          The following side project I am developing with React JS is hosted on AWS S3. 
          The Users can search for products based on categories, List Products, Make Ratings and reviews, 
          Have Emails for promotions and discounts, and have door-to-door shipping and payments through Stripe, 
          CardNet, Google Pay, and Paypal. You'll be able to see the information on the Product Sheet, 
          as well as the specific location of the shipment of the product or list of products selected in the shopping cart, 
          you can also have tracking of the shipment through integration with the Google Maps API or PedidosYa or UberEat. 
          User authentication is available for you to register and sign-up and sign-in to your email address to save your favorite products. This is possible with AWS Amplify API.
=======
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to save your favorite
            properties. This is made possible with Zillow API.
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
          </p>
          <a
            href='https://github.com/NSTLRD'
            target='_blank'
            rel='noreferrer'
          >
<<<<<<< HEAD
            <button className='px-8 py-2 mt-4 mr-8'>Visited The Website</button>
=======
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
          </a>
          {/*<a
            href='https://property-finder-development.web.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
           </a>*/}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
<<<<<<< HEAD
                <RiRadioButtonFill className='pr-1' /> TailWind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS Amplify
=======
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
<<<<<<< HEAD
                <RiRadioButtonFill className='pr-1' /> Google Pay API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS S3
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Paypal Api
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CardNet Api
=======
                <RiRadioButtonFill className='pr-1' /> Zillow API
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
