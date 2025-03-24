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
  containerClassName = 'flex flex-row gap-4 items-center align-middle w-3/4 py-10',
  imageClassName = 'mr-10',
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
      <Image
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt}
        src={imagePath}
        className={imageClassName}
      ></Image>
      <div className='flex flex-col gap-1 w-full'>
        <h2 className='text-3xl font-semibold uppercase'>{title}</h2>
        <div className='flex flex-row gap-2 align-middle items-center w-full'>
          <span className='aligne-middle w-[2%] rounded-lg h-[2px] bg-blue-700 '></span>
          <span className='text-gray-500'>{subtitle}</span>
        </div>
        <p className='text-xl text-justify'>{description}</p>

        <div className='flex flex-col gap-4 mt-4'>
          <h1 className='text-xl font-semibold'>Used tools</h1>
          <div className='grid grid-cols-3 gap-2'>
            {tools.map((tool, index) => (
              <span
                key={index}
                className='bg-gray-300 rounded-xl text-center py-2 px-4 text-lg font-semibold'
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
        <div className='flex gap-4 mt-8'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target='_blank'
              className='bg-blue-600 rounded-xl text-center p-2 w-1/3 text-xl text-white font-semibold'
            >
              Code
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHolder;
