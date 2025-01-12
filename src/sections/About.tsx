'use client';
import Image from "next/image";
import BookImage from "@/assets/images/mockup-libro.png";
import ReactIcon from "@/assets/icons/react.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import NextIcon from "@/assets/icons/next.svg";
import mapImage from "@/assets/images/map-barcelona.webp";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "TailwindCSS",
    iconType: tailwindIcon,
  },
  {
    title: "NextJS",
    iconType: NextIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const hobbiesItems = [
  {
    title: "Travel",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Running",
    emoji: "🏃🏽‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "💪🏽",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cook",
    emoji: "👨🏽‍🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "65%",
  },
  {
    title: "Ice Bath",
    emoji: "❄️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my world"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Image" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools i use to craft digital exceptional experiencies."
                className=""
              />
              <ToolBoxItems
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                items={toolBoxItems}
              />
              <ToolBoxItems
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                items={toolBoxItems}
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies that keep me inspired."
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbiesItems.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-t from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map Image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r  from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duraction:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r  from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
