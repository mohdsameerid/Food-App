import React from "react";

const ShimmerUI = () => {
    return (
        <div className="restrauntant-list flex flex-wrap pt-12 px-36">
            { 
              Array(15).fill("").map((e,index) => 
              
              <div className="shimmer-card  flex flex-wrap " key={index}>
              <div className="p-4 w-56 m-4">
                <div className="w-48 h-64 border-2 border-gray-200 rounded-lg overflow-hidden">
                  <div className="lg:h-20 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
                  <div className="p-6">
                    <h1 className="w-full mb-4 h-6 animate-pulse bg-gray-500"></h1>
                    <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
                    <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
                    <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                    <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
                  </div>
                </div>
              </div>
              </div>
              )
            }
        </div>
    )
}
export default ShimmerUI;
// shimmer-card w-52 h-64 bg-gray-200 m-2 p-4 