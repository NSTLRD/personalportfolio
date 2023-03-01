import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
<<<<<<< HEAD
import ecommerceImg from '../public/assets/projects/Ecommerce.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import LearnImg from '../public/assets/projects/Learn.png';
=======
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
<<<<<<< HEAD
            title='The Gissel Store'
            backgroundImg={ecommerceImg}
=======
            title='Property Finder'
            backgroundImg={propertyImg}
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
<<<<<<< HEAD
            title='E-learning App'
            backgroundImg={LearnImg}
=======
            title='Crypto App'
            backgroundImg={cryptoImg}
>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
<<<<<<< HEAD
=======

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

>>>>>>> bc04acab2c7b1e62a5a1e2fd9830f1b52fe8baa8
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
