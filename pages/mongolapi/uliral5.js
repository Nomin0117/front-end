import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const userdata = [
  { id: 1, name: "clothes" },
  { id: 2, name: "tourist" },
  { id: 3, name: "historical" },
  { id: 4, name: "ethic" },
  { id: 5, name: "figures" },
  { id: 6, name: "instrument" },
];

export default function uliral5() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);
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
          ...result.clothes,
          ...result1.touristAttractions,
          ...result2.historicalTools,
          ...result3.ethnicGroups,
          ...result4.historicalFigures,
          ...result5.instruments,
        ]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const reIdArray = (arr) => arr.map((item, index) => ({ ...item, id: index + 1 }));

  const realData = reIdArray(data);

  const filteredData = realData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="bg-white h-screen">
      <div className="bg-white flex justify-between items-center pt-5 px-10">
        <p className="text-black text-4xl font-bold ml-10">Mongolian Culture</p>
       <div className=""> <button
          className="bg-stone-400 text-white px-4 py-2 rounded hover:bg-stone-300 transition duration-300 ease-in-out "
          onClick={() => setGrid(!grid)}
        >
          {grid ? " List" : "Back"}
        </button>
        <button className=" ml-2 bg-stone-400 text-white px-4 py-2 rounded hover:bg-stone-300 transition duration-300 ease-in-out "onClick={()=>{router.back();}}   >Back</button></div>

      </div>
      <div className="bg-white">
        <div className="pt-5 flex justify-center md:px-7 sm:px-7">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="mr-12 hover:bg-gray-100 transition duration-300 rounded-xl text-black p-2 ml-12 mb-4 w-[1450px] bg-white border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 drop-shadow-lg"
          />
        </div>

        {loading ? (
          <div className=" mt-80 text-center text-black text-xl font-bold mt-10">Loading...</div>
        ) : (
          <div className={`bg-white w-full pr-24 ${grid ? "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-12 gap-6" : "flex flex-col px-10"}`}>
            {filteredData.map((item) => (
              <div
                key={item.id}
                className={`border-stone-500 border rounded-xl drop-shadow-2xl m-6 p-4 hover:bg-stone-100 transition duration-400 hover:border-2 border-black ${grid ? "h-auto w-80" : "flex items-center w-full h-24"}`}
                onClick={() => router.push(`/mongolapi/${item.id}`)}
              >
                <img
                  src={item.images?.[0]}
                  className={`${grid ? "h-80 w-60 flex mx-auto p-2" : "h-20 w-14 mr-4 "} rounded-xl py-4"`}
                  alt={item.name}
                />
                <div className={`${grid ? "text-center" : "flex-1"}`}>
                  <div className={`mt-2 ${grid ? "" : "flex flex-col items-start text-[12px]"}`}>
                    <div className={`${grid ? "text-center" : "flex-1 flex items-center"}`}>
                      <p className="text-black font-bold">{item.name}</p>
                      <p className="bg-stone-200 text-[12px] text-black px-2 py-1 rounded-xl ml-2">{item.timePeriod}</p>
                    </div>
                    <p className="text-black text-sm">{item.description}</p>
                    <div className="mt-2 flex justify-center text-[12px]">
                      <a
                        href="https://en.wikipedia.org/wiki/Mongolia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-stone-200 text-[12px] text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                      >
                        Wikipedia
                      </a>
                      <a
                        href="https://tourmongolia.com/mongolian-nomadic-lifestyle/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 bg-stone-200 text-[12px] text-black px-2 py-1 rounded-xl hover:bg-stone-300 hover:text-white transition duration-300"
                      >
                        TourMongolia
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}