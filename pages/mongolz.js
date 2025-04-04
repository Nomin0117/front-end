import React, { useState } from "react";
import { useRouter } from "next/router";
const userdata = [

  { id: 1, name: "Blitz", email: "Blitz@example.com" },
  { id: 2, name: "Techno4k", email: "Techno4k@example.com" },
  { id: 3, name: "Blitz", email: "Blitz@example.com" },
  { id: 4, name: "Senzu", email: "Senzu@example.com" },
  { id: 5, name: "Blitz", email: "Blitz@example.com" },
  { id: 6, name: "Jake", email: "Jake@example.com" },
  { id: 7, name: "Mae", email: "Mae@example.com" },
  { id: 8, name: "Senzu", email: "Senzu@example.com" },
  { id: 9, name: "Jake", email: "Jake@example.com" },
  { id: 10, name: "Techno4k", email: "Techno4k@example.com" },
  {id: 11,name: "Senzu",email: "Senzu@example.com",},
  {id: 12,name: "Nomio",email: "Nomios@example.com",},
];
export default function task6() {
  const router=useRouter();
  const [search, setSearch] = useState("");
  const filteredtask6 = userdata.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div >
        <button className="bg-gray-600 h-12 w-24 border-2 border-gray-500 hover:bg-gray-100 mt-12 ml-12 "onClick={()=>{router.back();}}   >Back</button>
        </div>
      <div className=" bg-slate-200  px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-black mb-4 ml-[700px]">
            Хэрэглэгчийн жагсаалт
          </div>
        </div>

        <div>
          <input
            type="search"
            onChange={(test) => setSearch(test.target.value)}
            placeholder="Хэрэглэгчийн нэрээр хайна уу..."
            className="text-black p-2 mb-4 w-[1650px] bg-white border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          {filteredtask6.length > 0 ? (
            filteredtask6.map((item) => (
              <div
                key={item.id}
                className="border p-4 shadow-sm hover:shadow-lg mb-4 bg-white rounded-lg"
              >
                <h3 className="text-lg text-black font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-black">{item.email}</p>
              </div>
            ))
          ) : (
            <div className="ml-[700px]">
              <p className="text-black  text-sm">Хэрэглэгчийн нэр олдсогүй</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}