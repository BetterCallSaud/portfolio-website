import { Link } from "react-router-dom";
import BookMeImage from "../images/book demo image.jpg";

export function BookDemo() {
  window.scrollTo(0, 0);

  return (
    <div className="text-center">
      <nav className="w-full h-fit p-5 flex justify-center align-middle shadow-md">
        <h1>
          <Link to={"/"} className="text-3xl h-8 font-sans navbar-heading">
            saud
          </Link>
        </h1>
      </nav>

      <h1 className="mt-20 font-plex text-4xl font-bold">Book a Demo</h1>
      <h1 className="font-sans font-light text-xl">
        (Booking a demo to what exactly?)
      </h1>
      <br />

      <p className="text-lg font-plex max-sm:mx-10">
        You can book a demo to inquire about any of my{" "}
        <Link to="/more#brands" className="text-blue-700 underline">
          brands
        </Link>
        ,{" "}
        <Link to="/more#work" className="text-blue-700 underline">
          work
        </Link>
        ,{" "}
        <Link to="/more#circles" className="text-blue-700 underline">
          circles
        </Link>
        , or even <b>me!</b>
      </p>

      <div className="mt-10 flex justify-center">
        <img
          src={BookMeImage}
          className="h-96 border-8 border-t-yellow-500 border-l-yellow-500 border-r-red-500 border-b-red-500"
          alt="it's your boy"
        />
      </div>

        <h1 className="mt-20 font-bold underline text-3xl font-sans">Find Me Here</h1>
        <div className="mt-10 text-xl flex justify-evenly sm:mx-40 font-sans max-sm:flex-col max-sm:mx-20">
            <Link className="bg-blue-800 hover:bg-blue-600 text-white py-2 px-3 rounded-full my-4" to="https://linkedin.com/in/saud-hashmi">LinkedIn</Link>
            <Link className="bg-gradient-to-br from-pink-600 to-yellow-500 text-white hover:from-pink-500 hover:to-yellow-400 py-2 px-3 rounded-full my-4" to="https://instagram.com/btrcallsaud">Instagram</Link>
            <Link className="bg-sky-500 hover:bg-sky-400 text-white py-2 px-3 rounded-full my-4" to="https://twitter.com/@BtrCallSaud">Twitter</Link>
            <Link className="bg-slate-800 hover:bg-slate-600 text-white py-2 px-3 rounded-full my-4" to="https://linkedin.com/in/saud-hashmi">GitHub</Link>
        </div>

        <h1 className="mt-20 font-bold underline text-3xl font-sans">Contact Me Here</h1>
        <div className="mt-10 text-xl flex justify-evenly sm:mx-40 font-sans max-sm:flex-col">
            <h1 className="text-indigo-600 ">
                <b>Discord:</b>
                <span>@btrcallsaud</span>
            </h1>
            <h1 className="text-slate-600 ">
                <b>Mail:</b>
                <span>hashmisaud10@gmail.com</span>
            </h1>
        </div>

        <footer className="mt-16 font-plex bg-indigo-500 text-white p-2">
        Copyright 2023 © Saud Hashmi. All Rights Reserved.
      </footer>
    </div>
  );
}
