import React from "react";
import image from "../../images/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash.jpg";

const HeroSection = () => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    /* Weitere Style-Attribute hier */
  };
  return (
    <div style={styles} className="text-white  pt-40 md:pt-48 lg:pt-60 text-center">
     
      <p className="text-lg mt- md:text-2xl lg:text-3xl font-semibold">
        Kißling Architekten
      </p>
      <p className="text-5xl  md:text-7xl lg:text-8xl mt-1 md:mt-4 font-semibold">
        Unser Super Tolles <br /> Architektur Büro Yeah.
      </p>
      <div className="flex justify-center">
        {" "}
        <p className=" text-xl mb-20 md:mb-28 lg:mb-40 px-6 md:w-2/3 md:text-2xl lg:text-3xl mt-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
