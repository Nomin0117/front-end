import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Id() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response1 = await fetch("https://mongol-api-rest.vercel.app/TouristAttractions");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/HistoricalTools");
        const response3 = await fetch("https://mongol-api-rest.vercel.app/EthnicGroups");
        const response4 = await fetch("https://mongol-api-rest.vercel.app/HistoricalFigures");
        const response5 = await fetch("https://mongol-api-rest.vercel.app/Instruments");

        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        const result4 = await response4.json();
        const result5 = await response5.json();

        setData([
          ...result.clothes.map((item) => ({ ...item, category: "clothes" })),
          ...result1.touristAttractions.map((item) => ({ ...item, category: "tourist" })),
          ...result2.historicalTools.map((item) => ({ ...item, category: "historical" })),
          ...result3.ethnicGroups.map((item) => ({ ...item, category: "ethic" })),
          ...result4.historicalFigures.map((item) => ({ ...item, category: "figures" })),
          ...result5.instruments.map((item) => ({ ...item, category: "instruments" })),
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const reIdArray = (arr) => arr.map((item, index) => ({ ...item, id: index + 1 }));

  const realData = reIdArray(data);

  return (
    <div className="bg-white border-2 border-black bg-linear-to-r from-stone-200 to-stone-300">
      <div className="h-screen w-screen flex justify-center items-center font-semibold">
        {loading && <p className="text-black text-2xl">...Loading</p>}
        <div>
          {realData.map((item) =>
            router.query.id == item.id ? (
              <div className="w-full h-screen drop-shadow-xl mt-24" key={item.id}>
                <div className="bg-white h-[450px] w-auto rounded-xl drop-shadow-xl mt-72 mx-24 px-8">
                  <div className="flex justify-center items-center">
                    <img
                      src={item.images}
                      className="h-80 ml-[100px] border-2 border-stone-300 mt-12 rounded-xl drop-shadow-xl"
                      alt={item.name}
                    />
                    <div>
                      
                      <h2 className="ml-12 text-3xl font-semibold text-black mt-12">{item.name}</h2>
                      <p className=" text-[12px] font-light  text-black ml-13">{item.timePeriod}</p>
                      <p className="flex justify-center text-black pl-12 pr-12 pt-4 pb-2 text-lg font-light">
                        {item.name} {item.description} 
                      </p>
                    
                      {item.category === "clothes" && (
                        <div className="">
                          <div className="text-black text-medium ml-12 ">Materials:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.materials}</p>
                      </div>
                          <a
                            href="https://en.wikipedia.org/wiki/Deel_(clothing)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="  ml-11 bg-stone-200 text-sm/6 text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                          >
                            Click here to go to Mongolian clothes
                          </a>
                          
                        </div>
                      )}
                      {item.category === "tourist" && (
                        <div className="ml-12">
                          
                          <a
                            href="https://en.wikipedia.org/wiki/Tourism_in_Mongolia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-200 text-sm/6 text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                          >
                            Click here to go to Mongolian tourism
                          </a>
                        </div>
                      )}
                      {item.category === "historical" && (
                        <div className="ml-12">
                      <div className="text-black text-medium  ">Usage:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.usage}</p>
                      </div>
                          <a
                            href="https://en.wikipedia.org/wiki/History_of_Mongolia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-200 text-sm/6 text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                          >
                            Click here to go to Mongolian history
                          </a>
                        </div>
                      )}
                      {item.category === "ethic" && (
                        
                        <div className="ml-12">
                          
                          <div className="text-black text-medium ">Linguistic:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.linguistic}</p>
                      </div>
                      <div className="text-black text-medium ">Population:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.population}</p>
                      </div>
                          <a
                            href="https://www.discovermongolia.mn/about-mongolia/people-society/mongolian-ethnic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-200 text-sm/6 text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                          >
                            Click here to go to Mongolian ethnic
                          </a>
                        </div>
                      )}
                      {item.category === "figures" && (
                        <div className="ml-12">
                           <div className="text-black text-medium ">Country of Birth:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.countryOfBirth}</p>
                      </div>
                        <div className="text-black text-medium ">Date of Birth:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.dateOfBirth}</p>
                      </div>
                      <div className="text-black text-medium ">Accomplishment:
                      <p className="text-black text-sm font-light mb-2">-
                      {item.accomplishment}</p>
                      </div>
                          <a
                            href="https://en.wikipedia.org/wiki/List_of_Mongolians"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-200 text-sm/6 text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                          >
                            Click here to go to Mongolian lists
                          </a>
                        </div>
                      )}
                      {item.category === "instruments" && (
                        <div className="ml-12">
                          <a
                            href="https://en.wikipedia.org/wiki/List_of_Mongolian_musical_instruments"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-stone-200 text-sm/6 text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                          >
                            Click here to go to Mongolian instruments
                          </a>
                        </div>
                      )}
                      <button
                        className="mt-5 ml-12 px-6 py-2 bg-stone-400 text-white rounded-lg hover:bg-stone-300 transition duration-300 ease-in-out"
                        onClick={() => router.back()}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
