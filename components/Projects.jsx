
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import tindogImg from '../public/assets/projects/tindog.webp';
import keeperImg from '../public/assets/projects/keeper.webp';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#BB6464]'>
          Projects
        </p>
        <h2 className='py-4'>Bootcamp - What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Keeper Note Taker'
            backgroundImg={keeperImg}
            projectUrl='/keeper'
          />
          <ProjectItem
            title='Tindog Dating Website'
            backgroundImg={tindogImg}
            projectUrl='/tindog'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;