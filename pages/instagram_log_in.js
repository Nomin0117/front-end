import React, {useState} from "react";
import { useRouter } from "next/router";
export default function task4(){
   const router=useRouter();
    const [search,setSearch]=useState("");
    console.log("search utga -->",search);
    return(
        <div className="bg-black">
        
         <div className="flex items-center justify-center 
              h-screen flex-col        ">
             <div className=" border border-white w-[400px] h-[500px]">
                <div className="flex justify-center items-center mt-16 flex-col ">
             <div>
                <p className="text-3xl mb-20"> 𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶𝓶 </p>
              </div>
             <div className="flex ">
             <input type="search" onChange={(test)=> setSearch(test.value)}
             placeholder="Username"
             className="p-2 pr-24 bg-black  border-2 border-gray-800    focus:outlinenone focus:ring-2  focus:ring-blue-1   00">

                </input>
                   
             </div>
             <div>
             <input type="search" onChange={(test)=> setSearch(test.value)}
             placeholder="Password"
             className=" mt-4 p-2 pr-24  bg-black border-2 border-gray-800    focus:outlinenone focus:ring-2  focus:ring-blue-1   00">
           
                </input>
             </div>
             <div className="bg-blue-600 h-8 w-[310px] rounded-xl mt-4  ">
                <h1 className=" flex items-center justify-center mt-1 ">Log in</h1>
             </div>
             <div >
                 <p className="mt-4 text-gray-600">OR</p>
             </div>
             <div className=" mt-4 flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/800px-Facebook_Logo_2023.png" width={22} height={22}/>
                <p className="ml-2 text-blue-500">Log in with Facebook</p>
             </div>
             </div>
             </div>
             <div >
        <button className="bg-gray-600 h-12 w-24 border-2 border-gray-500 hover:bg-gray-100  mt-12 "onClick={()=>{router.back();}}   >Back</button>
        </div>
              </div>
              
        </div>
    );
}