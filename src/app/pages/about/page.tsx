import React from 'react';
import Image from 'next/image';
import JobExperience from '../../components/JobExperience';
import BinaryMeter from '../../components/BinaryMeter';
import ProjectBrief from '../../components/ProjectBrief';
import {
  PRO_PATH,
  PROJECTS_IMAGE_PATHS,
  SOCIAL_IMAGE_PATHS,
} from '@/app/utils/imagePaths';

const About = () => {
  const socials =
    'w-5 h-5 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 flex items-center justify-center';

  return (
    <main className='flex-1 flex flex-col items-center justify-center w-full'>
      {/*Content container*/}
      <div className='flex flex-col w-[80%]'>
        {/* Bio section */}
        <section className='pt-28 xl:pt-0 flex flex-col xl:flex-row justify-between items-center gap-6 sm:gap-8 xl:gap-20 2xl:gap-40 w-full text-center xl:h-screen'>
          {/* Text Section */}
          <div className='flex flex-col text-justify justify-between items-center w-full gap-4'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-semibold mb-2'>
              G&apos;DAY MATES! 👋
            </h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl'>
              I am <span className='font-bold'>BATSUURI BATTSOOJ</span>, a
              formal Business Development Manager who turned into a passionate
              front-end developer settled in Melbourne, Australia 🙂.
              <br /> <br />
              {/* <br />
              <span>I was born and raised in Mongolia.</span>
              <br />
              <br /> */}
              <span>
                I began my coding journey as a self-learner, and later enhanced
                my academic knowledge by earning a{' '}
                <span className='text-green-600 font-bold'>Master of IT</span>{' '}
                degree from Central Queensland University (CQU), graduated in
                November 2024 . <br />
                <br />I specialized in building modern, interactive web and
                mobile applications using JavaScript-based libraries and
                frameworks such as{' '}
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
                containerClassName='flex space-x-4 text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold'
                digitClassName='w-4 h-4 sm:w-10 sm:h-10 md:w-14 md:h-14 2xl:w-32 2xl:h-32 flex text-gray-400 items-center justify-center rounded overflow-hidden'
                binaryNumber='1001101'
              ></BinaryMeter>
            </div>
            {/* <span className="absolute top-[435px] left-[545px] bg-white drop-shadow-lg border-2 w-40 h-10 text-center cursor-pointer pt-1 rounded-l-full">
              reveal me
            </span> */}
            {/*Mongolia gedeg ugiig sticky paper-n tsaana nuuh, tegeed left mouse daranguut huulagdaad dahiad daranguut butsaad haagddag baih*/}
          </div>

          {/* Image and social */}
          <div className='flex flex-col justify-center items-center gap-8'>
            <div className='flex-shrink-0 w-52 h-54 sm:w-64 sm:h-62 md:w-80 md:h-94 lg:w-[400px] lg:h-[430px] 2xl:w-[480] 2xl:h-[420px] overflow-hidden drop-shadow-2xl rounded-2xl'>
              <Image
                src={PRO_PATH.pro1}
                alt="Batsuuri's profile 1.06"
                layout='responsive'
                objectFit='cover'
                width={483}
                height={513}
              />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-semibold text-2xl sm:text-4xl 2xl:text-5xl mb-2'>
                  FIND ME ON 👇
                </h1>
                <a
                  href='mailto: batsuuri2146@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex flex-row justify-between text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal'
                >
                  batsuuri2146@gmail.com
                </a>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 py-2 lg:py-4'>
                <div className='flex flex-row justify-between gap-x-6 sm:gap-x-8 text-2xl'>
                  <a
                    href='https://www.facebook.com/kalu.ulak.77'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={socials}
                  >
                    <Image
                      src={SOCIAL_IMAGE_PATHS.facebook1}
                      alt={'facebook'}
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                  <a
                    href='https://www.instagram.com/batsuuri_77/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={socials}
                  >
                    <Image
                      src={SOCIAL_IMAGE_PATHS.instagram}
                      alt={'instagram'}
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                  <a
                    href='https://github.com/Batsuuri77'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={socials}
                  >
                    <Image
                      src={SOCIAL_IMAGE_PATHS.github}
                      alt={'github'}
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/batsuuri-battsooj-b27231b8/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={socials}
                  >
                    <Image
                      src={SOCIAL_IMAGE_PATHS.linkedin}
                      alt={'linkedin'}
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IceBreaker and education */}
        <section className='flex flex-col justify-between items-start'>
          <div className='flex flex-col xl:flex-row my-10 justify-between gap-4 lg:gap-5'>
            {/* Education */}
            <div className='flex-1 flex flex-col justify-top items-start'>
              <h1 className='text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold lg:mb-2'>
                EDUCATION
              </h1>
              <ul>
                <li>
                  <h3 className='text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-gray-800'>
                    Master of IT (Mobile app development)
                  </h3>
                  <p className='text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl'>
                    Central Queensland University (CQU){' '}
                    <span className='lg:ml-2 text-green-600 font-semibold'>
                      03.2023 - 11.2024
                    </span>
                    {/* <span className="ml-10">
                    GPA: <span className=" text-blue-700">5.37 out of 7</span>
                  </span> */}
                  </p>
                </li>
                <li>
                  <br />
                  <span className='text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-gray-800'>
                    Bachelor of economics and business administration
                  </span>
                  <p className='text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl'>
                    Mongolina National University (MNU){' '}
                    <span className='lg:ml-2 text-green-600 font-semibold'>
                      09.2014 - 05.2018
                    </span>
                    {/* <span className="ml-10">
                    GPA: <span className="text-blue-700">3.5 out of 4</span>
                  </span> */}
                  </p>
                </li>
              </ul>
            </div>

            {/* IceBreaker */}
            <div className='flex-1 flex flex-col justify-top items-start gap-1 lg:gap-4'>
              <h1 className='text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold '>
                ICEBREAKER
              </h1>
              <ul className='text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify space-y-2'>
                <li className="before:content-['-'] before:mr-2">
                  I have been living in Melbourne since 2023.
                </li>
                <li className="before:content-['-'] before:mr-2">
                  I had been artistic gymnast for 7 years and I am an
                  international judge of men&apos;s artistic gymnastics since
                  2018.
                </li>
                <li className="before:content-['-'] before:mr-2">
                  I was a financial analyst, business development manager, and
                  project manager in Mongolian rapidly rising group company.
                </li>
              </ul>
            </div>
          </div>

          {/* Work Experience */}
          <div className='flex-1 flex flex-col w-full justify-top items-center lg:items-start gap-1 lg:gap-4'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold lg:mb-2'>
              RELATED EXPERIENCE
            </h1>
            <ul className='gap-4 space-between flex flex-col'>
              <li>
                <JobExperience
                  title={'administartion assistant'}
                  company={'edu master pty ltd - full time'}
                  location={'Australia '}
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
                        'using a WordPress. Updating texts, media contents, blogs, posts, and service descriptions.',
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
            </ul>
          </div>

          {/* Academic Projects */}
          <div className='flex-1 flex flex-col justify-top items-start gap-4 mt-5 lg:my-10 2xl:my-20'>
            <h1 className='text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold lg:2 lg:mb-4'>
              ACADEMIC PROJECTS
            </h1>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center lg:justify-start items-center lg:items-start mb-5 sm:mb-7'>
              <ProjectBrief
                imagePath={PROJECTS_IMAGE_PATHS.bookhuball}
                imageAlt={'BOOKHUB'}
                imageHeight={1000}
                imageWidth={1000}
                title={'BOOKHUB'}
                titleLink='/pages/projects/'
                technologies={
                  'React Native, TypeScript, Expo, Native Wind, Node.js, Appwrite, GitHub'
                }
                description={
                  'A mobile application for book readers to take a book notes, share their thoughts and reviews with others. Manage their reading list and track their reading progress.'
                }
                details={''}
              ></ProjectBrief>
              <ProjectBrief
                imagePath={PROJECTS_IMAGE_PATHS.sapphire3}
                imageAlt={'SAPPHIRE'}
                title={'SAPPHIRE'}
                titleLink='/pages/projects/'
                imageHeight={1000}
                imageWidth={1000}
                technologies={
                  'Next.js, TypeScript, Tailwind CSS, Node.js, MongoDb, GitHub'
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
        </section>
      </div>
    </main>
  );
};
export default About;

// ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
