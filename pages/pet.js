import { useRouter } from "next/router";

export default function pet() {
  const router = useRouter();

  const pets = [
    { name: "Нохой", img: "dog.png" },
    { name: "Муур", img: "cat.jpg" },
    { name: "Шувуу", img: "bird.webp" },
    { name: "Хамстер", img: "hamster.jpg" },
    { name: "Усан гахай", img: "usan gahai.png" },
    { name: "Яст мэлхий", img: "turtle.jpg" },
    { name: "Туулай", img: "rabbit.png" },
    { name: "Загас", img: "fish.jpeg" },
  ];

  return (
    <div className="min-h-screen w-screen bg-stone-200">
    
      <div className="sticky top-0 bg-stone-200 z-10">
        <div className="pt-2 flex items-center justify-between px-12">
          
          <div className="flex items-center gap-4">
            <img src="logo.png" className="h-20" alt="" />
            <p className="font-bold text-xl text-amber-950">Happy Pet</p>
          </div>

          
          <div className="flex items-center gap-4">
            <div>
              <p className="text-black text-xl font-bold mr-[600]">Захиалга хийх</p>
              <div className="flex justify-center gap-2 mb-6 mr-[600] mt-2">
                <div className="w-6 h-3 rounded-full bg-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
              </div>
            </div>

         
            <div>
                <img src="s.png" className="h-6 w-6"/>
            </div>
          </div>
        </div>
      </div>

  
      <div className="px-8 py-6 w-6xl mx-auto">
        <p className="text-lg font-semibold text-amber-950 mb-6">
          Та амьтаныхаа төрөлийг сонгоно уу?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {pets.map((pet, index) => (
            <div
              key={index}
              onClick={() => router.push("/pet2")}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition hover:scale-105  overflow-hidden"
            >
              <img
                src={pet.img}
                alt={pet.name}
                className="h-48 w-full object-cover border-b-2 border-amber-900"
              />
              <p className="text-center text-lg font-semibold text-amber-900 p-4">
                {pet.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
