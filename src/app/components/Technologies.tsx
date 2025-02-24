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
}

const Technologies: React.FC<TechnologiesProps> = ({
  containerClassName = 'w-[200px] h-[150px] flex flex-col items-center justify-center border border-gray/20 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-2xl backdrop-saturate-150 p-6',
  imageClassName = 'relative',
  imagePath,
  imageHeight = 50,
  imageWidth = 50,
  imageAlt,
  title,
  titleClassName = 'mt-4 text-xl font-semibold',
  shadowColor = 'rgba(0, 0, 0, 0.2)',
}) => {
  return (
    <div
      className={containerClassName}
      style={{ boxShadow: `0 3px 20px ${shadowColor}` }}
    >
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
