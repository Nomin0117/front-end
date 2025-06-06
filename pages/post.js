import { useState, useEffect } from "react";
import axios from "axios";
export default function Post() {
  const [create, setCreate] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  console.log(name);
  console.log(lastname);
  console.log(email);
  console.log(age);

  const handleSubmit = () => {
    axios.post("http://localhost:8080/createUsers", {
      first_name: name,
      last_name: lastname,
      age,
      email,
    });
  };

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:8080/users").then((res) => {
        setData(res.data);
      });
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      <div className="bg-black h-screen w-full flex justify-center items-center ">
        <div className="border border-2 border-gray-950 p-6  rounded-xl ">
          <div className="border border-2 border-gray-900 p-6 rounded-xl">
            <div className="border border-2 border-gray-800 p-6 rounded-xl">
              <div className="border border-2 border-gray-700 p-6 rounded-xl">
                <div className="border border-2 border-gray-600 p-6 rounded-xl">
                  <div className="border border-2 border-gray-500 p-6 rounded-xl">
                    <div className="border border-2 border-gray-400 p-6 rounded-xl">
                      <div className="border border-2 border-gray-300 p-6 rounded-xl">
                        <div className="border border-2 border-gray-200 p-6 rounded-xl">
                          <div className="border border-2 border-gray-100 p-6 rounded-xl">
                            <div className="border border-2 border-gray-50 p-6 rounded-xl">
                              <div className=" bg-gray-100 border border-2 rounded-xl  w-[800px] h-[600px]  border-black ">
                                <div className="overflow-y-auto h-full text-black">
                                  <div className="p-4 text-black ">
                                    <div className="flex items-center space-x-4">
                                      <p className="text-3xl font-bold ml-4">
                                      Бүртгүүлэх
                                      </p>
                                      <button
                                        onClick={() => setCreate((e) => !e)}
                                        className=" ml-100 bg-blue-400 rounded-xl py-2 px-4 rounded-md text-md text-white"
                                      >
                                        Бүртгэл үүсгэх
                                      </button>
                                    </div>
                                    {create === true && (
                                      <div className="m-4 space-y-4">
                                        <div>
                                          <label className="text-lg font-smeibold">
                                            Нэр:
                                          </label>
                                          <input
                                            type="text"
                                            onChange={(e) =>
                                              setName(e.target.value)
                                            }
                                            className="  bg-white rounded-xl border py-4 pl-2 ml-6 text-sm text-black hover:bg-gray-200 hover:border-2 "
                                            placeholder="Нэр оруулна уу ?"
                                          ></input>
                                        </div>
                                        <div>
                                          <label className="text-lg font-smeibold">
                                            Овог:
                                          </label>
                                          <input
                                            type="text"
                                            onChange={(e) =>
                                              setLastname(e.target.value)
                                            }
                                            className="bg-white rounded-xl border py-4 pl-2 ml-4 text-sm text-black hover:bg-gray-200 hover:border-2  "
                                            placeholder="Овог оруулна уу?"
                                          ></input>
                                        </div>
                                        <div>
                                          <label className="text-lg font-smeibold">
                                            Нас:
                                          </label>
                                          <input
                                            type="text"
                                            onChange={(e) =>
                                              setAge(e.target.value)
                                            }
                                            className="bg-white rounded-xl border py-4 pl-2 ml-6 text-sm text-black hover:bg-gray-200 hover:border-2  "
                                            placeholder="Насаа оруулна уу?"
                                          ></input>
                                        </div>
                                        <div>
                                          <label className="text-lg font-smeibold">
                                            Email:
                                          </label>
                                          <input
                                            type="text"
                                            onChange={(e) =>
                                              setEmail(e.target.value)
                                            }
                                            className="bg-white rounded-xl border py-4 pl-2 ml-5 text-sm text-black hover:bg-gray-200 hover:border-2  "
                                            placeholder="Email-ээ оруулна уу?"
                                          ></input>
                                        </div>
                                        <button
                                          onClick={handleSubmit}
                                          className="bg-red-400 rounded-2xl py-2 px-6 text-white text-md"
                                        >
                                          Save
                                        </button>
                                        <p className="text-4xl font-bold">
                                          Хадгалагдсан хэрэглэгчид:
                                        </p>

                                        {data.map((res) => (
                                          <div
                                            key={res.data}
                                            className=" bg-gray-50 border border-gray-300 rounded-xl shadow-md m-4 p-4 hover:bg-gray-100 transition duration-300"
                                          >
                                            <p className="text-sm font-semibold text-gray-700">
                                              Name: {res.first_name}{" "}
                                              {res.last_name}
                                            </p>
                                            <p className="text-sm font-semibold text-gray-600">
                                              Нас: {res.age}
                                            </p>
                                            <p className="text-sm font-semibold text-gray-600">
                                              Email: {res.email}
                                            </p>
                                            
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
