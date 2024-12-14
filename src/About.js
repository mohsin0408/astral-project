import React from "react";
import img2 from "./photos/aboutimg.jpg";
import img3 from "./photos/playbtn.jpeg";

const About = () => {
  return (
    <div className="AboutUs flex gap-7 py-[100px] px-[20px] mx-[60px]">
      <div>
        <h1 className="text-4xl font-thin mb-6">India's No.1 Pipe Brand</h1>
        <p className="text-lg leading-relaxed mb-6">
          Born in <span className="text-blue-600">Gujarat in 1996,</span> Astral Pipes has revolutionized the piping industry with world-class, innovative solutions. 
          <span className="text-blue-600">A pioneer in bringing CPVC to India</span> and launching the country’s first lead-free uPVC pipes, Astral sets the benchmark for quality and innovation.
        </p>
        <div className="flex gap-5">
          <button className="bg-[#0D63AD] text-white py-3 px-6 rounded">Read More</button>
          <button className="border border-[#0D63AD] text-[#0D63AD] py-3 px-6 rounded">Astral Group</button>
        </div>
      </div>
      <div className="relative">
        <img src={img2} alt="aboutImg" className="w-full h-auto" />
        <img src={img3} alt="video" className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default About;
