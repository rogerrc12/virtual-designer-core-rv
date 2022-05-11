import React, { useEffect, useState } from "react";
import classes from "./App.module.scss";
import { cacheImages } from "./cacheImages";
import ColorPicker from "./components/ColorPicker";
import NavItems from "./components/navigation/NavItems";
import Spinner from "./components/Spinner";
import Trailer from "./components/Trailer";
import imgs from "./images";

function App() {
  const [frontColor, setFrontColor] = useState("gloss-white");
  const [rearColor, setRearColor] = useState("gloss-white");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cacheImages(imgs, setIsLoading);
  }, []);

  return (
    <>
      <NavItems />
      <main className={classes.MainWrapper}>
        <div className="text-center px-8">
          <h1>Visualize Your CORE</h1>
          <hr className="border-dashed my-4" />
          <p>
            The "Visualize Your CORE" displays the color selections for the CORE ICE 8019 ATX. 6511 and 6515 Models only have one solid color choice for the exterior of the unit.
            6519, 8019, and 8025 Models have multiple color choices.
          </p>
        </div>
        <div className="rounded-xl mt-8 w-full md:w-2/3 m-auto px-10 px-4">
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <Trailer rearColor={rearColor} frontColor={frontColor} />
              <div className="flex flex-wrap items-center justify-between lg:pr-20 lg:pl-16">
                <ColorPicker label="Rear color" color={rearColor} setColor={setRearColor} />
                <ColorPicker label="Front color" color={frontColor} setColor={setFrontColor} />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center items-center my-5">
          <a
            href="https://core-ice.com/models/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase font-bold py-4 px-12 text-white"
            style={{ backgroundColor: "#88b330" }}
          >
            See Models
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
