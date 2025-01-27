import { DownloadIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import ProfilTop from "./images/me.png";
import SteedyImage from "./images/steedy.png";
import ZafyTodyImage from "./images/zafytody.jpg";
import PortfolioImage from "./images/portfolio.png";
import FiscaImage from "./images/fiscacompta.png";
import MITImage from "./images/mit.png";
import GameooImage from "./images/gameoo.png";
import ReactImage from "./images/react.png";
import NextImage from "./images/next.png";
import TypeScriptImage from "./images/typescript.png";
import TailwindImage from "./images/tailwind.png";
import MaterialImage from "./images/material_ui.png";
import FigmaImage from "./images/figma.png";
import GitHubIcon from "./images/github.png";
import LinkedInIcon from "./images/linkedin.png";
import FacebookIcon from "./images/facebook.png";
import CardProject from "@/(components)/CardProject";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import ScrollToTopButton from "@/components/scrollToTopButton";

export default function Home() {
  return (
    <ScrollArea className="w-screen h-screen bg-gradient-to-b from-cyan-950 to-cyan-900">
      <div className="bg-gradient-to-r from-cyan-950 to-cyan-900 w-screen">
        <div className="w-full h-[100dvh] relative">
          {/* <div className="w-full h-[10dvh] max-sm:p-4 sticky">
            <div className="w-full h-full py-8 px-6 rounded-md bg-cyan-800/10 flex justify-between items-center text-white border border-white/5">
              <p>Ghaleb</p>
              <div className="inline-flex flex-row gap-2 text-sm">
                <p className="py-2 px-4 border-b-2 border-t-0 border-l-0 border-r-0 border-b-cyan-600 font-bold text-cyan-300">
                  Home
                </p>
                <p className="py-2 px-4">Projects</p>
                <p className="py-2 px-4">Skills</p>
                <p className="py-2 px-4">About</p>
                <p className="py-2 px-4">Contact</p>
              </div>
            </div>
          </div> */}
          <div className="w-screen h-[90dvh] flex flex-row max-md:flex-col-reverse justify-center items-center gap-12 py-6">
            <div className="w-[50%] max-md:w-full flex flex-col justify-center items-start gap-12 max-sm:gap-4 z-50 px-10">
              {/* <Image src={ProfilTop} alt="" className="object-cover object-top rounded-full border-2 border-cyan-600 p-1 w-[150px] h-[200px]" /> */}
              <div className="flex flex-col gap-12 max-md:gap-6 max-md:text-center">
                <p className="text-white text-lg max-md:text-md font-semibold font-lexend">
                  Hi, I'm Ghaleb
                </p>

                <div className="space-y-6">
                  <p className="text-white text-5xl max-lg:text-lg font-bold">
                    Front-End Developer
                  </p>
                  <p className="text-white text-sm leading-8 max-sm:leading-7 tracking-wider w-full text-justify max-md:text-center">
                    Front-end developer specializing in React, Next.js, and
                    TypeScript, creating performant and responsive interfaces
                    that blend aesthetics and functionality.
                  </p>
                </div>
              </div>

              <div className="w-full text-white flex max-md:justify-center">
                <a
                  href="../app/images/CV_El'Ghaleb_Saïd_Ali_Mohamed.pdf"
                  download="CV_El'Ghaleb_Saïd_Ali_Mohamed.pdf"
                  className="animate-pulse min-w-[100px] max-w-[200px] text-sm py-2 px-4 flex flex-row items-center justify-center gap-4 border border-blue-500 rounded-md bg-blue-500 hover:bg-blue-600"
                >
                  <DownloadIcon size="16" />
                  Get my resume
                </a>
              </div>
            </div>

            <div className="w-[50%] max-md:w-full h-full max-md:h-[250px] flex justify-end">
              <div className="w-full h-full relative bg-none border-l border-cyan-950">
                {/* <div className="absolute top-28 max-md:top-[50%] left-[-200px] max-md:left-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%] w-[400px] max-md:w-[200px] h-[400px] max-md:h-[200px] rounded-full border-2 border-cyan-950 c p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-cyan-950"> */}
                <Image
                  src={ProfilTop}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
                {/* </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100dvh] pb-6 flex flex-col gap-10 mt-8">
          <div className="w-full flex justify-center items-center flex-row gap-4">
            <div className="w-[35px] h-1 rounded-md bg-cyan-700"></div>
            <div className="w-[30%] h-1 rounded-md bg-cyan-800"></div>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-white text-3xl max-md:text-xl font-bold">
              My projects
            </p>
          </div>
          <div className="w-full p-4 grid grid-rows-2 max-lg:grid-rows-3 max-sm:grid-rows-6 grid-flow-col auto-cols-auto gap-6">
            {/* STEEDY */}
            <Link href="https://steedy.app" target="_blank">
              <div className="h-[250px] text-white relative rounded-lg shadow-zinc-100/5 shadow-md border border-zinc-200/10 overflow-hidden">
                <div className="absolute top-2 left-2 px-4 py-2 rounded-full bg-cyan-950 border border-zinc-100/20">
                  <p className="text-xs">Front-end</p>
                </div>
                <Image
                  src={SteedyImage}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
                <div className="w-full h-[150px] absolute bottom-0 left-0 rounded-md bg-gradient-to-t from-black/95 to-transparent p-4 flex flex-col gap-2 items-start justify-end">
                  <p className="font-bold text-sm">Steedy Platform</p>
                  {/* <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p> */}
                </div>
              </div>
            </Link>

            {/* ZAFYTODY */}
            <CardProject
              img={ZafyTodyImage}
              skill="Front-end"
              projectName="ZafyTody Online"
            />

            {/* PORTFOLIO */}
            <CardProject
              img={PortfolioImage}
              skill="Front-end"
              projectName="Portfolio"
            />

            {/* FISCA COMPTA */}
            <CardProject
              img={FiscaImage}
              skill="Project manager"
              projectName="Fisca Compta"
            />

            {/* MIT */}
            <CardProject
              img={MITImage}
              skill="UI/UX"
              projectName="Malagasy Innovative Teachers"
              link="https://www.figma.com/proto/2dOPL06dWciVwDgb8QHRcG/MIT?node-id=653-7811&starting-point-node-id=1%3A3"
            />

            {/* GAMEOO */}
            <CardProject
              img={GameooImage}
              skill="UI/UX"
              projectName="GAMEOO"
              link="https://www.figma.com/proto/oVRHX4D7SBPMmF4TutIFBl/GAMEOO?node-id=1-4&p=f&t=jVggkpSXM9nOKlZp-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4"
            />
          </div>

          {/* <div className="w-full flex justify-center items-center">
            <button className="px-6 py-1 rounded-full border border-cyan-800 bg-cyan-700 text-white text-sm">
              View all
            </button>
          </div> */}
        </div>

        <div className="w-full h-[100dvh] max-sm:h-auto pb-6 flex flex-col gap-10">
          <div className="w-full flex justify-center items-center flex-row gap-4">
            <div className="w-[35px] h-1 rounded-md bg-cyan-700"></div>
            <div className="w-[30%] h-1 rounded-md bg-cyan-800"></div>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-white text-3xl max-sm:text-xl font-bold">
              My skills
            </p>
          </div>

          <div className="w-full grid grid-rows-2 grid-flow-col gap-4 p-4">
            <div className="border border-zinc-100/5 p-3 flex flex-col justify-center items-center gap-6 hover:bg-sky-300/10">
              <Image
                src={ReactImage}
                alt=""
                className="w-[35px] h-[35px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-sm max-sm:text-xs font-semibold text-white">
                React JS
              </p>
            </div>
            <div className="border border-zinc-100/5 p-2 flex flex-col justify-center items-center gap-6 hover:bg-blue-500/15">
              <Image
                src={TypeScriptImage}
                alt=""
                className="w-[35px] h-[35px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-sm max-sm:text-xs font-semibold text-white">
                TypeScript
              </p>
            </div>
            <div className="border border-zinc-100/5 p-2 flex flex-col justify-center items-center gap-6 hover:bg-black/10">
              <Image
                src={NextImage}
                alt=""
                className="w-[35px] h-[35px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-sm max-sm:text-xs font-semibold text-white">
                Next JS
              </p>
            </div>

            <div className="border border-zinc-100/5 p-2 flex flex-col justify-center items-center gap-6 hover:bg-cyan-400/20">
              <Image
                src={TailwindImage}
                alt=""
                className="w-[35px] h-[35px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-sm max-sm:text-xs font-semibold text-white">
                Tailwind
              </p>
            </div>
            <div className="border border-zinc-100/5 p-2 flex flex-col justify-center items-center gap-6 hover:bg-sky-700/30">
              <Image
                src={MaterialImage}
                alt=""
                className="w-[35px] h-[35px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-sm max-sm:text-xs font-semibold text-white">
                Material UI
              </p>
            </div>
            <div className="border border-zinc-100/5 p-2 flex flex-col justify-center items-center gap-6 hover:bg-gradient-to-r from-cyan-600/20 to-green-500/20">
              <Image
                src={FigmaImage}
                alt=""
                className="w-[35px] h-[35px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px]"
              />
              <p className="text-sm max-sm:text-xs font-semibold text-white">
                Figma
              </p>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[90dvh] pb-6 max-md:h-auto flex flex-col gap-6">
          <div className="w-full flex justify-center items-center flex-row gap-4">
            <div className="w-[35px] h-1 rounded-md bg-cyan-700"></div>
            <div className="w-[30%] h-1 rounded-md bg-cyan-800"></div>
          </div>

          <div className="w-full flex justify-center items-center pb-8">
            <p className="text-white text-3xl max-sm:text-xl font-bold">
              About Me
            </p>
          </div>

          <div className="w-full h-auto flex flex-row-reverse max-md:flex-col text-white p-4 gap-12">
            <div className="w-[40%] max-md:w-full h-[300px] justify-center items-center max-lg:p-0">
              <div className="w-full h-full rounded-lg about-img">
                {/* <Image
                  src={AboutImage}
                  alt=""
                  className="object-contain object-top w-full h-full"
                /> */}
              </div>
            </div>
            <div className="w-[60%] max-md:w-full min-h-[300px] flex flex-col gap-5">
              <p className="text-white text-2xl max-md:text-lg font-bold">Me</p>
              <p className="text-sm max-md:text-sm leading-8 max-md:leading-7 tracking-wide text-justify font-lexend">
                My name is El'Ghaleb Said Ali Mohamed, and I'm a passionate
                front-end developer, specializing in creating high-performance,
                responsive interfaces with React, Next.js and TypeScript. I
                enjoy working on projects that combine aesthetics and
                functionality, with a focus on delivering pleasant and intuitive
                user experiences. My approach focuses on optimizing performance,
                using good development practices, and collaborating effectively
                with multidisciplinary teams. In addition to development, I also
                have solid experience in UI/UX design. My aim is to continue
                learning and evolving in the field of web development, adapting
                to the latest technologies and trends.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-full h-[100dvh] flex flex-col gap-10">
          <div className="w-full flex justify-center items-center flex-row gap-4">
            <div className="w-[35px] h-1 rounded-md bg-cyan-700"></div>
            <div className="w-[30%] h-1 rounded-md bg-cyan-800"></div>
          </div>
          <div className="w-full flex justify-center items-center">
            <p className="text-white text-3xl font-bold">Formations</p>
          </div>
        </div> */}

        <div className="w-full min-h-[350px] flex flex-col">
          <div className="w-full h-full flex flex-col gap-8 bg-cyan-950/90 p-6">
            <div className="w-full h-[10%]">
              <p className="text-white text-3xl max-md:text-xl font-bold">
                Let's work together !
              </p>
            </div>
            <div className="w-full h-[90%] text-white flex flex-row max-lg:flex-col gap-8">
              <div className="flex-1 flex-col gap-4">
                <div className="flex flex-row items-center gap-4 border border-cyan-100/10 p-3 rounded-sm">
                  <MailIcon size={18} />
                  <div className="w-0 h-[15px] border border-cyan-300/30 rounded-md"></div>
                  <p className="text-sm max-md:text-sm">
                    saidalighaleb007@gmail.com
                  </p>
                </div>
                <div className="w-full flex flex-row items-center gap-4 border border-cyan-100/10 p-3 rounded-sm mt-4">
                  <PhoneIcon size={18} />
                  <div className="w-0 h-[15px] border border-cyan-300/30 rounded-md"></div>
                  <p className="text-sm max-md:text-sm">+261 32 39 869 63</p>
                </div>
                <div className="w-full grid grid-rows-1 grid-flow-col gap-4">
                  <Link href="https://github.com/Ghaleb10" target="_blank">
                    <div className="w-full flex flex-row items-center justify-center gap-4 border border-cyan-100/10 p-3 rounded-sm mt-4 bg-cyan-50 hover:bg-cyan-50/90">
                      <Image src={GitHubIcon} alt="" className="w-5 h-5" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/sa%C3%AFd-ali-mohamed-el-ghaleb-b28916200/"
                    target="_blank"
                  >
                    <div className="w-full flex flex-row items-center justify-center gap-4 border border-cyan-100/10 p-3 rounded-sm mt-4 bg-cyan-50 hover:bg-cyan-50/90">
                      <Image src={LinkedInIcon} alt="" className="w-5 h-5" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.facebook.com/saidali.ghaleb/"
                    target="_blank"
                  >
                    <div className="w-full flex flex-row items-center justify-center gap-4 border border-cyan-100/10 p-3 rounded-sm mt-4 bg-cyan-50 hover:bg-cyan-50/90">
                      <Image src={FacebookIcon} alt="" className="w-5 h-5" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-0 max-lg:w-full h-[300px] max-lg:h-0 border border-cyan-300 rounded-md"></div>
              <div className="flex-1 flex-col gap-6">
                <div className="w-full flex flex-col gap-1">
                  <p className="text-white text-xl font-bold">Contact me</p>
                  <div className="w-[25px] border border-cyan-700 rounded-md"></div>
                </div>
                <div className="w-full flex flex-col gap-4 mt-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nom" className="text-sm max-sm:text-sm">
                      Your full name
                    </label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      className="outline-none bg-white/10 p-2 rounded-sm text-sm max-sm:text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm max-sm:text-sm">
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="outline-none bg-white/10 p-2 rounded-sm text-sm max-sm:text-sm"
                    ></textarea>
                  </div>
                  <button className="w-full p-2 rounded-sm bg-cyan-500 hover:bg-cyan-600 text-sm max-sm:text-sm">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </ScrollArea>
  );
}
