import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import image from '../../images/pierre-chatel-innocenti-YDarsL40neU-unsplash.jpg'

const ValueSection = () => {
  return (
    <div className="w-full px-8 md:p-12 lg:p-20 bg-white py-10">
      <p className="mt-12 md:mt-16 lg:mt-20 text-4xl md:text-5xl lg:text-6xl font-semibold">
        Unsere Werte. <br /> Unsere Überzeugungen.
      </p>
      <p className=" mt-4 md:mt-7 text-lg md:text-xl lg:text-2xl ">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <div className=" mt-6 md:mt-10 lg:mt-16">
        <img src={image} />
      </div>
      <p className="mt-24 md:mt-36 lg:mt-40 text-4xl md:text-5xl lg:text-6xl font-semibold">
        Unsere Arbeitsweise <br /> und Projekte.
      </p>
      <p className=" mt-4 md:mt-7 text-lg md:text-xl lg:text-2xl ">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <Link to="AppPreview" className="flex mt-3  mb-6 md:mb-10 lg:mb-14">
        <p className="hover:border-opacity-100 border-opacity-0 border-b-2 relative mt-1 border-blue text-blue">
          <p className=" relative text-lg lg:text-xl top-1">Mehr über unsere Projeket</p>
        </p>
        <IoChevronForward className="text-blue md:text-xl mt-3.5 ml-2" />
      </Link>
    </div>
  );
};

export default ValueSection;
