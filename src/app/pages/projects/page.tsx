import ProjectHolder from '@/app/components/ProjectHolder';
import { PROJECTS_IMAGE_PATHS } from '@/app/utils/imagePaths';
import React from 'react';

const Projects = () => {
  // function OpenProject(_event: React.MouseEvent<HTMLButtonElement>): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <main className='flex-1 flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col w-[80%]'>
        <section className='pt-28 sm:pt-36 flex flex-col justify-between items-center gap-6 sm:gap-8 w-full text-center'>
          <h1 className='text-7xl font-semibold'>Projects</h1>
          <span className='relative -top-2 w-[10%] rounded-lg h-[3px] bg-blue-700'></span>
          <p className='text-2xl w-3/4 text-center text-gray-500'>
            You can find some projects here that I have completed or are still
            ongoing. Feel free to submit useful feedback or comments on them.
          </p>
        </section>
        {/* Projects */}
        <ProjectHolder
          imagePath={PROJECTS_IMAGE_PATHS.bookhuball}
          imageAlt={'BookHub'}
          imageHeight={500}
          imageWidth={500}
          title='bookhub'
          subtitle='Social media mobile application'
          description='A social media mobile application for book readers to take a book notes, share their thoughts and reviews with others. Manage their reading list and track their reading progress.'
          links={[
            {
              href: 'https://github.com/Batsuuri77/BookHub.git',
              name: 'BookHub',
            },
          ]}
          tools={[
            { name: 'React Native' },
            { name: 'Expo' },
            { name: 'TypeScript' },
            { name: 'Node.js' },
            { name: 'Appwrite' },
            { name: 'Figma' },
            { name: 'Native Wind' },
            { name: 'GitHub' },
          ]}
        />
        <ProjectHolder
          imagePath={PROJECTS_IMAGE_PATHS.sapphire3}
          imageAlt={'Sapphire'}
          imageHeight={500}
          imageWidth={500}
          title='sapphire'
          subtitle='E-commerce website'
          description='E-commerce website for selling souvenier products for Mongolian small business owner. Users can view products, add them to cart, and make a purchase.'
          links={[
            {
              href: 'https://github.com/Batsuuri77/Tseja.git',
              name: 'Sapphire',
            },
          ]}
          tools={[
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Node.js' },
            { name: 'MongoDB' },
            { name: 'Tailwind CSS' },
            { name: 'Figma' },
            { name: 'GitHub' },
          ]}
        />
      </div>
    </main>
  );
};

export default Projects;
