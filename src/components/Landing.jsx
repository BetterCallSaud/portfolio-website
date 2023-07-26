import "../Landing.css";
import { Link } from "react-router-dom";
import JadeSphere from "../images/Jade Sphere.png";
import BigJadeSphere from "../images/Big Jade Sphere.png";
import LandingCover from "../images/LandingCover.png";

const jadeOnHover = () => {
  let bigjade = document.getElementById("bigjade");
  let val = Math.floor(360 * Math.random());
  let angle = val.toString() + "deg";
  bigjade.style.rotate = angle;
};
const jadeOnLeave = () => {
  let bigjade = document.getElementById("bigjade");
  bigjade.style.rotate = "0deg";
};

export function Landing() {

  return (
    <div className="text-center">
    {/* NAVBAR */}
    <nav className="w-full h-fit p-5 flex justify-between align-middle shadow-md">
      <h1>
        <Link to={"/"} className="text-3xl h-8 font-sans navbar-heading">
          saud
        </Link>
      </h1>
      <div>
        <Link to="/more">
          <img
            className="rotate-180 h-10 hover:brightness-150 duration-500 hover:rotate-0 hover:scale-150"
            src={JadeSphere}
            alt="jade sphere"
            title="More about me"
          />
        </Link>
      </div>
    </nav>

    {/* LANDING COVER */}
    <div>
      <img
        src={LandingCover}
        className="brightness-50 w-full h-full"
        alt="landing cover"
      />
    </div>

    <div className="flex justify-center align-center mb-20 sm:mb-10">
      <div className="-bottom-10 md:absolute text-center">
        <h1 className="font-serif md:text-7xl text-black mt-8 sm:mb-4 text-4xl md:text-white">Saud Hashmi</h1>
        <h1 className="font-sans md:text-white text-black max-md:text-white text-xl md:text-3xl bg-slate-900/80 py-2 px-4">
          Decoding the <span style={{ color: "#FF4343" }}>Human</span>{" "}
          <span style={{ color: "#FFC120" }}>Race</span> with{" "}
          <span
            style={{ backgroundColor: "#4763C8", color: "white" }}
            className="font-aw px-1 rounded-md"
          >
            E3
          </span>
        </h1>
      </div>
    </div>

    {/* WHO AM I */}
    <h1 className="font-plex sm:text-4xl text-3xl">Who am I?</h1>
    <h1 className="font-plex text-xl">(keep scrolling)</h1>
    <br />
    <div className="flex justify-center mb-20">
      <iframe
      className="max-sm:w-full max-sm:h-60"
        width="960"
        height="540"
        src="https://www.youtube.com/embed/-RHqRPDOV-g"
        title="I AM BACK! (finally doing it)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    {/* WHAT IS E3? */}
    <div className="flex w-full mb-20 max-sm:flex-col">
      <div className="w-1/3 bg-black max-sm:w-full">
        <h1 className="text-6xl text-white font-sans font-semibold text-left m-10 max-sm:text-4xl max-sm:text-center">
          What is <br /> E3?
        </h1>
      </div>
      <div
        style={{
          background:
            "conic-gradient(from 90deg at 34.33% 52.88%, #FF4343 0deg, #FFC120 283.13deg, #FF4343 360deg)",
        }}
        className="w-2/3 text-left pl-20 py-10 max-sm:w-full max-sm:text-center max-sm:pl-0"
      >
        <h1 className="text-5xl font-sans font-bold leading-[2.5rem] max-sm:text-4xl">
          EDUC.
          <br />
          ENGG.
          <br />
          ESHIP.
        </h1>
        <br />
        <br />
        <div
          className="font-sans text-white text-2xl pr-28 max-sm:p-0 max-sm:mx-8 max-sm:text-lg"
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <p>
            What do I mean when I say “Decoding the Human Race with E3”? I am a
            firm believer in my species and with the power trio of E3, humans
            can rapidly progress through our modern times.
          </p>
          <br />
          <p>
            <b>Education</b> empowers your thinking and personality.<br />
            <b>Engineering</b> makes you a problem-solver. <br />
            <b>Entrepreneurship</b> builds you into a decision-maker. 
          </p>
        </div>
      </div>
    </div>

    {/* WHAT ELSE */}
    <div>
      <h1 className="font-plex text-4xl">What else?</h1>
      <h1 className="font-plex text-xl max-sm:mx-4 max-sm:text-lg max-sm:mt-2">
        Click on the Jade Sphere in the Navbar to find out more!
      </h1>
      <h1 className="font-plex text-md max-sm:mx-4 max-sm:text-md max-sm:mt-2 text-gray-800">
        (assuming you know what a Navbar is... the thing at the top of any website 🙂)
      </h1>
      <div className="flex justify-center mt-10">
        <img
          id="bigjade"
          src={BigJadeSphere}
          className="w-1/4 hover:brightness-150 duration-100"
          onMouseOver={jadeOnHover}
          onMouseLeave={jadeOnLeave}
          alt="big jade sphere"
        />
      </div>
    </div>

    <footer className="mt-16 font-plex bg-indigo-500 text-white p-2">
        Copyright 2023 © Saud Hashmi. All Rights Reserved.
      </footer>
  </div>
  )
}
