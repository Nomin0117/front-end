
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const userdata = [
  { id: 1, name: "clothes" },
  { id: 2, name: "turist" },
  { id: 3, name: "historical" },
  { id: 4, name: "ethic" },
  { id: 5, name: "figures" },
];

export default function Uliral5() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          "https://mongol-api-rest.vercel.app/clothes",
          "https://mongol-api-rest.vercel.app/TouristAttractions",
          "https://mongol-api-rest.vercel.app/HistoricalTools",
          "https://mongol-api-rest.vercel.app/EthnicGroups",
          "https://mongol-api-rest.vercel.app/HistoricalFigures"
        ];
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const results = await Promise.all(responses.map(res => res.json()));

        setData([
          ...results[0].clothes,
          ...results[1].touristAttractions,
          ...results[2].historicalTools,
          ...results[3].ethnicGroups,
          ...results[4].historicalFigures,
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="h-screen bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('https://mgl.gogo.mn/newsn/np/2021/03/15/2685303/20110712-ALT_0516-191254-860266725-102133-1488005519.jpeg')"
      }}
    >
      <div className="bg-white bg-opacity-70 h-screen">
        <div className="flex justify-between items-center pt-5 px-10">
          <p className="text-black text-4xl font-bold ml-24">Mongolian Culture</p>
          <button
            className="bg-stone-400 text-white px-4 py-2 rounded hover:bg-stone-300 transition duration-300 ease-in-out mr-14"
            onClick={() => setGrid(!grid)}
          >
            {grid ? " List" : "Back"}
          </button>
        </div>

        <div className="pt-5 flex justify-center md:px-7 sm:px-7">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="hover:bg-gray-100 rounded-xl text-black p-2 ml-14 mb-4 w-[1350px] bg-white border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 drop-shadow-lg"
          />
        </div>

        <div
          className={`w-full pr-24 ${grid ? "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-24 gap-6" : "flex flex-col px-10"}`}
        >
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`border-stone-500 border rounded-xl drop-shadow-2xl m-6 p-4 hover:bg-stone-200 hover:border-2 border-black ${
                grid ? "h-[450px] w-80" : "flex items-center w-full h-24"
              }`}
              onClick={() => router.push('/mongolapi/${item.id}')}
            >
              <img
                src={item.images?.[0]}
                className={`${grid ? "h-80 w-60 flex mx-auto " : "h-24 w-12 mr-4"} rounded-xl py-4`}
                alt={item.name}
              />
              <div className={`${grid ? "text-center" : "flex-2"}`}>
                <p className="text-black font-bold">{item.name}</p>
                <p className="text-black text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}