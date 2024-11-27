import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img3 from './photos/p1.jpg'
import img4 from "./photos/p2.jpg"
import img5 from './photos/p3.jpg'

function Product() {
  return (
    <div className='Product container'>
        <div>
            <h1 className='Product-Heading'>We have the best quality products</h1>
        </div>
        <div className='cardContainer' >
            <div className='cardList'>
              <ul>
                <li>Plumbing Pipes & Fittings</li>
                <li>Sewerage Drainage Pipes & Fittings</li>
                <li>Agriculture Pipes & Fittings</li>
                <li>Water Tanks</li>
                <li>Industrial Pipes & Fittings</li>
                <li>Cable Protection</li>
                <li>Fire Sprinklers Pipes & Fittings</li>
                <li>Urban Infrastructure</li>
              </ul>
            </div>
            <div className='cardSection' >
            <span className='cardIcon'>
              <FaArrowLeftLong />
              <FaArrowRightLong />
            </span>
              <div style={{ backgroundColor:'white', maxWidth:'300px', border:'1px solid black', color:'black' }} > 
                <div style={{padding:'20px', display:'flex', flexDirection:'column', gap:'5px', alignItems:'center', justifyContent:'center'}} >
                  <div style={{ backgroundColor:'rgb(243 246 250 )' }} ><img src={img3} style={{width:'100%'}} /></div>
                  <div style={{ textAlign:'center', backgroundColor:'rgb(243 246 250 )' }} >
                    <h3>CPVC PRO</h3>
                    <p>CPVC-Hot & Cold Water Plumbing System</p>
                  </div>
                </div>
              </div>
              
              <div style={{ backgroundColor:'white', maxWidth:'300px', border:'1px solid black', color:'black' }} > 
                <div style={{padding:'20px', display:'flex', flexDirection:'column', gap:'5px', alignItems:'center', justifyContent:'center'}} >
                  <div style={{ backgroundColor:'rgb(243 246 250 )' }} ><img src={img4} style={{width:'100%'}} /></div>
                  <div style={{ textAlign:'center', backgroundColor:'rgb(243 246 250 )' }} >
                    <h3>PEX - A PRO</h3>
                    <p>Cross-linked PE - Hot & Cold Water Plumbing System</p>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor:'white', maxWidth:'300px', border:'1px solid black', color:'black' }} > 
                <div style={{padding:'20px', display:'flex', flexDirection:'column', gap:'5px', alignItems:'center', justifyContent:'center'}} >
                  <div style={{ backgroundColor:'rgb(243 246 250 )' }} ><img src={img5} style={{width:'100%'}} /></div>
                  <div style={{ textAlign:'center', backgroundColor:'rgb(243 246 250 )' }} >
                    <h3>MULTIPEX</h3>
                    <p>Cross-linked PE - Hot & Cold Water Plumbing System</p>
                  </div>
                </div>
              </div>

             

            </div>
        </div>
    </div>
  )
}

export default Product