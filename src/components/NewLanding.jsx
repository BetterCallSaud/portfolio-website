import { Link } from "react-router-dom";
import { useState } from "react";

import ProfilePic from "../images/profilepic.jpg";
import OtherPic from "../images/otherpic.jpg";

import Brand1 from "../images/brand1.png";
import Brand2 from "../images/brand2.png";
import Brand3 from "../images/brand3.png";
import Brand4 from "../images/brand4.jpg";
import Brand5 from "../images/brand5.png";

import Work1 from "../images/work1.png";
import Work2 from "../images/work2.png";
import Work3 from "../images/work3.png";
import Work4 from "../images/work4.png";
import Work5 from "../images/work5.png";

import InstagramIcon from "../images/instagram_icon.png";
import YouTubeIcon from "../images/youtube_icon.png";

const intros = {
  professional:
    "Saud is an educator, engineer and entrepreneur (E3) working towards creating real social value in the ventures he is involved in. He bases his work on the E3 philosophy, a strong set of tenets he lives by in his professional life. Primarily, he has an engineering background in computer science, which means he is just as comfortable with building AI models, as he is with developing designs & websites. What makes him unique is his persistence to learn and build whatever is required.",
  brofessional:
    "Not to show-off, but I am a self-declared polymath. That means I am skilled to do multiple things. To wit, I am a developer, engineer, public speaker, content creator, researcher, musician, fitness freak, the works. It's hard to wrap up what I am passionate about in a single paragraph, but I wanna put it this way: I am interested in the important things concerning the human race.",
  "ai-generated":
    "Saud embodies a fusion of education, engineering, and entrepreneurship (E3) to drive meaningful progress for humanity. What sets him apart is his unwavering dedication to acquiring and applying knowledge across diverse domains. His passion lies in addressing pivotal issues concerning the human race. Saud's multifaceted pursuits reflect a deep commitment to advancing our collective understanding and well-being.",
};

export default function NewLanding() {
  const [introductionText, setIntroductionText] = useState(
    intros["professional"]
  );
  const renderIntroduction = (value) => {
    setIntroductionText(intros[value]);
  };

  return (
    <div className="text-center font-sans">
      {/* NAVBAR */}
      {/* <nav className="w-full h-fit p-5 flex justify-between max-md:justify-center shadow-md flex-wrap">
        <h1>
          <Link to={"/"} className="text-3xl h-8 font-sans navbar-heading">
            saud
          </Link>
        </h1>
        <div>
          <Link to="/more">More</Link>
        </div>
      </nav> */}

      <h1 className="font-apple font-bold md:text-7xl text-black mt-16 sm:mb-4 text-4xl md:text-black max-md:mx-4">
        Saud Hashmi, <span className="navbar-heading">my name is.</span>
      </h1>
      <h1 className="text-xl font-sans">
        (no, I ain't braindead, it's a Star Wars reference 🙃)
      </h1>

      {/* INTRODUCTION */}
      <section className="flex justify-evenly mt-20 mx-20 max-md:flex-col max-md:mx-10">
        <div className="w-1/3 max-md:mb-20 max-md:w-full max-md:flex max-md:justify-center">
          <img
            className="shadow-xl shadow-indigo-300 hover:translate-x-6 hover:translate-y-6 duration-500"
            src={ProfilePic}
            alt=""
          />
        </div>
        <div className="flex w-2/3 flex-col items-start gap-4 max-md:w-fit max-md:items-center">
          <h1 className="text-xl font-bold text-center">
            ⏬ I'm not good at introductions, so choose whichever option you
            prefer
          </h1>
          <div className="flex gap-2 max-md:flex-col max-md:justify-center">
            <button
              onClick={() => renderIntroduction("professional")}
              className="bg-blue-300 text-slate-800 p-2 font-bold font-apple rounded-md hover:shadow-lg"
            >
              Professional
            </button>
            <button
              onClick={() => renderIntroduction("brofessional")}
              className="bg-green-300 text-slate-800 p-2 font-bold font-apple rounded-md hover:shadow-lg"
            >
              Brofessional
            </button>
            <button
              onClick={() => renderIntroduction("ai-generated")}
              className="bg-violet-300 text-slate-800 p-2 font-bold font-apple rounded-md hover:shadow-lg"
            >
              AI-Generated
            </button>
          </div>
          <p className="text-left italic max-md:mt-8 max-md:text-justify">{introductionText}</p>
        </div>
      </section>

      {/* WHAT IS E3? */}
      <section className="mt-32">
        <h1 className="text-5xl font-apple font-bold">
          I mention <span className="text-yellow-500">E3</span> often. What is
          that?
        </h1>

        <div className="flex w-full mt-10 mb-20 max-md:flex-col">
          <div className="w-1/3 bg-black max-md:w-full">
            <h1 className="text-6xl text-white font-sans font-semibold text-left m-10 max-md:text-4xl max-md:text-center">
              What is <br /> E3?
            </h1>
          </div>
          <div
            style={{
              background:
                "conic-gradient(from 90deg at 34.33% 52.88%, #FF4343 0deg, #FFC120 283.13deg, #FF4343 360deg)",
            }}
            className="w-2/3 text-left pl-20 py-10 max-md:w-full max-md:text-center max-md:pl-0"
          >
            <h1 className="text-5xl font-sans font-bold leading-[2.5rem] max-md:text-4xl">
              EDUC.
              <br />
              ENGG.
              <br />
              ESHIP.
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28 max-md:p-0 max-md:mx-8 max-md:text-lg"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p>
                I am a firm believer in my species and with the power trio of
                E3, humans can rapidly progress through our modern times.
              </p>
              <br />
              <p>
                <b>Education</b> empowers your thinking and personality.
                <br />
                <b>Engineering</b> makes you a problem-solver. <br />
                <b>Entrepreneurship</b> builds you into a decision-maker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="justify-evenly mt-20 mx-20 max-md:mx-10">
        <h1 className="text-5xl font-apple font-bold">
          It's clear by now:{" "}
          <u>
            I <span style={{ color: "red" }}>❤</span> the human race
          </u>
        </h1>
        <br />
        <p className="text-2xl max-md:text-xl">
          My love for my kind is the base of my interests. To wit, I am
          interested in the important things concerning the human race.{" "}
          <b>
            Science, technology, engineering, arts, humanities, sports, pop
            culture, etc.
          </b>{" "}
          I am not doing justice to my interests by confining them to a few
          keywords. So...
        </p>
        <p className="text-center mt-10 w-full bg-indigo-400 p-2 text-white font-bold">
          💡 try hovering over the graph nodes below
        </p>
        <iframe
          src="https://flo.uri.sh/visualisation/15270187/embed"
          title="Interactive or visual content"
          className="flourish-embed-iframe border-2 border-indigo-300"
          frameborder="0"
          style={{ width: "100%", height: "600px" }}
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <div
          style={{
            width: "100% !important",
            marginTop: "4px !important",
            textAlign: "right !important",
          }}
        >
          <a
            className="flourish-credit"
            href="https://public.flourish.studio/visualisation/15270187/?utm_source=embed&utm_campaign=visualisation/15270187"
            target="_top"
            style={{ textDecoration: "none !important" }}
          >
            <img
              alt="Made with Flourish"
              src="https://public.flourish.studio/resources/made_with_flourish.svg"
              style={{
                width: "105px!important",
                height: "16px!important",
                border: "none!important",
                margin: "0!important",
              }}
            />{" "}
          </a>
        </div>
        <p className="mt-8 text-2xl max-md:text-xl">
          Oh that reminds me, here's my <Link className="hover:underline decoration-dotted font-bold text-indigo-400" to="/library">Library</Link> so far. It could also give you an idea of what things I am interested in.
        </p>
      </section>

      {/* WORK */}
      <section className="justify-evenly mt-20">
        <h1 className="mb-20 text-5xl font-apple font-bold mx-10">
          Now that you know a little about me, <br />
          let me share my <span className="navbar-heading">work</span>.
        </h1>

        {/* BRANDS */}
        <div id="brands" className="mx-20 max-md:mx-10">
          <h1 className="mt-10 font-apple font-semibold text-4xl">Brands</h1>
          <br />
          <p className="text-lg font-sans max-md:text-xl">
            I am an entrepreneur, building amazing things with amazing humans
            and artificial intelligence. Currently,
            <br />I am building five online brands:{" "}
            <i>
              BetterCallSaud, Stemble, The Sapient Believer, GPT_Bros Media and
              Beyond the Boundary Podcast
            </i>
            .<br />
            {/* Click on a logo to find out more about the brand. */}
          </p>
          <div className="flex gap-4 justify-center mt-20 max-md:flex-col max-md:mx-8 max-md:items-center">
            {/* BETTER CALL SAUD */}
            <div className="max-lg:my-4">
              <img
                className="mb-4 w-full"
                src={Brand1}
                alt="better call saud brand"
              />
              <div className="flex justify-evenly gap-2">
                <a
                  href="https://instagram.com/btrcallsaud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={InstagramIcon}
                    alt="better call saud instagram handle"
                  />
                </a>
                <a
                  href="https://youtube.com/@BetterCallSaud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={YouTubeIcon}
                    alt="better call saud youtube channel"
                  />
                </a>
              </div>
            </div>

            {/* STEMBLE */}
            <div className="max-lg:my-4">
              <img className="mb-4 w-full" src={Brand2} alt="stemble brand" />
              <div className="flex justify-evenly gap-2">
                <a
                  href="https://instagram.com/stemble_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={InstagramIcon} alt="stemble instagram handle" />
                </a>
                <a
                  href="https://youtube.com/@Stemble_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={YouTubeIcon} alt="stemble youtube channel" />
                </a>
              </div>
            </div>

            {/* THE SAPIENT BELIEVER */}
            <div className="max-lg:my-4">
              <img
                className="mb-4 w-full"
                src={Brand3}
                alt="the sapient believer brand"
              />
              <div className="flex justify-evenly gap-2">
                <a
                  href="https://instagram.com/thesapientbeliever"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={InstagramIcon}
                    alt="the sapient believer instagram handle"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@TheSapientBeliever"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={YouTubeIcon}
                    alt="the sapient believer youtube channel"
                  />
                </a>
              </div>
            </div>

            {/* GPT BROS MEDIA */}
            <div className="max-lg:my-4">
              <img
                className="mb-4 w-full rounded-xl"
                src={Brand4}
                alt="gpt bros media brand"
              />
              <div className="flex justify-evenly gap-2">
                <a
                  href="https://instagram.com/gptbros_media"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={InstagramIcon}
                    alt="gpt bros media instagram handle"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@GPTBrosMedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={YouTubeIcon} alt="gpt bros media youtube channel" />
                </a>
              </div>
            </div>

            {/* BTB PODCAST */}
            <div className="max-lg:my-4">
              <img
                className="mb-4 w-full rounded-xl"
                src={Brand5}
                alt="btb podcast brand"
              />
              <div className="flex justify-evenly gap-2">
                <a
                  href="https://instagram.com/beyondtheboundarypodcast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={InstagramIcon}
                    alt="gpt bros media instagram handle"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@thebtbpodcast"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={YouTubeIcon} alt="gpt bros media youtube channel" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WORK */}
        <div id="work">
          <h1 className="mt-28 font-apple font-semibold text-4xl">Work</h1>
          <br />
          <p className="font-sans text-lg mb-2 max-md:text-xl max-md:mx-10">
            Apart from my brands, there are other projects I have worked/been
            working on, and yes, <br />
            the ones listed below are the ones I really care(d) about.
          </p>
          <p className="font-sans text-lg mb-12 max-md:text-xl max-md:mt-8 max-md:mx-10">
            To look at more of what I have done, visit my{" "}
            <a
              className="text-blue-700 underline font-bold"
              href="https://github.com/BetterCallSaud"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            , or check out my{" "}
            <Link
              className="text-blue-700 underline font-bold"
              to="/resume"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </Link>
            . <b>Whatever you like.</b>
          </p>

          {/* WORK 1 */}
          <div className="flex w-full max-md:flex-col">
            <div className="w-1/3 bg-black max-md:w-full">
              <img className="" src={Work1} alt="cscult" />
            </div>
            <div
              style={{
                background:
                  "conic-gradient(from 90deg at 34.33% 52.88%, #E543FF 0deg, #20A1FF 110.62deg, #E543FF 360deg)",
              }}
              className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-md:w-full max-md:text-center max-md:pl-0"
            >
              <h1 className="text-6xl text-white font-sans font-bold leading-[2.5rem] max-md:text-4xl">
                CSCult
              </h1>
              <br />
              <br />
              <div
                className="font-sans text-white text-2xl pr-28 max-md:pr-0 max-md:mr-4"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-3xl max-md:text-2xl max-md:mx-4">
                  CSCult (was) the most successful online community in Medi-Caps
                  University
                </p>
                <br />
                <a
                  rel="noreferrer"
                  href="https://cscult.vercel.app"
                  target="_blank"
                  className="text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* WORK 2 */}
          <div className="flex w-full max-md:flex-col max-md:mt-8">
            <div className="w-1/3 bg-black max-md:w-full">
              <img className="w-full h-full" src={Work2} alt="unholy ai" />
            </div>
            <div
              style={{
                background:
                  "conic-gradient(from 90deg at 34.33% 52.88%, #53AC34 0deg, rgba(192, 255, 170, 0.909774) 279.38deg, #53AC34 360deg)",
              }}
              className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-md:w-full max-md:text-center max-md:pl-0"
            >
              <h1 className="text-6xl text-white font-sans font-bold leading-[2.5rem] max-md:text-4xl max-md:text-black">
                Unholy.ai
              </h1>
              <br />
              <br />
              <div
                className="font-sans text-white max-md:text-black text-2xl pr-28 max-md:pr-0 max-md:mr-4"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-3xl max-md:text-2xl max-md:mx-4">
                  an AI tool that determines whether a song has “unholy” themes
                  or elements
                </p>
                <br />
                <a
                  rel="noreferrer"
                  href="https://unholyai.vercel.app"
                  target="_blank"
                  className="text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
                >
                  Try Now
                </a>
              </div>
            </div>
          </div>

          {/* WORK 3 */}
          <div className="flex w-full max-md:flex-col max-md:mt-8">
            <div className="w-1/3 bg-red-900 flex flex-row justify-center align-middle max-md:w-full">
              <img src={Work3} alt="beyond the boundary podcast" />
            </div>
            <div
              style={{
                background:
                  "conic-gradient(from 25deg at 44.33% 60%, #FF9C2A 45.7227828502655deg, #3954E8 39.90549087524414deg)",
              }}
              className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-md:w-full max-md:pl-0 max-md:text-center"
            >
              <h1 className="text-6xl text-white font-sans font-bold max-md:text-4xl">
                Beyond the Boundary Podcast
              </h1>
              <br />
              <br />
              <div
                className="font-sans text-white text-2xl pr-28 max-md:pr-0 max-md:mr-4"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-3xl max-md:text-2xl max-md:mx-4">
                  a unique sports podcast, where I and my co-host go beyond just
                  the scores and stats.
                </p>
                <br />
                <div className="flex max-md:justify-center">
                  <a
                    rel="noreferrer"
                    href="https://youtube.com/@thebtbpodcast"
                    target="_blank"
                    className="mr-4 text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
                  >
                    Visit Podcast
                  </a>
                  <a
                    rel="noreferrer"
                    href="https://instagram.com/beyondtheboundarypodcast/reels"
                    target="_blank"
                    className="mr-4 text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
                  >
                    Visit Reels
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WORK 4 */}
          <div className="flex w-full max-md:flex-col max-md:mt-8">
            <div className="w-1/3 bg-black flex flex-row justify-center align-middle max-md:w-full">
              <img className="scale-75" src={Work4} alt="audio2subs" />
            </div>
            <div
              style={{
                background: "rgba(39, 39, 39, 1)",
              }}
              className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-md:w-full max-md:pl-0 max-md:text-center"
            >
              <h1 className="text-6xl text-white font-sans font-bold max-md:text-4xl">
                audio2subs
              </h1>
              <br />
              <br />
              <div
                className="font-sans text-white text-2xl pr-28 max-md:pr-0 max-md:mr-4"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                <p className="text-3xl max-md:text-2xl max-md:mx-4">
                  an AI tool that transcribes audio into single-word timestamped
                  subtitles, ready to be used for buzzing content creation
                </p>
                <br />
                <a
                  rel="noreferrer"
                  href="https://audio2subs.vercel.app"
                  target="_blank"
                  className="text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          {/* WORK 5 */}
          <div className="flex w-full max-md:flex-col max-md:mt-8">
            <div className="w-1/3 bg-[#fc744c] flex flex-row justify-center align-middle max-md:w-full">
              <img className="scale-75" src={Work5} alt="meewz" />
            </div>
            <div className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-md:w-full max-md:pl-0 max-md:text-center bg-[#ff501b]">
              <h1 className="text-6xl text-white font-sans font-bold max-md:text-4xl">
                Meewz
              </h1>
              <br />
              <br />
              <div className="font-sans text-white text-2xl pr-28 max-md:pr-0 max-md:mr-4">
                <p className="text-3xl max-md:text-2xl max-md:mx-4">
                  Meewz is a fun platform that serves you the latest SMART news
                  in the form of memes and gag content. With the power of AI, we
                  curate the best form of news and integrate it into memes that
                  you will appreciate.
                </p>
                <br />
                <a
                  rel="noreferrer"
                  href="https://meewz.com"
                  target="_blank"
                  className="text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ELSE? */}
      <section className="justify-between mt-20">
        <h1 className="mb-4 text-5xl font-apple font-bold max-md:text-4xl">
          What else interesting here?
        </h1>
        <h1 className="text-2xl mx-40 font-apple max-md:mx-10 max-md:text-xl">
          I showed you my interests (if you took a quick peak), brands and
          projects. <br />I have a few more things to share before we conclude
          my portfolio.
        </h1>
        <div className="flex mt-16 justify-evenly mx-20 max-md:mx-8 max-md:flex-col-reverse">
          <div className="flex w-2/3 flex-col items-start mr-12 gap-4 max-md:w-fit max-md:mx-10 max-md:items-center">
            <h1 className="text-2xl text-left">
              🏆 <b className="underline">Achievements (timeline order)</b>
            </h1>
            <div className="text-justify">
              <li>
                <b>Merit Panelist</b> at Dainik Bhaskar's Junior Editor II
              </li>
              <li>Winner of Best Idea at Junior Bal Vigyan 2016</li>
              <li>
                Helped establish the biggest tech club at Medi-Caps University,
                quit it coz of politics, created a much better decentralized
                version of a tech community <b>(see CSCult above)</b>
              </li>
              <li>
                Selected for GitHub's 1st ever <b>Field Day</b> in India
              </li>
              <li>
                Attended <b>Indian Institute of Astrophysics'</b> Summer School
                2022
              </li>
              <li>
                Got into short content creation. Here's some rough stats so far:<br/>
                <span className="ml-6 px-2 bg-blue-200 rounded-full text-black font-bold tracking-wider">
                  2M+ plays, 100K+ likes, 300+ videos
                </span>
              </li>
            </div>
            <h1 className="text-2xl mt-4 text-left">
              🎯 <b className="underline">Goals (2023-24)</b>
            </h1>
            <div className="text-left">
              <li><b>Learning Goals:</b> The art of management, more history, more about the NFL and F1, neurosymbolic and interactive AI</li>
              <li><b>Building Goals:</b> Amazing AI SaaS w/ ppl like <a className="font-bold text-blue-600 decoration-dotted underline underline-offset-4" href="https://twitter.com/iamHammadNasir" target="_blank" rel="noreferrer">@iamHammadNasir</a> and <a className="font-bold text-blue-600 decoration-dotted underline underline-offset-4" href="https://twitter.com/heysaqh" target="_blank" rel="noreferrer">@heysaqh</a>, bigger professional network, a quantum tech project, Stemble's <a className="font-bold text-violet-700 decoration-dashed underline underline-offset-4" href="https://www.youtube.com/@stemble_/playlists" target="_blank" rel="noreferrer">Nerding It Down!</a> breakdown series and an <b className="text-green-500">Islamic Atlas series</b> for The Sapient Believer channel.</li>
            </div>
          </div>
          <div className="flex items-center justify-end w-1/3 max-md:mb-10 max-md:w-full max-md:justify-center">
            <img
              className="shadow-xl shadow-indigo-300 h-fit hover:translate-x-6 hover:translate-y-6 duration-500"
              src={OtherPic}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="mt-28">
        <h1 className="mb-4 text-5xl font-apple font-bold max-md:text-4xl">
          Let's connect! 🍕
        </h1>
        <h1 className="text-2xl mx-40 font-apple max-md:mx-8">
          If you want to offer me a high-paying job 😏, connect with me for your own reasons 🙄, or perhaps get into an intellectual conversation, here are my socials.
        </h1>
        <div className="mt-10 text-xl flex justify-evenly sm:mx-40 font-sans max-md:flex-col max-md:mx-20">
            <Link className="bg-blue-800 hover:bg-blue-600 text-white py-2 px-3 rounded-full my-4" to="https://linkedin.com/in/saud-hashmi">LinkedIn</Link>
            <Link className="bg-gradient-to-br from-pink-600 to-yellow-500 text-white hover:from-pink-500 hover:to-yellow-400 py-2 px-3 rounded-full my-4" to="https://instagram.com/btrcallsaud">Instagram</Link>
            <Link className="bg-black text-white hover:bg-white hover:text-black hover:shadow-md py-2 px-3 rounded-full my-4" to="https://threads.net/@btrcallsaud">Threads</Link>
            <Link className="bg-sky-500 hover:bg-sky-400 text-white py-2 px-3 rounded-full my-4" to="https://twitter.com/@BtrCallSaud">Twitter{"(𝕏)"}</Link>
            <Link className="bg-slate-800 hover:bg-slate-600 text-white py-2 px-3 rounded-full my-4" to="https://linkedin.com/in/saud-hashmi">GitHub</Link>
        </div>
        <Link className="bg-green-600 flex mx-60 max-md:mx-10 justify-center font-bold text-lg hover:bg-green-500 text-white py-2 px-3 rounded-full my-4" to="/resume" target="_blank">Resume (only for recruiters)</Link>

        <h1 className="text-2xl mt-10 font-apple max-md:mx-10">
          also, yeah, not gonna give out my number (hehe). so here are more ways to reach me.
        </h1>
        <div className="mt-10 text-xl flex justify-evenly sm:mx-40 font-sans max-md:flex-col">
            <h1 className="text-indigo-600 ">
                <b>Discord:</b>
                <span>@btrcallsaud</span>
            </h1>
            <h1 className="text-slate-600 ">
                <b>Mail:</b>
                <span>hashmisaud10@gmail.com</span>
            </h1>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 font-apple bg-indigo-500 text-white p-2">
        Copyright 2023 © Saud Hashmi. All Rights Reserved.
      </footer>
    </div>
  );
}
