import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <div className="py-3 bg-[#121212] mt-0 sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;