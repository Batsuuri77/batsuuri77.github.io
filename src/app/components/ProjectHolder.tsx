'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ProjectHolderProps {
  containerClassName?: string;
  imageClassName?: string;
  imagePath: string;
  imageAlt: string;
  imageHeight?: number;
  imageWidth?: number;
  title?: string;
  subtitle?: string;
  description?: string;
  links: { name: string; href: string }[];
  tools: { name: string }[];
}

const ProjectHolder: React.FC<ProjectHolderProps> = ({
  containerClassName = 'flex flex-col xl:flex-row gap-1 2xl:gap-4 items-center align-middle  py-5 2xl:py-10',
  imageClassName = 'xl:mr-10',
  imageAlt,
  imageHeight,
  imageWidth,
  imagePath,
  title,
  subtitle,
  description,
  links = [],
  tools = [],
}) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={containerClassName}>
      <div className='flex justify-center items-center'>
        <Image
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          src={imagePath}
          className={imageClassName}
        ></Image>
      </div>
      <div className='flex flex-col w-full justify-center items-center 2xl:w-3/4'>
        <div className='flex flex-col gap-1 w-full justify-center items-center text-center'>
          <h2 className='text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl font-semibold uppercase mt-3'>
            {title}
          </h2>
          <div className='flex flex-row gap-2 align-middle items-center w-full justify-center mb-2 sm:mb-3'>
            <span className='aligne-middle w-[2%] rounded-lg h-[2px] bg-blue-700 '></span>
            <span className='text-gray-500 text-base md:text-base lg:text-xl 2xl:text-2xl'>
              {subtitle}
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-1 w-full justify-center items-center mt-3'>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-justify'>
            {description}
          </p>
          <div className='flex flex-col w-full gap-2 2xl:gap-4 mt-4'>
            <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
              Used tools
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-2 2xl:gap-4'>
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className='bg-gray-300 rounded-xl text-center py-1 sm:py-2 2xl:py-2 2xl:px-4 text-sm sm:text-base lg:text-lg 2xl:text-xl font-semibold'
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
          <div className='flex gap-4 mt-4 sm:mt-6 2xl:mt-8'>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                className='bg-blue-600 rounded-xl text-center py-1 2xl:py-2 px-8 text-sm sm:text-base lg:text-xl 2xl:text-xl text-white font-semibold'
              >
                Code
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHolder;
