import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Nest() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const userdata = [
    {
      id: 1,
      name: "IPhone 14 Pro",
      image: "iphone.png",
      price: 4030000,
      accessories: ["Charger", "Clear Case"],
    },
    {
      id: 2,
      name: "Macbook M4 Pro chip",
      image: "macbook.png",
      price: 12000000,
      accessories: ["Charger", "Clear Case"],
    },
    {
      id: 3,
      name: "IPad Pro 13",
      image: "ipad.png",
      price: 5190000,
      accessories: ["Clear Case", "Pen"],
    },
    {
      id: 4,
      name: "Magic Mouse",
      image: "mouse.png",
      price: 390000,
      accessories: ["Charger", "Mouse Case"],
    },
    {
      id: 5,
      name: "Jeans",
      image: "jeans.png",
      price: 230000,
      accessories: ["Belt"],
    },
    {
      id: 6,
      name: "Hoodie",
      image: "hoodie.png",
      price: 150000,
      accessories: ["None"],
    },
    {
      id: 7,
      name: "Bag  /Balenciaga/",
      image: "bag.png",
      price: 1500000,
      accessories: ["Charm"],
    },
    {
      id: 8,
      name: "T-shirt",
      image: "shirt.png",
      price: 70000,
      accessories: ["Sweater"],
    },
  ];

  const filteredNest = userdata.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-full w-screen bg-purple-100 p-4">
      <div className="flex">
        <div className="h-screen w-1/5 bg-white rounded-xl">
          <img src="nest.ico" className="h-32 ml-12 mt-12" />
          <p className="text-purple-500 font-bold text-lg ml-10 mt-2">
            Nest Education IT
          </p>
          <p className="text-purple-500 font-bold text-lg ml-20">School</p>
          <p className="text-stone-900 font-semibold text-sm ml-12 mt-4">
            Nomindari Enkhtur
          </p>
          <p className="text-stone-600 font-semibold text-sm ml-18">
            Class: 11b
          </p>
          <div className="flex justify-center items-center mt-6 m-2 h-10 w-56 bg-purple-500 rounded-xl text-white font-semibold hover:bg-purple-300">
            Lab 1
          </div>
          <div className="flex justify-center items-center m-2 h-10 w-56 bg-purple-500 rounded-xl text-white font-semibold hover:bg-purple-300">
            Lab 2
          </div>
        </div>

        <div className="ml-4 h-screen w-full bg-white rounded-xl p-4 overflow-y-auto">
          <div className="flex items-center mb-4">
            <div className="h-12 px-6 bg-purple-500 rounded-xl font-bold flex justify-center items-center text-white hover:bg-purple-300 mr-4">
              Products
            </div>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="rounded-xl text-black p-2 w-[600px] bg-white border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <div className="ml-86 h-12 px-6 bg-purple-900 rounded-xl font-bold flex justify-center items-center text-white hover:bg-purple-500 mr-4">
              Receive
            </div>
          </div>

          <div>
            {filteredNest.length > 0 ? (
              <div className="text-stone-700">
                <table className="table-auto border border-xl p-4 mb-4 w-full ">
                  <thead className="">
                    <tr className="border-b-1 bg-purple-200">
                      <th className="text-left p-4">Photo</th>
                      <th className="text-left p-4">Name</th>
                      <th className="text-left p-4">Price</th>
                      <th className="text-left p-4">Accessories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredNest.map((item) => (
                      <tr key={item.id} className="border-b-1">
                        <td className="">
                          <img src={item.image} className="h-18 m-2 ml-5 " />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price} ₮</td>
                        <td>
                          <ul >
                            {item.accessories.map((acc, index) => (
                              <li   key={index}>{acc}  /free/</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center text-black text-lg mt-10">
                No products found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
