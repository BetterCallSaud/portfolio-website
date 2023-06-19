import { useState } from "react";
import React from "react";
import library from "../library.json";
import { Link } from "react-router-dom";

const BookCard = ({ title, author, category }) => (
  <div className="font-sans mx-12 my-6">
    <h1 className="text-2xl text-slate-900">{title}</h1>
    <p className="text-xl text-slate-700">{author}</p>
    <span>|</span>
    <h1 className="text-sm text-slate-500 uppercase tracking-widest">
      {category}
    </h1>
  </div>
);

export function Library() {
  const [data] = useState(library);

  return (
    <div className="text-center">
      <nav className="w-full h-fit p-5 flex justify-center align-middle shadow-md">
        <h1>
          <Link to={"/"} className="text-3xl h-8 font-sans navbar-heading">
            saud
          </Link>
        </h1>
      </nav>

      <h1 className="mt-10 font-plex font-semibold text-4xl">Library</h1>
      <br />
      <p className="text-lg font-plex">I read a lot. A LOT!</p>

      <hr className="mt-10 border-4 border-indigo-300" />

      <div className="mt-10 flex flex-row flex-wrap justify-evenly">
        {data.map((item) => (
          <BookCard
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
      </div>
      <br/>
      <p className="text-xl font-plex">and more to add...</p>
      <footer className="mt-16 font-plex bg-indigo-500 text-white p-2">
        Copyright 2023 © Saud Hashmi. All Rights Reserved.
      </footer>
    </div>
  );
}
