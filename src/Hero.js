// import React, { useState,useEffect } from "react";
// import img1 from "./photos/logo.jpeg"
// import heroImg from './photos/banner.jpeg'
// import hero2img from './photos/banner2.jpg'
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// const Hero = () =>{

//    let heroImgs = [
//       {
//         link: heroImg,
//       },
//       {
//         link: hero2img,
//       },
//     ];
   
//    const [imgHero, setImgHero] = useState(true);
//    const [img, setImg] = useState(heroImgs[0].link);

//    useEffect(() => {
      
//       const intervalId = setInterval(() => {
//          setImgHero((prev) => !prev);
//          setImg(heroImgs[imgHero === true ? 1 : 0].link);
//       }, 1000); 
      
//       return () => clearInterval(intervalId);
//    }, []);

//    const handleHeroImg = () => {
//       setImgHero((prev) => !prev);
//       setImg(heroImgs[imgHero === true ? 1 : 0].link);
//    } 
   
//    // const handleHeroImg = () => {
//    //    setImgHero((prev) => {
//    //       const nextIndex = prev ? 0 : 1;
//    //       setImg(heroImgs[nextIndex].link);
//    //       return !prev; // Toggle imgHero state
//    //    });
//    // }

//    return(   
//         <div className="hero container" style={{backgroundImage:`url(${img})`}} >
//         <nav className="navbar container">
//         <div>
//             <img src={img1} alt="logo"/>
//         </div>
//          <div className="nav-link">
//             <a href="" >Products</a>
//             <a href="" >About us</a>
//             <a href="" >News & Media</a>
//             <a href="" >Became a Partner</a>
//             <a href="" >Careers</a>
//             <a href="" >Contact us</a>
//             <a href="" ></a>
//          </div>
//         </nav>
//         <button onClick={handleHeroImg} className="iconButton" >
//         <FaArrowLeftLong />
//         <FaArrowRightLong />
//         </button>
//         </div>
//   )
// }

// export default Hero;


import React, { useState, useEffect } from "react";
import img1 from "./photos/logo.jpeg";
import heroImg from './photos/banner.jpeg';
import hero2img from './photos/banner2.jpg';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {

   let heroImgs = [
      {
        link: heroImg,
      },
      {
        link: hero2img,
      },
   ];
   
   const [imgHero, setImgHero] = useState(true);
   const [img, setImg] = useState(heroImgs[0].link);

   useEffect(() => {
      
      const intervalId = setInterval(() => {
         setImgHero((prev) => {
            const nextIndex = prev ? 0 : 1;
            setImg(heroImgs[nextIndex].link);        
            return !prev;
         });
      }, 3000); 
      
      return () => clearInterval(intervalId);
   }, []); 

   const handleHeroImg = () => {
      setImgHero((prev) => {
         const nextIndex = prev ? 0 : 1;
         setImg(heroImgs[nextIndex].link);
         return !prev; 
      });
   }

   return(   
        <div className="hero container" style={{backgroundImage:`url(${img})`}} >
            <nav className="navbar container">
                <div>
                    <img src={img1} alt="logo"/>
                </div>
                <div className="nav-link">
                    <a href="">Products</a>
                    <a href="">About us</a>
                    <a href="">News & Media</a>
                    <a href="">Become a Partner</a>
                    <a href="">Careers</a>
                    <a href="">Contact us</a>
                    <a href=""></a>
                </div>
            </nav>
            <button onClick={handleHeroImg} className="iconButton">
                <FaArrowLeftLong />
                <FaArrowRightLong />
            </button>
        </div>
   );
}

export default Hero;



