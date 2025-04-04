import React, { useEffect , useState } from "react";
export default function uliral3(){
    const [color, setColor] = useState("");
    const[data,setData] =  useState();
    useEffect(()=> {
        const fetchData = async () => {
            return await fetch ("https://mongol-api-rest.vercel.app/clothes")
            .then((res)=> {
                setData(res.json());
            })
            .then ((json) => console.log(json));
        };
        fetchData();
    },[]);
    console.log(color);
    return(
        <div> 
            <div className="h-screen w-screen bg-white">
                <div  className=" w-80 border-2 border-stone-700"></div>
                <div className=" pt-8  flex justify-center text-4xl text-stone-700 italic">
                    <p>Mongolian clothing</p>
                </div>
            </div>
            </div>
        
    );

}