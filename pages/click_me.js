import React, { useState } from "react";
import { useRouter } from "next/router";

export default function uliral2 (){
    const router=useRouter();
    const [grid, setGrid] = useState(false);
    const [clickedCount, setClickedCount] = useState(6);
    const [isClicked, setIsClicked] = useState(false);
  

  
return(
    <div >
        <div className="h-screen w-screen bg-gray-100 ">
            <div className="pt-20 ">
              
                <div className="bg-blue-600 w-screen h-24  ">
                    <p className=" font-semibold text-2xl flex justify-center pt-8">Nest high school</p>
                </div>
                </div>
            <div >
                <p className="pt-8 flex justify-center text-4xl text-black font-bold ">Welcome to Nest school</p>
                <div className="pt-4">
                     <p className="text-black flex justify-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                <p className="text-black flex justify-center">industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p></div>
               
                <div className="text-center mt-4 flex justify-center">
          {isClicked ? (
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 pl-2"
              onClick={() => setIsClicked(false)}
            >
              Close
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-5"
              onClick={() => {
                setIsClicked(true);
                setClickedCount((prev) => prev + 1);
              }}
            >
              Click Me
            </button>
          )}
          
          <p className="text-gray-500 mt-2">Clicked {clickedCount} times</p>
        </div>
         
               
            </div>
            <div className="flex justify-center  pt-4 grid xl:grid-cols-3 md:grid-cols-3 xl:px-60 md:px-50 sm:grid-cols-1  ">
                <div className="bg-white h-60 w-80 drop-shadow-xl "> 
                    
                    <p className="text-xl text-black font-semibold flex justify-center pt-4 ">Why Choose Us?</p>
                    <p className="text-black font-normal flex justify-center pt-2">High Performance</p>
                    <p className="text-black font-normal flex justify-center pt-2">Responsive Design</p>
                    <p className="text-black font-normal flex justify-center pt-2">Easy to Use</p>
                    <p className="text-black font-normal flex justify-center pt-2">Scalable Solutions</p>
                    <p className="text-black font-normal flex justify-center pt-2">24/7 Support</p>
                </div>
                <div className="bg-white h-60 w-80 drop-shadow-xl "> 
                <p className="text-xl text-black font-semibold flex justify-center pt-4 ">Our Features</p>
                    <p className="text-black font-normal flex justify-center pt-2">Fast and Lightweight</p>
                    <p className="text-black font-normal flex justify-center pt-2">Mobile-First Approach</p>
                    <p className="text-black font-normal flex justify-center pt-2">Customizable UI</p>
                    <p className="text-black font-normal flex justify-center pt-2">Secure and Relable</p>
                    <p className="text-black font-normal flex justify-center pt-2">Global Reach </p>
                </div>
                <div className="bg-white h-60 w-80 drop-shadow-xl"> 
                <p className="text-xl text-black font-semibold flex justify-center pt-4 ">Customer Reviews</p>
                    <p className="text-black font-normal  flex justify-center pt-2 text-sm">Lorem Ipsum is simply dummy text of the </p>
                    <p className="text-black font-normal  flex justify-center text-sm">printing and typesetting industry.</p>
                    <p className="text-black font-normal  flex justify-center pt-2 text-sm">Lorem Ipsum is simply dummy text of the </p>
                    <p className="text-black font-normal  flex justify-center text-sm">printing and typesetting industry.</p>
                   
                </div>  
                <button className="  w-24 mt-10 ml-2 bg-stone-400 text-white px-4 py-2 rounded hover:bg-stone-300 transition duration-300 ease-in-out "onClick={()=>{router.back();}}   >Back</button>

            </div>
          
        
            <div className="pt-4"><div className="bg-gray-800 w-screen h-24  ">
                    <p className=" font-medium text-xl flex justify-center pt-8 ">@2025 Our Company Nest education High school</p>

                </div></div>

        </div>
    </div>
);

}