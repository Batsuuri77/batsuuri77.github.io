'use client';
import WavingHand from './components/Wave';
import { IMAGE_PATHS, PRO_PATH } from '@/app/utils/imagePaths';
import Technologies from './components/Technologies';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

export default function Home() {
  const techContainer =
    'w-full flex flex-wrap sm:flex-row  items-center justify-center 2xl:justify-between gap-y-4 gap-x-6 sm:gap-x-8 py-6 px-3 xl:px-10 2xl:px-28 border-2 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl backdrop-saturate-150';
  const techSubTitle =
    'text-xl sm:text-2xl 2xl:text-3xl font-semibold text-center';
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <main className='flex-1 flex flex-col items-center justify-center w-full'>
      <div className='flex flex-col w-[80%]'>
        {/* Bio section */}
        <section className='pt-28 sm:pt-36 flex flex-col justify-between items-center gap-6 sm:gap-8 w-full text-center mb-14'>
          {/* Greeting text */}
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='text-3xl sm:text-5xl 2xl:text-7xl font-semibold mb-4'>
              <div>
                <Typewriter
                  words={[
                    "G'DAY MATES!",
                    'HOLA AMIGOS!',
                    'HALLO KUMPELS!',
                    'CIAO AMICI!',
                    'ПРИВЕТ, РЕБЯТА!',
                    '你好，朋友们',
                    '안녕 친구들!',
                    'やあ、みんな！',
                    'HEJ KOMPISAR!',
                    'ӨДРИЙН МЭНД!',
                    "G'DAY MATES!",
                  ]}
                  cursor
                  cursorBlinking={true}
                  cursorStyle={'|'}
                  loop={5}
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={2000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
                <WavingHand />
              </div>
            </div>
            {/* Bio text */}
            <div className='text-2xl sm:text-3xl 2xl:text-5xl'>
              I am <span className='font-bold'>BATSUURI BATTSOOJ.</span>
            </div>
            <p className='text-xl sm:text-2xl 2xl:text-4xl mb-6 text-center'>
              A passionate front-end developer settled in Melbourne, Australia
              🙂.
            </p>
            {/* Image */}
            <div className='w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] 2xl:w-[650px] 2xl:h-[650px] flex-shrink-0 overflow-hidden drop-shadow-2xl rounded-2xl'>
              <Image
                src={PRO_PATH.pro}
                alt="Batsuuri's profile 1.06"
                layout='responsive'
                objectFit='cover'
                width={644}
                height={687}
              />
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className='w-full lg:px-10  flex flex-col justify-center items-center pb-20 sm:gap-5'>
          <h1 className='text-center text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-2 font-semibold'>
            TECHNOLOGIES
          </h1>

          {/* Front-End Technologies */}
          <div className='flex flex-col gap-4 w-full mb-6'>
            <h2 className={techSubTitle}>FRONT-END</h2>
            <div className={`${techContainer}`}>
              <Technologies
                imagePath={IMAGE_PATHS.html}
                imageAlt={'HTML'}
                title={'HTML5'}
                imageWidth={41}
                imageHeight={40}
                borderColor='#1d4ed8'
              />
              <Technologies
                imagePath={IMAGE_PATHS.js}
                imageAlt={'JavaScript'}
                title={'JavaScript'}
                imageWidth={45}
                imageHeight={45}
                borderColor='#1d4ed8'
              />
              <Technologies
                imagePath={IMAGE_PATHS.react}
                imageAlt={'React'}
                title={'React'}
                borderColor='#1d4ed8'
              />
              <Technologies
                imagePath={IMAGE_PATHS.react}
                imageAlt={'React Native'}
                title={'React Native'}
                borderColor='#1d4ed8'
              />
              <Technologies
                imagePath={IMAGE_PATHS.nextjs}
                imageAlt={'Next.js'}
                title={'Next.js'}
                imageHeight={47}
                imageWidth={47}
                borderColor='#1d4ed8'
              />
            </div>
          </div>
          {/* Styling and Back-End Technologies */}
          <div className='w-full flex flex-col gap-6 items-center justify-center lg:flex-row lg:gap-10'>
            {/* Styling Technologies */}
            <div className='w-full flex flex-col gap-4 sm:mb-10 lg:mb-0'>
              <h2 className={techSubTitle}>STYLING</h2>
              <div className={`${techContainer}`}>
                <Technologies
                  imagePath={IMAGE_PATHS.css}
                  imageAlt={'CSS'}
                  title='CSS'
                  imageHeight={46}
                  imageWidth={46}
                />
                <Technologies
                  imagePath={IMAGE_PATHS.tailwind}
                  imageAlt={'Tailwind CSS'}
                  title='Tailwind CSS'
                />
                <Technologies
                  imagePath={IMAGE_PATHS.figma}
                  imageAlt={'Figma'}
                  title='Figma'
                />
              </div>
            </div>
            {/* Back-End Technologies */}
            <div className='w-full flex flex-col gap-4 items-center justify-center'>
              <h2 className={techSubTitle}>BACK-END</h2>
              <div className={`${techContainer}`}>
                <Technologies
                  imageClassName='relative'
                  imagePath={IMAGE_PATHS.nodejs}
                  imageHeight={50}
                  imageWidth={90}
                  imageAlt={'Node.js'}
                  title='Node.js'
                />
                <Technologies
                  imageClassName='relative'
                  imagePath={IMAGE_PATHS.mongodb}
                  imageHeight={70}
                  imageWidth={120}
                  imageAlt={'MongoDB'}
                  title='MongoDB'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
