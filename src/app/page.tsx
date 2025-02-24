'use client';
import WavingHand from './components/Wave';
import { IMAGE_PATHS, PRO_PATH } from '@/app/utils/imagePaths';
import Technologies from './components/Technologies';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';

export default function Home() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-center pt-28 pb-10'>
      {/*Content container*/}
      <div className='flex flex-col justify-between items-center gap-8 p-4 w-full'>
        {/* Bio section */}
        <div className='flex flex-row justify-center items-center w-full gap-8'>
          {/* Text Section */}
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='text-7xl font-semibold mb-10'>
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
            <div className='flex-shrink-0 w-52 h-64 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-[470px] lg:h-[500px] overflow-hidden drop-shadow-2xl rounded-2xl'>
              <Image
                src={PRO_PATH.pro}
                alt="Batsuuri's profile 1.06"
                layout='responsive'
                objectFit='cover'
                width={644}
                height={687}
              />
            </div>
            <p className='text-2xl my-6  text-center'>
              I am <span className='font-bold'>BATSUURI BATTSOOJ</span>, <br />a
              passionate front-end developer settled in Melbourne, Australia 🙂.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className='flex flex-col justify-center items-center gap-10 mt-8'>
          <div>
            <h1 className='text-center text-4xl font-semibold mb-5'>
              TECHNOLOGIES
            </h1>

            {/* Front-End Technologies */}
            <div className='flex flex-col gap-4 mb-10'>
              <h2 className='text-2xl font-semibold text-center text-green-700'>
                FRONT-END
              </h2>
              <div className='flex flex-row gap-20 items-center justify-center'>
                <Technologies
                  imagePath={IMAGE_PATHS.html}
                  imageAlt={'HTML'}
                  title={'HTML5'}
                  shadowColor='#4fcf75'
                />
                <Technologies
                  imagePath={IMAGE_PATHS.js}
                  imageAlt={'JavaScript'}
                  title={'JavaScript'}
                  shadowColor='#4fcf75'
                />
                <Technologies
                  imagePath={IMAGE_PATHS.react}
                  imageAlt={'React'}
                  title={'React'}
                  shadowColor='#4fcf75'
                />
                <Technologies
                  imagePath={IMAGE_PATHS.react}
                  imageAlt={'React Native'}
                  title={'React Native'}
                  shadowColor='#4fcf75'
                />
                <Technologies
                  imagePath={IMAGE_PATHS.nextjs}
                  imageAlt={'Next.js'}
                  title={'Next.js'}
                  shadowColor='#4fcf75'
                />
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-row gap-20 items-center justify-center'>
                {/* Styling Technologies */}
                <div className='flex flex-col gap-4'>
                  <h2 className='text-2xl font-semibold text-center  text-blue-700'>
                    STYLING
                  </h2>
                  <div className='flex flex-row gap-20 items-center justify-center'>
                    <Technologies
                      imagePath={IMAGE_PATHS.css}
                      imageAlt={'CSS'}
                      title={'CSS'}
                      shadowColor='#69b0f7'
                    />
                    <Technologies
                      imagePath={IMAGE_PATHS.tailwind}
                      imageAlt={'Tailwind CSS'}
                      title={'Tailwind CSS'}
                      shadowColor='#69b0f7'
                    />
                    <Technologies
                      imagePath={IMAGE_PATHS.figma}
                      imageAlt={'Figma'}
                      title={'Figma'}
                      shadowColor='#69b0f7'
                    />
                  </div>
                </div>
                {/* Back-End Technologies */}
                <div className='flex flex-col gap-4 items-center justify-center'>
                  <h2 className='text-2xl font-semibold text-center  text-purple-700'>
                    BACK-END
                  </h2>
                  <div className='flex flex-row gap-20 items-center justify-center'>
                    <Technologies
                      imageClassName='relative'
                      imagePath={IMAGE_PATHS.nodejs}
                      imageHeight={50}
                      imageWidth={100}
                      title='Node.js'
                      imageAlt={'Node.js'}
                      shadowColor='#c076e0'
                    />
                    <Technologies
                      imageClassName='relative'
                      imagePath={IMAGE_PATHS.mongodb}
                      imageHeight={50}
                      imageWidth={100}
                      shadowColor='#c076e0'
                      title='MongoDB'
                      imageAlt={'MongoDB'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// https://mailchimp.com/resources/web-developer-portfolio-examples/?ds_c=DEPT_AOC_Google_Search_ANZ_EN_NB_Acquire_Broad_DSA-Rsrc_ANZ&ds_kids=p78570082175&ds_a_lid=dsa-2227026702184&ds_cid=71700000115924393&ds_agid=58700008604643922&gad_source=1&gclid=CjwKCAjwyfe4BhAWEiwAkIL8sBFXIXSbWZpzPFFleVep4Tb-sFzqpXBnI1rOR0nvyHj5StDGxLPuYxoC_yQQAvD_BwE&gclsrc=aw.ds

// https://www.youtube.com/watch?v=Kb1f5bvF6f4

//rafce
