// import React, { useState, useEffect } from "react";
// import img1 from "./photos/logo.jpeg";
// import heroImg from "./photos/banner.jpeg";
// import hero2img from "./photos/banner2.jpg";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// const Hero = () => {
//   let heroImgs = [{ link: heroImg }, { link: hero2img }];

//   const [imgHero, setImgHero] = useState(true);
//   const [img, setImg] = useState(heroImgs[0].link);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setImgHero((prev) => {
//         const nextIndex = prev ? 0 : 1;
//         setImg(heroImgs[nextIndex].link);
//         return !prev;
//       });
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleHeroImg = () => {
//     setImgHero((prev) => {
//       const nextIndex = prev ? 0 : 1;
//       setImg(heroImgs[nextIndex].link);
//       return !prev;
//     });
//   };

//   return (
//     <div
//       className="hero container bg-cover bg-center h-[740px] w-full bg-no-repeat py-5 relative transition-all duration-500"
//       style={{ backgroundImage: `url(${img})` }}>
//       <nav className="navbar container flex justify-between items-center">
//         <div>
//           <img src={img1} alt="logo" />
//         </div>
//         <div className="nav-link  flex gap-5 font-medium">
//           <a href="#" className="text-[#0D63AD] text-lg">
//             Products
//           </a>
//           <a href="#" className="text-[#0D63AD] text-lg">
//             About us
//           </a>
//           <a href="#" className="text-[#0D63AD] text-lg">
//             News & Media
//           </a>
//           <a href="#" className="text-[#0D63AD] text-lg">
//             Become a Partner
//           </a>
//           <a href="#" className="text-[#0D63AD] text-lg">
//             Careers
//           </a>
//           <a href="#" className="text-[#0D63AD] text-lg">
//             Contact us
//           </a>
//         </div>
//       </nav>
//       <button
//         onClick={handleHeroImg}
//         className="iconButton absolute bottom-[95px] right-[135px] bg-white text-[#0D63AD] border border-white py-1 px-5 rounded-full">
//         <FaArrowLeftLong />
//         <FaArrowRightLong />
//       </button>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import img1 from "./photos/logo.jpeg";
import heroImg from "./photos/banner.jpeg";
import hero2img from "./photos/banner2.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  let heroImgs = [{ link: heroImg }, { link: hero2img }];

  const [imgHero, setImgHero] = useState(true);
  const [img, setImg] = useState(heroImgs[0].link);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imgHero) {
        setImg(heroImgs[1].link); // Set the second image
      } else {
        setImg(heroImgs[0].link); // Set the first image
      }
      setImgHero((prev) => !prev); // Toggle the boolean value
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imgHero]);

  const handleHeroImg = () => {
    if (imgHero) {
      setImg(heroImgs[1].link); // Switch to the second image
    } else {
      setImg(heroImgs[0].link); // Switch to the first image
    }
    setImgHero((prev) => !prev); // Toggle the state to switch image
  };

  return (
    <div
      className="hero container bg-cover bg-center h-[740px] w-full bg-no-repeat py-5 relative transition-all duration-500"
      style={{ backgroundImage: `url(${img})` }}>
      <nav className="navbar container flex justify-between items-center">
        <div>
          <img src={img1} alt="logo" />
        </div>
        <div className="nav-link  flex gap-5 font-medium">
          <a href="#" className="text-[#0D63AD] text-lg">
            Products
          </a>
          <a href="#" className="text-[#0D63AD] text-lg">
            About us
          </a>
          <a href="#" className="text-[#0D63AD] text-lg">
            News & Media
          </a>
          <a href="#" className="text-[#0D63AD] text-lg">
            Become a Partner
          </a>
          <a href="#" className="text-[#0D63AD] text-lg">
            Careers
          </a>
          <a href="#" className="text-[#0D63AD] text-lg">
            Contact us
          </a>
        </div>
      </nav>
      <button
        onClick={handleHeroImg}
        className="iconButton absolute bottom-[95px] right-[135px] bg-white text-[#0D63AD] border border-white py-1 px-5 rounded-full">
        <FaArrowLeftLong />
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Hero;
