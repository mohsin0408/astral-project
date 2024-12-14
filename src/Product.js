import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img3 from './photos/p1.jpg';
import img4 from "./photos/p2.jpg";
import img5 from './photos/p3.jpg';

function Product() {
  return (
    <div className="Product  bg-[#efebef] py-[100px] px-[74px]  ">
      <h1 className="text-4xl font-medium mb-8">We have the best quality products</h1>
      <div className="flex gap-5 mt-7 pt-8">
        <div className="cardList sticky top-0 w-[250px] border-l-2 pl-6">
          <ul className="space-y-4">
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
        <div className="cardSection grid grid-cols-3 gap-5">
          <div className="bg-white border border-black p-5 text-center">
            <img src={img3} alt="Product" className="w-full" />
            <h3>CPVC PRO</h3>
            <p>CPVC-Hot & Cold Water Plumbing System</p>
          </div>
          <div className="bg-white border border-black p-5 text-center">
            <img src={img4} alt="Product" className="w-full" />
            <h3>UPVC PRO</h3>
            <p>Unplasticized Polyvinyl Chloride</p>
          </div>
          <div className="bg-white border border-black p-5 text-center">
            <img src={img5} alt="Product" className="w-full" />
            <h3>PVC PRO</h3>
            <p>Pipes & Fittings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
