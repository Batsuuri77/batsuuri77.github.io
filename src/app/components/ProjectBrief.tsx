import React from "react";
import Image from "next/image";

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
  technologies?: string;
  technologiesClassName?: string;
  description?: string;
  descriptionClassName?: string;
  details: string;
  detailsClassName?: string;
}

const ProjectBrief: React.FC<ProjectBriefProps> = ({
  containerClassName = "flex flex-col gap-4 justify-center items-center",
  imageContainerClassName = "flex flex-col gap-4 overflow-hidden items-center justify-center rounded-2xl shadow-2xl bg-white/10 backdrop-blur-2xl backdrop-saturate-150  content-container border border-gray/20 p-6 mb-10",
  imagePath,
  imageAlt,
  imageHeight = 600,
  imageWidth = 600,
  title,
  titleClassName = "text-4xl font-semibold text-center text-blue-700",
  technologies,
  technologiesClassName = "text-xl font-normal",
  description,
  descriptionClassName = "text-lg font-normal",
}) => {
  return (
    <div className={containerClassName}>
      <div className={imageContainerClassName}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <h2 className={titleClassName}>{title}</h2>
      <p className={technologiesClassName}>
        <span className="text-green-600 font-semibold">
          Used technologies and tools:{" "}
        </span>{" "}
        {technologies}
      </p>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
};

export default ProjectBrief;
