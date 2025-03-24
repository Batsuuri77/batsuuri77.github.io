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
  containerClassName = 'h-[150px] flex flex-col items-center justify-between  rounded-2xl p-6',
  imageClassName = 'relative',
  imagePath,
  imageHeight = 50,
  imageWidth = 50,
  imageAlt,
  title,
  titleClassName = 'mt-4 text-xl font-semibold',
}) => {
  return (
    <div className={containerClassName}>
      <div className={imageClassName}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className={titleClassName}>{title}</p>
    </div>
  );
};

export default Technologies;
