import React from 'react';
import Image from 'next/image';

interface TechnologiesProps {
  containerClassName?: string;
  imageClassName?: string;
  imagePath: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  titleClassName?: string;
  shadowColor?: string;
  borderColor?: string;
}

const Technologies: React.FC<TechnologiesProps> = ({
  containerClassName = 'h-[100px] 2xl:h-[150px] flex flex-col items-center justify-center rounded-2xl gap-4',
  imageClassName = 'flex items-center justify-center w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[55px] 2xl:w-[60px] 2xl:h-[60px]',
  imagePath,
  imageAlt,
  title,
  titleClassName = 'text-lg sm:text-xl lg:text-xl 2xl:text-3xl font-semibold',
}) => {
  return (
    <div className={containerClassName}>
      <div className={imageClassName}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={100} // Default size
          height={100} // Default size
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className={titleClassName}>{title}</p>
    </div>
  );
};

export default Technologies;
