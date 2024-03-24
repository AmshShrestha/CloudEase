import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Homepage = ({ pageColor, greenColor, darkColor }) => {
  const textColorClass =
    pageColor === greenColor || pageColor === darkColor
      ? "text-white"
      : "text-black";
  const borderColor =
    pageColor === greenColor || pageColor === darkColor
      ? "border-2 border-white"
      : "border-2 border-black";

  const [words, setWords] = useState([
    "Efficiency",
    "Scalability",
    "Innovation",
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`container flex py-40  ${textColorClass}`}>
      <div className="max-w-xl overflow-hidden">
        <div className="animate-scrolling-text">
          <h1 className="text-3xl font-bold">
            Elevate Your Cloud Management for Enhanced {words[currentWordIndex]}
          </h1>
        </div>

        <p className="mt-10">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas. Nemo enim ipsam voluptatem.
        </p>
        <div className="flex">
          <input
            className={`h-12 ${borderColor}`}
            type="email"
            placeholder="Enter your email address"
          />
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 py-2 px-4 ml-2`}
          >
            Subscribe
          </button>
        </div>
        <div className="py-40">
          <h1>Trusted by lots of companies: </h1>
          <nav>
            <ul className={`flex space-x-4  ${textColorClass}`}>
              <li>
                <a href="#" className="font-bold hover:text-gray-600">
                  SkyBridge
                </a>
              </li>
              <li>
                <a href="#" className="font-bold hover:text-gray-600">
                  AgileWave
                </a>
              </li>
              <li>
                <a href="#" className="font-bold hover:text-gray-600">
                  FutureFlow
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <img src="/images/Image-Hero.png" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageColor: state.pageColor,
    greenColor: state.greenColor,
    darkColor: state.darkColor,
  };
};

export default connect(mapStateToProps)(Homepage);
