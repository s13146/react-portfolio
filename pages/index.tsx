import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FiMail, FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import photo from "../public/photo.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import { useState } from "react";
import Text from "./TextEffects";
import Education from "./Education";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Katarzyna Węsierska Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:mx-20 md:px-20 lg:px-40">
        <section>
          <nav className="mb-12 flex justify-between py-10 dark:text-white">
            <h1 className="text-md dark:text-white lg:text-2xl">Hello, I'm</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                />
              </li>
              <li>
                <a
                  className="ml-8 rounded-md bg-gradient-to-r from-cyan-300 to-teal-600 px-4 py-2"
                  href="./public/cv.pdf"
                  download="cv.pdf">
                  CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="">
            <h5 className="md:font-xl text-center text-4xl font-medium dark:text-white">
              <Text />
            </h5>
            <h3 className="text-3md pt-6 text-center text-cyan-500 md:text-xl">
              Junior Front-End Developer
            </h3>
          </div>
          <div className="relative mx-auto mt-10 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-yellow-400">
            <Image
              className="mx-auto"
              src={photo}
              layout="fill"
              objectFit="cover"
              alt="Photo"
            />
          </div>
        </section>
        <section>
          <div className="py-8 text-left">
            <h3 className="py-2 text-2xl dark:text-white">About me</h3>
            <p className="text-sm leading-5 dark:text-white">
              I am a Computer Science student at{" "}
              <span className="text-orange-800"> PJAIT in Gdańsk </span>(4th
              year). I am a passionate Junior Front-End Developer interested in
              building beautiful, functional and mobile-friendly websites. I
              know the basics of HTML/CSS and JavaScript. Currently learning
              ReactJs. My strong skills are creativity, communication and being
              a team player. I am motivated to learn and ready for new
              challenges.
            </p>
            <Education />
          </div>
        </section>
        <h3 className="py-5 text-xl dark:text-white">Technologies</h3>
        <section className="md:px-30 justify-between py-3 text-center md:flex">
          <div className="rounded-xl p-10 shadow-lg dark:bg-white">
            <h2 className="text-md py-1 pt-2 pb-2 text-center text-cyan-500">
              Front-End
            </h2>
            <p className="text-left">HTML</p>
            <p className="text-left">CSS</p>
            <p className="text-left">JavaScript</p>
            <p className="text-left">React</p>
          </div>

          <div className="rounded-xl p-10 shadow-lg dark:bg-white">
            <h2 className="text-md dark:bg-grey-500 py-1 pt-2 pb-2   text-cyan-500">
              Back-end
            </h2>
            <p className="text-left">Java</p>
            <p className="text-left">Spring Boot</p>
            <p className="text-left">C#</p>
            <p className="text-left">.NET</p>
          </div>
          <div className="rounded-xl p-10 shadow-lg dark:bg-white">
            <h2 className="text-md py-1 pt-2 pb-2 text-cyan-500">Others</h2>
            <p className="text-left">MySQL</p>
            <p className="text-left">Visual Studio Code</p>
            <p className="text-left">Intelij</p>
            <p className="text-left">WebStorm</p>
          </div>
        </section>

        <section>
          <div>
            <h3 className="py-2 text-2xl dark:text-white">My projects</h3>
            <p className="py-2 text-sm leading-5 dark:text-white">
              In my project I use HTML, CSS (TailwindCSS), JavaScript with
              React.js. Now I learn Node.js, Next.js and other technologis and
              freameworks.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3">
              <a target="blank" href="http://www.kulig-szymbark.pl ">
                <Image
                  alt="Photo"
                  src={web1}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
            <div className="flex-1 basis-1/3">
              <a
                target="blank"
                href="https://kasiawesierska.github.io/turystycznekaszuby/">
                <Image
                  alt="Photo"
                  src={web3}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
            <div className="flex-1 basis-1/3">
              <a target="blank" href="http://remus-szymbark.pl">
                <Image
                  alt="Photo"
                  src={web2}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
            <div className="flex-1 basis-1/3">
              <a
                target="blank"
                href="https://s13146.github.io/Person-card-Tailwind/">
                <Image
                  alt="Photo"
                  src={web4}
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
        <h3 className="py-2 text-2xl  dark:text-white">Contact</h3>
        <section className="flex justify-around ">
          <div className="">
            <p className="p-5 text-xl text-cyan-500">Katarzyna Węsierska</p>
            <p className="flex p-2 dark:text-white">
              <TfiLocationPin className="mx-2" /> Gdańsk, Poland
            </p>
            <p className="flex p-2 dark:text-white">
              <FiMail className="mx-2" /> +48 724 744 833
            </p>
            <p className="flex p-2 dark:text-white">
              <FiPhone className="mx-2" /> kasiamlynska@op.pl
            </p>
          </div>
          <div>
            <p className="p-5  dark:text-white">Find me on:</p>
            <div className="flex justify-center gap-8 py-3 text-4xl dark:text-white">
              <AiFillLinkedin className="hover:scale-150" />
              <AiFillGithub className="hover:scale-150" />
              <AiFillFacebook className="hover:scale-150" />
            </div>
          </div>
        </section>
        <footer className="p-4">
          <p className="text-center text-sm dark:text-white">
            Katarzyna Węsierska 2022
          </p>
        </footer>
      </main>
    </div>
  );
}
