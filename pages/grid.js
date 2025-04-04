import { useState } from "react";
import { useRouter } from "next/router";
export default function task5() {
  const router=useRouter();
  const [grid, setGrid] = useState(false);
  const data = [
    {
      id: 1,
      title: "Test 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem.",
    },
    {
      id: 2,
      title: "Test 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem.",
    },
    {
      id: 3,
      title: "Test 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem.",
    },
    {
      id: 4,
      title: "Test 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim justo, convallis eget lacus vel, egestas rutrum augue. Donec sed elit lorem.",
    },
  ];

  return (
    <div className="h-screen w-screen bg-white px-80 py-12 "> 
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold text-black">Нийтлэлүүд</div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "Жагсаалт харах руу шилжих" : "Grid лүү харах руу шилжих"}
        </button>
      </div>

      <div
        className={`${
          grid ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded shadow-sm hover:shadow-md bg-white"
          >
            <h3 className="text-lg text-black font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      <div >
        <button className="bg-gray-600 h-12 w-24 border-2 border-gray-500 hover:bg-gray-100 mt-4 "onClick={()=>{router.back();}}   >Back</button>
        </div>
    </div>
  );
}
