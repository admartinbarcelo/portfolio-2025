import memojiImage from "@/assets/images/memoji-adrian.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkeIcon from "@/assets/icons/sparkle.svg";
import { StarsOrbit } from "@/components/StarsOrbit";

import Image from "next/image";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* El componente StarsOrbit se utiliza para crear una órbita circular para las estrellas */}
        <StarsOrbit rotation={-72} size={800}>
          <StarIcon className="size-28 text-emerald-300" />
        </StarsOrbit>
        <StarsOrbit rotation={20} size={550}>
          <StarIcon className="size-12 text-emerald-300" />
        </StarsOrbit>
        <StarsOrbit rotation={98} size={590}>
          <StarIcon className="size-8 text-emerald-300" />
        </StarsOrbit>

        {/* El componente StarsOrbit se utiliza para crear una órbita circular para los destellos. */}
        <StarsOrbit rotation={-14} size={430}>
          <SparkeIcon className="size-8 text-emerald-300/20" />
        </StarsOrbit>
        <StarsOrbit rotation={79} size={440}>
          <SparkeIcon className="size-5 text-emerald-300/20" />
        </StarsOrbit>
        <StarsOrbit rotation={180} size={530}>
          <SparkeIcon className="size-10 text-emerald-300/20" />
        </StarsOrbit>
        <StarsOrbit rotation={144} size={710}>
          <SparkeIcon className="size-14 text-emerald-300/20" />
        </StarsOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Memoji with computer"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-l">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 rounded-full animate-ping-large absolute"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experience
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I Specialize in transforming design into functional, high-performing
            web applications
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4 animate-bounce-down" />
          </a>
          <a
            href="https://www.linkedin.com/in/admartinbarcelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋🏽</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
