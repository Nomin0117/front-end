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

        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        const result4 = await response4.json();

        setData([
          ...result.clothes,
          ...result1.touristAttractions,
          ...result2.historicalTools,
          ...result3.ethnicGroups,
          ...result4.historicalFigures,
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
    <div className="bg-gradient-to-r from-stone-200 to-stone-300 h-screen flex justify-center items-center">
      <div className=" h-screen w-screen flex justify-center items-center font-semibold">
      {loading && <p className="text-black text-2xl">...Loading</p>}
      </div>
      <div className="w-full max-w-7xl p-8">
        {realData.map((item) => (
          router.query.id == item.id && (
            <div key={item.id} className="bg-white shadow-xl rounded-lg overflow-hidden p-6 mt-16">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <img
                  src={item.images?.[0]}
                  className="h-80 w-80 object-cover rounded-lg shadow-lg mb-6 md:mb-0"
                  alt={item.name}
                />
                <div className="md:ml-8 text-center md:text-left">
                  <h2 className="text-3xl font-semibold text-black mb-4">{item.name}</h2>
                  <p className="text-lg text-gray-700 mb-4">{item.description}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-stone-400 text-white rounded-lg hover:bg-stone-300 transition duration-300 ease-in-out"
                    onClick={() => router.back()}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
