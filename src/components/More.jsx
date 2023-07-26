import "../Landing.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import Brand1 from "../images/brand1.png";
import Brand2 from "../images/brand2.png";
import Brand3 from "../images/brand3.png";
import Brand4 from "../images/brand4.png";
import InstagramIcon from "../images/instagram_icon.png";
import YouTubeIcon from "../images/youtube_icon.png";

import Work1 from "../images/work1.png";
import Work2 from "../images/work2.png";
import Work3 from "../images/work3.png";
import Work4 from "../images/work4.png";

import Circles1 from "../images/circles1.png";
import Circles2 from "../images/circles2.jpeg";

export function More() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-center">
      <nav className="w-full h-fit p-5 flex justify-between max-sm:justify-center shadow-md flex-wrap">
        <div className="flex justify-between items-center">
          <h1>
            <a href={"/"} className="text-3xl h-8 font-sans navbar-heading">
              saud
            </a>
          </h1>
          <button
            className="ml-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 max-sm:block hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3ZM3 3V5H21V3H3Z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`mt-4 lg:mt-0 ${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:flex-wrap lg:justify-center flex flex-wrap justify-center`}
        >
          <h1 className="mx-8 mt-1 hover:text-slate-700">
            <a href={"#brands"} className="text-xl font-sans">
              Brands
            </a>
          </h1>
          <h1 className="mx-8 mt-1 hover:text-slate-700">
            <a href={"#work"} className="text-xl font-sans">
              Work
            </a>
          </h1>
          <h1 className="mx-8 mt-1 hover:text-slate-700">
            <a href={"#circles"} className="text-xl font-sans">
              Circles
            </a>
          </h1>
          <h1 className="mx-8 mt-1 hover:text-slate-700">
            <a href={"/library"} className="text-xl font-sans">
              Library
            </a>
          </h1>
          <h1 className="mx-8 mt-1 hover:text-slate-700">
            <Link
              to={"https://www.linkedin.com/in/saud-hashmi/"}
              className="text-xl font-sans"
              target="_blank"
            >
              Resume
            </Link>
          </h1>
          <h1 className="mx-8 mt-1 max-sm:mt-4 hover:text-slate-700">
            <Link
              to={"/book-demo"}
              className="text-lg font-plex text-white bg-black px-3 py-2 rounded-full border-[3px] border-s-red-700 border-t-red-700 border-b-yellow-500 border-e-yellow-500 hover:brightness-125 animation-bounce"
            >
              Book a Demo
            </Link>
          </h1>
        </div>
      </nav>

      {/* BRANDS */}
      <div id="brands">
        <h1 className="mt-10 font-plex font-semibold text-4xl">Brands</h1>
        <br />
        <p className="text-lg font-plex max-sm:text-base max-sm:mr-8">
          I am an entrepreneur, building amazing things with amazing humans and artificial intelligence.
          Currently,
          <br />I am building four online brands:{" "}
          <i>BetterCallSaud, Stemble, The Sapient Believer and GPT Bros Media</i>.<br />
          {/* Click on a logo to find out more about the brand. */}
        </p>
        <div className="flex justify-center mt-20 max-lg:flex-col max-md:w-full">
          {/* BETTER CALL SAUD */}
          <div className="mx-10 max-lg:my-4">
            <img
              className="mb-4 w-full"
              src={Brand1}
              alt="better call saud brand"
            />
            <div className="flex justify-evenly mx-20">
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
                <img src={YouTubeIcon} alt="better call saud youtube channel" />
              </a>
            </div>
          </div>

          {/* STEMBLE */}
          <div className="mx-10 max-lg:my-4">
            <img
              className="mb-4 w-full"
              src={Brand2}
              alt="stemble brand"
            />
            <div className="flex justify-evenly mx-20">
              <a
                href="https://instagram.com/stemble_"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={InstagramIcon}
                  alt="stemble instagram handle"
                />
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
          <div className="mx-10 max-lg:my-4">
            <img
              className="mb-4 w-full"
              src={Brand3}
              alt="the sapient believer brand"
            />
            <div className="flex justify-evenly mx-20">
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
                <img src={YouTubeIcon} alt="the sapient believer youtube channel" />
              </a>
            </div>
          </div>

          {/* GPT BROS MEDIA */}
          <div className="mx-10 max-lg:my-4">
            <img
              className="mb-4 w-full"
              src={Brand4}
              alt="gpt bros media brand"
            />
            <div className="flex justify-evenly mx-20">
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
        </div>
      </div>

      {/* WORK SECTION */}
      <div id="work">
        <h1 className="mt-40 font-plex font-semibold text-4xl">Work</h1>
        <br />
        <p className="font-plex text-lg mb-24 max-sm:text-base max-sm:mx-8">
          Apart from my brands, there are other projects I have worked/been
          working on, and yes, <br />
          the ones listed below are the ones I really care(d) about.
        </p>

        {/* WORK 1 */}
        <div className="flex w-full max-sm:flex-col">
          <div className="w-1/3 bg-black max-sm:w-full">
            <img className="" src={Work1} alt="cscult" />
          </div>
          <div
            style={{
              background:
                "conic-gradient(from 90deg at 34.33% 52.88%, #E543FF 0deg, #20A1FF 110.62deg, #E543FF 360deg)",
            }}
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-sm:w-full max-sm:text-center max-sm:pl-0"
          >
            <h1 className="text-6xl text-white font-sans font-bold leading-[2.5rem] max-sm:text-4xl">
              CSCult
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28 max-sm:pr-0 max-sm:mr-4"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl max-sm:text-2xl">
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
        <div className="flex w-full max-sm:flex-col max-sm:mt-8">
          <div className="w-1/3 bg-black max-sm:w-full">
            <img className="w-full h-full" src={Work2} alt="unholy ai" />
          </div>
          <div
            style={{
              background:
                "conic-gradient(from 90deg at 34.33% 52.88%, #53AC34 0deg, rgba(192, 255, 170, 0.909774) 279.38deg, #53AC34 360deg)",
            }}
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-sm:w-full max-sm:text-center max-sm:pl-0"
          >
            <h1 className="text-6xl text-white font-sans font-bold leading-[2.5rem] max-sm:text-4xl max-sm:text-black">
              Unholy.ai
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28 max-sm:pr-0 max-sm:mr-4"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl max-sm:text-2xl">
                an AI tool that determines whether a song has “unholy” themes or
                elements
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
        <div className="flex w-full max-sm:flex-col max-sm:mt-8">
          <div className="w-1/3 bg-red-900 flex flex-row justify-center align-middle max-sm:w-full">
            <img
              className="scale-75"
              src={Work3}
              alt="beyond the boundary podcast"
            />
          </div>
          <div
            style={{
              background:
                "conic-gradient(from 90deg at 34.33% 52.88%, rgba(218, 0, 0, 0.909774) -20.09deg, #FFD827 136.72deg, rgba(218, 0, 0, 0.909774) 339.91deg, #FFD827 496.72deg)",
            }}
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-sm:w-full max-sm:pl-0 max-sm:text-center"
          >
            <h1 className="text-6xl text-white font-sans font-bold max-sm:text-4xl">
              Beyond the Boundary Podcast
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28 max-sm:pr-0 max-sm:mr-4"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl max-sm:text-2xl">
                a unique sports podcast, where I and my co-host go beyond just
                the scores and stats.
              </p>
              <br />
              <div className="flex max-sm:justify-center">
              <a
                rel="noreferrer"
                href="https://youtube.com/@thebtbpodcast"
                target="_blank"
                className="mr-4 text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
              >
                Visit Podcast
              </a><a
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
        <div className="flex w-full max-sm:flex-col max-sm:mt-8">
          <div className="w-1/3 bg-black flex flex-row justify-center align-middle max-sm:w-full">
          <img
              className="scale-75"
              src={Work4}
              alt="audio2subs"
            />
          </div>
          <div
            style={{
              background:
                "rgba(39, 39, 39, 1)",
            }}
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center max-sm:w-full max-sm:pl-0 max-sm:text-center"
          >
            <h1 className="text-6xl text-white font-sans font-bold max-sm:text-4xl">
              audio2Subs
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28 max-sm:pr-0 max-sm:mr-4"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl max-sm:text-2xl">
                an AI tool that transcribes audio into single-word timestamped subtitles, ready to be used for buzzing content creation
              </p><br/>
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


      </div>

      {/* Circles */}
      <div id="circles">
        <h1 className="mt-20 font-plex font-semibold text-4xl">Circles</h1>
        <br />
        <p className="text-lg font-plex max-sm:mx-8 sm:mx-40">
          Apart from building my own thing, I have "circles" where I contribute.
          The <b>E3 Philosophy</b> drives my thinking more than anything else
          (without any doubt, philosophy of Islam first).
        </p>
        <br />
        <p className="text-lg font-plex max-sm:mx-8 sm:mx-40">
          Most of my circles are communities that require my leadership skills
          and OTB thinking <i>(look that up if you want).</i>
        </p>
        <div className="sm:mx-40 mt-10 flex flex-row justify-evenly align-middle max-sm:flex-col">
          <div className="flex flex-col align-middle max-sm:my-8 max-sm:justify-center">
            <div className="flex justify-center">
              <img className="w-60 h-60" src={Circles1} alt="quantumgrad" />
            </div>
            <br />
            <h1 className="text-2xl font-bold font-plex">QuantumGrad</h1>
          </div>

          <div className="flex flex-col align-middle max-sm:my-8">
            <div className="flex justify-center">
              <img
                className="w-60 h-60 rounded-full"
                src={Circles2}
                alt="gpt bros"
              />
            </div>
            <br />
            <h1 className="text-2xl font-bold font-plex">GPT_Bros</h1>
          </div>
        </div>
        <p className="text-lg font-plex"></p>
      </div>

      <footer className="mt-16 font-plex bg-indigo-500 text-white p-2">
        Copyright 2023 © Saud Hashmi. All Rights Reserved.
      </footer>
    </div>
  );
}
