'use client';
import WavingHand from './components/Wave';
import { IMAGE_PATHS, PRO_PATH } from '@/app/utils/imagePaths';
import Technologies from './components/Technologies';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

export default function Home() {
  const bioSection =
    'h-screen pt-36 flex flex-col justify-between items-center gap-8 w-full';
  const techContainer =
    'py-4 px-10 flex flex-row gap-4 items-center justify-between border border-2 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-2xl backdrop-saturate-150';
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <main className='flex-1 flex flex-col items-center justify-center'>
      {/* Bio section */}
      <section className={bioSection}>
        {/* Text Section */}
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='text-7xl font-semibold mb-4'>
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
          {/* Image section */}
          <p className='text-2xl mb-6 text-center'>
            <span className='text-4xl'>
              I am <span className='font-bold'>BATSUURI BATTSOOJ</span>
            </span>
            , <br />a passionate front-end developer settled in Melbourne,
            Australia 🙂.
          </p>
          <div className='flex-shrink-0 mb-12 w-52 h-64 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-[470px] lg:h-[500px] overflow-hidden drop-shadow-2xl rounded-2xl'>
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
      <section className='w-full flex flex-col justify-center items-center gap-10 pb-20'>
        <div>
          <h1 className='text-center text-4xl font-semibold mb-5'>
            TECHNOLOGIES
          </h1>

          {/* Front-End Technologies */}
          <div className='flex flex-col gap-4 mb-5'>
            <h2 className='text-2xl font-semibold text-center'>FRONT-END</h2>
            <div className={`${techContainer} `}>
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
          <div className='flex flex-row gap-4'>
            <div className='flex flex-row gap-20 items-center justify-center'>
              {/* Styling Technologies */}
              <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold text-center  '>
                  STYLING
                </h2>
                <div className={`${techContainer} px-8`}>
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
                    imageHeight={60}
                    imageWidth={60}
                  />
                  <Technologies
                    imagePath={IMAGE_PATHS.figma}
                    imageAlt={'Figma'}
                    title='Figma'
                  />
                </div>
              </div>
              {/* Back-End Technologies */}
              <div className='flex flex-col gap-4 items-center justify-center'>
                <h2 className='text-2xl font-semibold text-center text-gray-700'>
                  BACK-END
                </h2>
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
          </div>
        </div>
      </section>
    </main>
  );
}

// https://mailchimp.com/resources/web-developer-portfolio-examples/?ds_c=DEPT_AOC_Google_Search_ANZ_EN_NB_Acquire_Broad_DSA-Rsrc_ANZ&ds_kids=p78570082175&ds_a_lid=dsa-2227026702184&ds_cid=71700000115924393&ds_agid=58700008604643922&gad_source=1&gclid=CjwKCAjwyfe4BhAWEiwAkIL8sBFXIXSbWZpzPFFleVep4Tb-sFzqpXBnI1rOR0nvyHj5StDGxLPuYxoC_yQQAvD_BwE&gclsrc=aw.ds

// https://www.youtube.com/watch?v=Kb1f5bvF6f4

//rafce
