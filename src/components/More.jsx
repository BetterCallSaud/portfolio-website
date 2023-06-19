import "../Landing.css";
import { Link } from "react-router-dom";

import Brand1 from "../images/brand1.png";
import Brand2 from "../images/brand2.png";
import Brand3 from "../images/brand3.png";

import Work1 from "../images/work1.png";
import Work2 from "../images/work2.png";
import Work3 from "../images/work3.png";

import Circles1 from "../images/circles1.png";
import Circles2 from "../images/circles2.jpeg";

export function More() {
  return (
    <div className="text-center">
      <nav className="w-full h-fit p-5 flex justify-between shadow-md flex-wrap">
        <h1>
          <a href={"/"} className="text-3xl h-8 font-sans navbar-heading">
            saud
          </a>
        </h1>
        <div className="flex flex-wrap">
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
            <Link to={"https://www.linkedin.com/in/saud-hashmi/"} className="text-xl font-sans" target="_blank">
              Resume
            </Link>
          </h1>
        </div>
        <h1>
          <Link
            to={"/book-demo"}
            className="text-lg font-plex text-white bg-black px-3 py-2 rounded-full border-[3px] border-s-red-700 border-t-red-700 border-b-yellow-500 border-e-yellow-500 hover:brightness-125 animation-bounce"
          >
            Book a Demo
          </Link>
        </h1>
      </nav>

      {/* BRANDS */}
      <div id="brands">
        <h1 className="mt-10 font-plex font-semibold text-4xl">Brands</h1>
        <br />
        <p className="text-lg font-plex">
          I am an entrepreneur, building amazing things with amazing people.
          Currently,
          <br />I am building three online brands:{" "}
          <i>BetterCallSaud, Stemble & The Sapient Believer</i>.<br />
          Click on a logo to find out more about the brand.
        </p>
        <div className="flex justify-center mt-20">
          <img
            className="mx-20 h-60"
            src={Brand1}
            alt="better call saud brand"
          />
          <img className="mx-20 h-60" src={Brand2} alt="stemble brand" />
          <img
            className="mx-20 h-60"
            src={Brand3}
            alt="the sapient believer brand"
          />
        </div>
      </div>

      {/* WORK SECTION */}
      <div id="work">
        <h1 className="mt-40 font-plex font-semibold text-4xl">Work</h1>
        <br />
        <p className="font-plex text-lg mb-24">
          Apart from my brands, there are other projects I have worked/been
          working on, and yes, <br />
          the ones listed below are the ones I really care(d) about.
        </p>

        {/* WORK 1 */}
        <div className="flex w-full">
          <div className="w-1/3 bg-black">
            <h1 className="text-6xl text-white font-sans font-semibold text-left m-10">
              <img src={Work1} alt="cscult" />
            </h1>
          </div>
          <div
            style={{
              background:
                "conic-gradient(from 90deg at 34.33% 52.88%, #E543FF 0deg, #20A1FF 110.62deg, #E543FF 360deg)",
            }}
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center"
          >
            <h1 className="text-6xl text-white font-sans font-bold leading-[2.5rem]">
              CSCult
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl">
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
        <div className="flex w-full">
          <div className="w-1/3 bg-black">
            <img className="w-full h-full" src={Work2} alt="unholy ai" />
          </div>
          <div
            style={{
              background:
                "conic-gradient(from 90deg at 34.33% 52.88%, #53AC34 0deg, rgba(192, 255, 170, 0.909774) 279.38deg, #53AC34 360deg)",
            }}
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center"
          >
            <h1 className="text-6xl text-white font-sans font-bold leading-[2.5rem]">
              Unholy.ai
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl">
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
        <div className="flex w-full">
          <div className="w-1/3 bg-red-900 flex flex-row justify-center align-middle">
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
            className="w-2/3 flex flex-col text-left pl-20 py-10 justify-center"
          >
            <h1 className="text-6xl text-white font-sans font-bold">
              Beyond the Boundary Podcast
            </h1>
            <br />
            <br />
            <div
              className="font-sans text-white text-2xl pr-28"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              <p className="text-3xl">
                a unique sports podcast, where I and my co-host go beyond just
                the scores and stats.
              </p>
              <br />
              <a
                rel="noreferrer"
                href="https://youtube.com/@thebtbpodcast"
                target="_blank"
                className="text-lg bg-white text-black p-2 rounded-lg hover:bg-slate-900 hover:text-white duration-200 tracking-widest"
              >
                Visit Podcast
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Circles */}
      <div id="circles">
        <h1 className="mt-40 font-plex font-semibold text-4xl">Circles</h1>
        <br />
        <p className="text-lg font-plex mx-40">
          Apart from building my own thing, I have "circles" where I contribute.
          The <b>E3 Philosophy</b> drives my thinking more than anything else
          (without any doubt, philosophy of Islam first).
        </p>
        <br />
        <p className="text-lg font-plex mx-40">
          Most of my circles are communities that require my leadership skills and OTB
          thinking <i>(look that up if you want).</i>
        </p>
        <div className="mx-40 mt-10 flex flex-row justify-evenly">
          <div className="flex flex-col align-middle">
            <img className="w-60 h-60" src={Circles1} alt="quantumgrad" />
            <br />
            <h1 className="text-2xl font-bold font-plex">QuantumGrad</h1>
          </div>
          <div className="flex flex-col align-middle">
            <img
              className="w-60 h-60 rounded-full"
              src={Circles2}
              alt="gpt bros"
            />
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
