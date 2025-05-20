import React from 'react';
import Image from 'next/image';

interface ProjectBriefProps {
  containerClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  imagePath: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  titleClassName?: string;
  title?: string;
  titleLink?: string;
  technologies?: string;
  technologiesClassName?: string;
  description?: string;
  descriptionClassName?: string;
  details: string;
  detailsClassName?: string;
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({
  containerClassName = 'flex flex-col gap-4 justify-center items-center',
  imageContainerClassName = 'flex flex-col overflow-hidden items-center justify-center rounded-2xl shadow-2xl lg:w-96 lg:h-80 xl:w-[480px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[480px] bg-white/10 backdrop-blur-2xl backdrop-saturate-150  content-container border border-gray/20 p-6 mb-2 lg:mb-10',
  imagePath,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  titleClassName = 'text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center text-blue-700 target:_blank cursor-pointer',
  titleLink,
  technologies,
  technologiesClassName = 'text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal ',
  description,
  descriptionClassName = 'text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-normal text-justify text-gray-700',
}) => {
  return (
    <div className={containerClassName}>
      <div className={imageContainerClassName}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority={title?.toLowerCase() === 'bookhub'}
          loading={title?.toLowerCase() !== 'bookhub' ? 'lazy' : undefined}
          className='w-full h-auto object-cover rounded-xl'
        />
      </div>
      <a
        className={titleClassName}
        key={titleLink}
        href={titleLink}
        rel='noopener noreferrer'
      >
        {title}
      </a>
      <p className={descriptionClassName}>{description}</p>

      <p className={technologiesClassName}>
        <span className='text-green-600 font-semibold'>
          Used technologies and tools:{' '}
        </span>{' '}
        {technologies}
      </p>
    </div>
  );
};

export default ProjectBrief;
