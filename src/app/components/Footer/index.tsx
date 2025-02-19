import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-between py-10 border-t-[3px] border-borderBlack border-dashed w-full h-56">
        <div className="flex flex-col justify-center items-center gap-4 pb-6">
          <h1 className="font-semibold text-5xl">FIND ME ON 👇</h1>
          <a
            href="mailto: batsuuri2146@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between gap-4 text-2xl"
          >
            batsuuri2146@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 py-6 ">
          <div className="flex flex-row justify-between gap-x-8 text-2xl">
            <a
              href="https://www.facebook.com/kalu.ulak.77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/me/Images/social/Facebook.png"}
                alt={"facebook"}
                width={50}
                height={50}
              ></Image>
            </a>
            <a
              href="https://www.instagram.com/batsuuri_77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/me/Images/social/Instagram.png"}
                alt={"instagram"}
                width={50}
                height={50}
              ></Image>
            </a>
            <a
              href="https://github.com/Batsuuri77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/me/Images/social/GitHub.png"}
                alt={"github"}
                width={50}
                height={50}
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/batsuuri-battsooj-b27231b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/me/Images/social/Linkedin.png"}
                alt={"linkedin"}
                width={50}
                height={50}
              ></Image>
            </a>
          </div>
        </div>
        <div className="flex justify-start items-center px-10 py-4 border-borderBlack border-t">
          <p className="font-normal text-lg text-left">
            © Batsuuri Battsooj 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
