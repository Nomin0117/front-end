import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Task5() {
  const router = useRouter();
  const [grid, setGrid] = useState(false);

  const data = [
    { name: "CV", path: "about_me", img: "/cv.png" },
    { name: "Color", path: "change_color", img: "/color.png" },
    { name: "Click", path: "click_me", img: "/click.png" }, 
    { name: "Grid", path: "grid", img: "/grid.png" },
    { name: "Instagram", path: "instagram_log_in", img: "/login.png" },
    { name: "Tooluur", path: "tooluur", img: "/tooluur.png" },
    { name: "MongolApi", path: "mongolapi/uliral5", img: "/api.png" },
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-100 px-12 py-12 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 flex justify-center items-center">11B Nomindari</h1>
        <button
          className="mt-5 ml-12 px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "Grid" : "List"}
        </button>
      </div>

      <div
        className={`w-full max-w-4xl ${grid ? "flex flex-col gap-4" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"}`}
      >
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/${item.path}`)}
            className="h-48 flex flex-col items-center justify-center hover:h-52 hover:border-4 bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-200 transition duration-300 cursor-pointer p-2"
          >
            <Image  className=" h-20 w-32" src={item.img} width={50} height={50} alt={item.name} />
            <h3 className="text-lg font-semibold text-gray-700 pt-4">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
