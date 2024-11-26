import React from "react";
import img2 from "./photos/aboutimg.jpg"
import img3 from "./photos/playbtn.jpeg"

const About = () => {
    return(
        <div className=" AboutUs container" >
        <div>
            <h1 className="heading-first" > India's No.1 Pipe Brand </h1>
            <p> Born in <span style={{color:'blue',}} > Gujarat in 1996, </span> Astral Pipes has revolutionized the piping industry with world-class, innovative solutions. <span style={{color:'blue',}} >  A pioneer in bringing CPVC to India </span> and launching the country’s first lead-free uPVC pipes, Astral sets the benchmark for quality and innovation. Known for its commitment to uncompromised excellence, Astral continues to shape the industry and deliver cutting-edge piping technologies, making waves both in India and globally. </p>
            <span style={{display:"flex", gap:"20px",}} >
              <button className="buttonOne" >Read More</button>
              <button className="buttonTwo" >Astral Group</button>
            </span>
        </div>
        <div className="imageContainer" style={{ position:'relative',}} >
            <img src={img2} alt="aboutImg" />
            <img src={img3} alt="video" className="video" />
        </div>
        </div>
    )
}

export default About