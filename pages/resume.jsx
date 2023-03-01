import React from 'react';
import Head from 'next/head';
import { DownloadIcon } from '@heroicons/react/solid';



import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/starlingprofile.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Starling Diaz</h2>
          <div className='flex'>
            <a
              href='linkedin.com/in/starling-diaz-908225181/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/NSTLRD'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        I am a strong, skillful, and self-organized software engineer with 3 years experience of in developing platforms 
        and optimizing existing environments. On financial, medical industries, and management systems.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Front-End Web Developer 
            <span className='px-2'>|</span> Backend Web Developer
            <span className='px-2'>|</span> <strong>HTML</strong> 
            <span className='px-2'>|</span> <strong>CSS</strong>
            <span className='px-2'>|</span> <strong>Javascript</strong>
            <span className='px-2'>|</span> <strong>React</strong>
            <span className='px-2'>|</span> <strong>Next JS</strong>
            <span className='px-2'>|</span> <strong>SQL</strong> 
            <span className='px-2'>|</span> <strong>PL/SQL</strong>
            <span className='px-2'>|</span> <strong>NoSQL</strong>
            <span className='px-2'>|</span> <strong>Redux</strong>
            <span className='px-2'>|</span> <strong>Tailwind</strong>
            <span className='px-2'>|</span> <strong>Spring Boot</strong>
            <span className='px-2'>|</span> <strong>AWS</strong>
            <span className='px-2'>|</span> <strong>Node JS</strong>
            <span className='px-2'>|</span> <strong>Microservices</strong>
            <span className='px-2'>|</span> <strong>RESTAPI</strong> 
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Banco Ademi, Java Backend 
            </span>
            <span className='px-2'>|</span>Santo Domingo, Dominican Republic
          </p>
          <p className='py-1 italic'>November 2022 - Current</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Create API-REST to consume the different systems of the bank   
            </li>
            <li>
                Implement architecture with microservices to migrate the monolith core of the bank and optimize the process.
            </li>
            <li>
               Make query with pl/SQL to optimize the database of oracle
            </li>
            <br></br>
            <p className='italic'>
            <strong>Main tools:</strong> C#, JAVA, SPRING-BOOT, SPRING-MVC,DOCKER, 
            KUBERNETES, MICROSERVICES, PL/SQL, SPRINGCLOUD, ORACLE, AWS, GIT-GITHUB, SCRUM, Dotnet.
            </p>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Freelancer, Full Stack Developer 
            </span>
            <span className='px-2'>|</span>Santo Domingo, Dominican Republic
          </p>
          <p className='py-1 italic'>Ago. 2021 - jun.2022</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Create API-REST to consume in the front end different modules of the SPA.   
            </li>
            <li>
             build website for management by user role and administrator, in which the number of employees and registered users can be printed in PDF.
             TO <strong>Optimize the process in 75%</strong>. 
            </li>
            <li>
            Tested, coded, reviewed, and delivered software with 100% on-time record and according to service level objectives
            </li>
            <li>
            Design and implement new user interface features using <strong>React JS, Redux, and Tailwind CSS</strong>
            </li>
            <br></br>
            <p className='italic'>
            <strong>Main tools:</strong> React,Redux,Tailwind, JAVA, SPRING-BOOT, SPRING-MVC,DOCKER, 
            KUBERNETES, MICROSERVICES, PL/SQL, Nodejs, ORACLE, AWS, GIT-GITHUB, SCRUM, JavaScript.
            </p>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Loteka, Java Backend Developer 
            </span>
            <span className='px-2'>|</span>Santo Domingo, Dominican Republic
          </p>
          <p className='py-1 italic'>ene. 2019 - dic.2021</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Create API-REST to consume in the front end different modules of the SPA.   
            </li>
            <li>
            develop corrections to bugs in the database, create triggers, store-producer, query to automate processes, using sql server, mysql.
            </li>
            <li>
            implement updates to the company website with angular, create api-rest with java spring-boot, with the mvc design pattern to be consumed in the frontend.
            </li>
            <li>
            Tested, coded, reviewed, and delivered software with 100% on-time record and according to service level objectives
            </li>
            <li>
            Design and implement new user interface features using <strong>React JS, Redux, SCSS, Tailwind</strong>
            </li>
            <br></br>
            <p className='italic'>
            <strong>Main tools:</strong> React,Redux,Tailwind, JAVA, SPRING-BOOT, SPRING-MVC,DOCKER, 
            KUBERNETES, MICROSERVICES, PL/SQL, Nodejs, ORACLE, AWS, GIT-GITHUB, SCRUM, JavaScript.
            </p>
          </ul>
        </div>
        <div className='py-6'>
          <a href="https://docs.google.com/document/d/1jrLIm8Tp7ZaFglc9yTWtdCa7JzOCnyKG/edit?usp=sharing&ouid=110647769504236128669&rtpof=true&sd=true" download className="fixed bottom-6 right-6 bg-blue-500 text-white flex items-center justify-center w-12 h-12 rounded-full hover:bg-blue-600">
            <DownloadIcon className="w-6 h-6" />
         </a>
        </div>
      </div>
    </>
  );
};

export default resume;
