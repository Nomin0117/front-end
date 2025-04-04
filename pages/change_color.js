import React, { useState } from "react";
import { useRouter } from "next/router";
export default function task2(){
 
    const router=useRouter();
    const [color, setColor] = useState("");
  
    return(
       

        <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
            <p>Change color</p>
            <button className="border bg-red-800 py-4 px-4"
            onClick={() => {
                setColor("red");
            }}>Red</button>
            <button className="border bg-blue-800 py-4 px-6"
            onClick={() => {
                setColor("blue");
            }}
            >Blue</button>
             <button className="border bg-green-800 py-4 px-6"
            onClick={() => {
                setColor("green");
            }}
            >Green</button>
            <div >
        <button className="bg-gray-600 h-12 w-24 border-2 border-gray-500 hover:bg-gray-100 ml-6 mt-12 " onClick={()=>{router.back();}}  >Back</button>
        </div>
        </div>
        
    );
}