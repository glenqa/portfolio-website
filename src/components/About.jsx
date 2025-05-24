import { ABOUT_TEXT } from "../constants";
import Slideshow from "./Slideshow.jsx";

const About = () => {
  return (
    <div className=" pb-2">
      <h2 className="my-20 text-center text-4xl font-bold">About Me</h2>
      <div className="flex justify-center px-4">
        <div className="max-w-4xl text-center text-base text-white font-light ">
          {ABOUT_TEXT.split("\n").map((line, index) => (
            <p key={index} className="mb-4">
              {line.trim()}
            </p>
          ))}
        </div>
      </div>
      <Slideshow />
    </div>
  );
};

export default About;
