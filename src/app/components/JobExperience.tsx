import Link from 'next/link';
import React from 'react';

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
  let skipNext = false;

  return (
    <>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex flex-col justify-center items-center xl:flex-row lg:items-start xl:justify-start w-full text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl'>
          <h1 className='font-semibold text-gray-800 uppercase'>
            {title} ({company})
          </h1>
          <p className='base-text'>
            <span className='text-blue-700 font-semibold xl:ml-10'>
              {location}
            </span>
            <span className='lg:ml-10 text-green-600 font-semibold'>
              {startDate} - {endDate}
            </span>
          </p>
        </div>
        <ul className=' list-disc pl-4 mt-2 space-y-2'>
          {experiences.map((experience, index) => {
            if (skipNext) {
              skipNext = false;
              return null;
            }

            if (experience.link && experiences[index + 1]) {
              const nextExperience = experiences[index + 1];

              skipNext = true;

              return (
                <li
                  className='text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify'
                  key={index}
                >
                  {experience.description}{' '}
                  <Link
                    href={experience.link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-700 cursor-pointer font-semibold'
                  >
                    {experience.link.text}
                  </Link>{' '}
                  {nextExperience.description}
                </li>
              );
            }

            return (
              <li
                className='text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify '
                key={index}
              >
                {experience.description}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default JobExperience;
