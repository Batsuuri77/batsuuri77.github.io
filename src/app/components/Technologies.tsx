import React from "react";
import Image from "next/image";

interface TechnologiesProps {
  containerClassName?: string;
  imageClassName?: string;
  imagePath: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  titleClassName?: string;
}

const Technologies: React.FC<TechnologiesProps> = ({
  containerClassName = "w-[260px] h-[200px] flex flex-col items-center justify-center border border-gray/20 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-2xl backdrop-saturate-150 p-6",
  imageClassName = "relative w-[100px] h-[100px]",
  imagePath,
  imageHeight = 100,
  imageWidth = 100,
  imageAlt,
  title,
  titleClassName = "mt-4 text-2xl font-semibold",
}) => {
  return (
    <div className={containerClassName}>
      <div className={imageClassName}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className={titleClassName}>{title}</p>
    </div>
  );
};

export default Technologies;
