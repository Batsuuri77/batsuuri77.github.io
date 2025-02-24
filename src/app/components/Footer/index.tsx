import React from 'react';
import Image from 'next/image';
import { SOCIAL_IMAGE_PATHS } from '@/app/utils/imagePaths';

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col justify-between pt-6 border-t-[2px] border-borderBlack border-dashed w-full h-50'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='font-semibold text-5xl'>FIND ME ON 👇</h1>
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
                src={SOCIAL_IMAGE_PATHS.facebook}
                alt={'facebook'}
                width={50}
                height={50}
              ></Image>
            </a>
            <a
              href='https://www.instagram.com/batsuuri_77/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.instagram}
                alt={'instagram'}
                width={50}
                height={50}
              ></Image>
            </a>
            <a
              href='https://github.com/Batsuuri77'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.github}
                alt={'github'}
                width={50}
                height={50}
              ></Image>
            </a>
            <a
              href='https://www.linkedin.com/in/batsuuri-battsooj-b27231b8/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={SOCIAL_IMAGE_PATHS.linkedin}
                alt={'linkedin'}
                width={50}
                height={50}
              ></Image>
            </a>
          </div>
        </div>
        <div className='flex justify-start items-center px-10 py-2 border-borderBlack border-t'>
          <p className='font-normal text-lg text-left'>
            © Batsuuri Battsooj 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
