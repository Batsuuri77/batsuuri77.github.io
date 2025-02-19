import Link from "next/link";
import React from "react";

interface ExperienceItem {
  description: string;
  link?: { href: string; text: string };
}

interface JobExperienceProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  experiences: ExperienceItem[];
}

const JobExperience: React.FC<JobExperienceProps> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  experiences,
}) => {
  const renderDescription = (experience: ExperienceItem, index: number) => {
    if (experience.link) {
      // If the next experience exists, concatenate its description with the current one
      if (experiences[index + 1]) {
        const nextDescription = experiences[index + 1].description;
        return (
          <span>
            {experience.description}{" "}
            <Link
              href={experience.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 cursor-pointer font-semibold"
            >
              {experience.link.text}
            </Link>{" "}
            {nextDescription}
          </span>
        );
      }
      return (
        <span>
          {experience.description}{" "}
          <Link
            href={experience.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 cursor-pointer "
          >
            {experience.link.text}
          </Link>
        </span>
      );
    }
    // If no link, just return the description
    return <span>{experience.description}</span>;
  };
  return (
    <>
      <div className="flex flex-row text-2xl">
        <h1 className=" font-semibold text-gray-800 uppercase">
          {title} ({company})
        </h1>
        <p className="base text-2xl">
          <span className="text-blue-700 font-semibold ml-10 ">{location}</span>
          <span className="ml-10 text-green-600 font-semibold ">
            {startDate} - {endDate}
          </span>
        </p>
      </div>
      <ul className="list-disc ml-10 mt-2 space-y-2">
        {experiences.map((experience, index) => (
          <li className="text-2xl" key={index}>
            {renderDescription(experience, index)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobExperience;
