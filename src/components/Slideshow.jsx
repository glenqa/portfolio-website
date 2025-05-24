import React from "react";
import { HOBBIES_TEXT, SLIDESHOW_IMAGES } from "../constants/index.js";

const ContinuousSlideshow = () => {
  return (
    <>
      <style>
        {`
    @keyframes slide-continuous {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-slide-continuous {
      animation: slide-continuous 15s linear infinite;
    }
  `}
      </style>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Slideshow Container */}
          <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-6">
            <div className="overflow-hidden">
              <div className="flex animate-slide-continuous space-x-6">
                {/* First set of images */}
                {SLIDESHOW_IMAGES.map((image, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-80 h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {SLIDESHOW_IMAGES.map((image, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-80 h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={image.src}
                      alt={`Slide ${index + 1} duplicate`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional content below slideshow */}
          <div className="flex justify-center mt-4 mb-2">
            <div className="mt-8 text-center px-4">
              <p className="max-w-4xl text-base text-white font-light mx-auto">
                {HOBBIES_TEXT}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContinuousSlideshow;
