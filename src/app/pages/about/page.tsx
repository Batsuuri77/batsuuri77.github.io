import React from 'react';
import Image from 'next/image';
import JobExperience from '../../components/JobExperience';
import BinaryMeter from '../../components/BinaryMeter';
import ProjectBrief from '../../components/ProjectBrief';
import { PRO_PATH, PROJECTS_IMAGE_PATHS } from '@/app/utils/imagePaths';

const About = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center sm:p-10 md:p-20 lg:p-52'>
      {/*Content container*/}
      <div className='flex flex-col justify-between items-start gap-4 p-4 w-full'>
        {/* Bio section */}
        <div className='flex flex-row justify-between w-full gap-8 py-24'>
          {/* Text Section */}
          <div className='flex flex-col justify-between items-start gap-4 max-w-6xl'>
            <h1 className='text-8xl font-semibold'>G&apos;DAY MATES! 👋</h1>
            <p className='text-2xl'>
              I am <span className='font-bold'>BATSUURI BATTSOOJ</span>, a
              formal Business Development Manager who turned into a passionate
              front-end developer settled in Melbourne, Australia 🙂.
              <br />
              <br />
              <span>I was born and raised in Mongolia.</span>
              <br />
              <br />
              <span>
                I began my coding journey as a self-learner, and later enhanced
                my academic knowledge by earning a{' '}
                <span className='text-green-600 font-bold'>Master of IT</span>{' '}
                degree in mobile application development from Central Queensland
                University (CQU), graduated in November 2024 . I specialize in
                building modern, interactive web and mobile applications using
                JavaScript-based libraries and frameworks such as{' '}
                <span className='text-[#5fbfd3] font-bold'>React</span>,{' '}
                <span className='font-bold'>Next.js</span>, and{' '}
                <span className='text-[#5fbfd3] font-bold'>React Native</span>.
                My artistic sense is expressed through{' '}
                <span className='text-[#264ee5] font-bold'>CSS</span> and{' '}
                <span className='text-[#5fbfd3] font-bold'>Tailwind CSS</span>,
                while my attention to detail is demonstrated in back-end
                development with{' '}
                <span className='text-[#6bb454] font-bold'>Node.js</span>,{' '}
                <span className='text-[#fe9900] font-bold'>AWS</span>, and{' '}
                <span className='text-[#011f30] font-bold'>MongoDB</span>.
              </span>
            </p>
            {/* BinaryMeter */}
            <div>
              <BinaryMeter
                containerClassName='flex space-x-4 text-9xl font-bold'
                digitClassName='w-24 h-24 flex text-gray-400 items-center justify-center rounded overflow-hidden'
                binaryNumber='1001101'
              ></BinaryMeter>
            </div>
            {/* <span className="absolute top-[435px] left-[545px] bg-white drop-shadow-lg border-2 w-40 h-10 text-center cursor-pointer pt-1 rounded-l-full">
              reveal me
            </span> */}
            {/*Mongolia gedeg ugiig sticky paper-n tsaana nuuh, tegeed left mouse daranguut huulagdaad dahiad daranguut butsaad haagddag baih*/}
          </div>

          {/* Image section */}
          <div className='flex flex-col justify-center items-center gap-8'>
            <div className='flex-shrink-0 w-52 h-64 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-[483px] lg:h-[513px] overflow-hidden drop-shadow-2xl rounded-2xl'>
              <Image
                src={PRO_PATH.pro}
                alt="Batsuuri's profile 1.06"
                layout='responsive'
                objectFit='cover'
                width={483}
                height={513}
              />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-4xl mb-2'>FIND ME ON 👇</h1>
                <a
                  href='mailto: batsuuri2146@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row justify-between gap-4 text-2xl'
                >
                  batsuuri2146@gmail.com
                </a>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 py-4'>
                <div className='flex flex-row justify-between gap-x-8 text-2xl'>
                  <a
                    href='https://www.facebook.com/kalu.ulak.77'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={'/Images/social/Facebook.png'}
                      alt={'facebook'}
                      width={60}
                      height={60}
                    ></Image>
                  </a>
                  <a
                    href='https://www.instagram.com/batsuuri_77/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={'/Images/social/Instagram.png'}
                      alt={'instagram'}
                      width={60}
                      height={60}
                    ></Image>
                  </a>
                  <a
                    href='https://github.com/Batsuuri77'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={'/Images/social/GitHub.png'}
                      alt={'github'}
                      width={60}
                      height={60}
                    ></Image>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/batsuuri-battsooj-b27231b8/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src={'/Images/social/Linkedin.png'}
                      alt={'linkedin'}
                      width={60}
                      height={60}
                    ></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IceBreaker */}
        <div className='flex flex-col justify-between items-start gap-10 mt-8'>
          <div>
            <h1 className='text-3xl font-semibold mb-2'>ICEBREAKER FACTS</h1>
            <p className='text-2xl'>
              - I have been living in Melbourne since 2023. <br />
              - I had been artistic gymnast for 7 years since 9 years old and I
              am an international judge of men&apos;s artistic gymnastics since
              2018.
              <br />- I have been financial analyst, business development
              manager, and project manager in Mongolian group company. <br />
            </p>
          </div>

          {/* Education */}
          <div>
            <h1 className='text-3xl font-semibold mb-2'>EDUCATION</h1>
            <ul>
              <li className='mt-2'>
                <h3 className='text-2xl font-semibold text-gray-800'>
                  Master of IT (Mobile app development)
                </h3>
                <p className='text-2xl'>
                  Central Queensland University (CQU){' '}
                  <span className='ml-10 text-green-600 font-semibold'>
                    03.2023 - 11.2024
                  </span>
                  {/* <span className="ml-10">
                    GPA: <span className=" text-blue-700">5.37 out of 7</span>
                  </span> */}
                </p>
              </li>
              <li>
                <br />
                <span className='text-2xl font-semibold text-gray-800'>
                  Bachelor of economics and business administration
                </span>
                <p className='text-2xl'>
                  Mongolina National University (MNU){' '}
                  <span className='ml-10 text-green-600 font-semibold'>
                    09.2014 - 05.2018
                  </span>
                  {/* <span className="ml-10">
                    GPA: <span className="text-blue-700">3.5 out of 4</span>
                  </span> */}
                </p>
              </li>
            </ul>
          </div>

          {/* Work Experience */}
          <div>
            <h1 className='text-3xl font-semibold mb-2'>RELATED EXPERIENCE</h1>
            <ul className='gap-4 space-between flex flex-col'>
              <li>
                <JobExperience
                  title={'administartion assistant'}
                  company={'edu master pty ltd'}
                  location={'Australia'}
                  startDate={'since'}
                  endDate={'05.2023'}
                  experiences={[
                    {
                      description: 'Add or update content on',
                      link: {
                        href: 'https://edumaster.mn/',
                        text: "edumaster's website",
                      },
                    },
                    {
                      description:
                        'using the WordPress platform. Updating text, media content, blogs, posts, and service descriptions',
                    },
                    {
                      description:
                        'Troubleshooting website issues, such as broken links, missing images, and incorrect information.',
                    },
                    {
                      description:
                        'Responding to customer emails promptly and accurately, addressing inquiries and concerns.',
                    },
                    {
                      description:
                        'Supporting the enrolment process for new customers by following a structured checklist to ensure all required documentation is completed.',
                    },
                  ]}
                />
              </li>
              {/* <li>
                <JobExperience
                  title={""}
                  company={""}
                  location={""}
                  startDate={""}
                  endDate={""}
                  experiences={[]}
                />
              </li> */}
            </ul>
          </div>

          {/* Academic Projects */}
          <div>
            <h1 className='lg:text-m md:text-m sm:text-3xl text-3xl font-semibold mb-4'>
              ACADEMIC PROJECTS
            </h1>
            <div className='flex flex-row gap-4 justify-start items-start'>
              <ProjectBrief
                imagePath={PROJECTS_IMAGE_PATHS.bookhub}
                imageAlt={'BOOKHUB'}
                title={'BOOKHUB'}
                technologies={
                  'React Native, TypeScript, JavaScript, Expo, Native Wind, Node.js, Appwrite, GitHub'
                } //React, Node.js, MongoDB
                description={
                  'A mobile application for book readers to take a book notes, share their thoughts and reviews with others. Manage their reading list and track their reading progress.'
                }
                details={''}
              ></ProjectBrief>
              <ProjectBrief
                imagePath={PROJECTS_IMAGE_PATHS.sapphire}
                imageAlt={'SAPPHIRE'}
                title={'SAPPHIRE'}
                technologies={
                  'Next.js, React, TypeScript, Tailwind CSS, Node.js, MongoDb, GitHub'
                }
                description={
                  'E-commerce website for selling souvenier products for Mongolian small business owner. Users can view products, add them to cart, and make a purchase.'
                }
                details={''}
              ></ProjectBrief>
            </div>
          </div>
          {/*
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
              INTERESTS
            </h1>
            <p className="text-lg sm:text-xl">
              Listen to almost all type of music excluding metall, can&apos;t
              dip my head into that deep hha. You can find my playlist from
              here. Like to take a snipped of beatiful environment. Nature
              enthusiast. I like homemade cooking.
            </p>
          </div> 
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">BLOGS</h1>*/}
        </div>
      </div>
    </main>
  );
};
export default About;

// ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
