import { useRouter } from "next/router";

export default function pet3() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-200">
     
      <div className="sticky top-0 bg-stone-200 z-10">
        <div className="pt-2 flex items-center justify-between px-12">
          <div className="flex items-center gap-4">
            <img src="/logo.png" className="h-20" alt="" onClick={() => router.push("/pet")} />
            <p className="font-bold text-xl text-amber-950">Happy Pet</p>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-black text-xl font-bold mr-[500]">
                Хүргэлт баталгаажуулах
              </p>
              <div className="flex justify-center gap-2 mb-6 mr-[500] mt-2">
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-6 h-3 rounded-full bg-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
              </div>
            </div>

            <div
              className="h-8 px-4 bg-amber-900 text-white text-sm font-medium rounded-md flex items-center justify-center cursor-pointer hover:bg-amber-800 transition"
              onClick={() => router.push("/pet2")}
            >
              Буцах
            </div>
          </div>
        </div>
      </div>

     
      <div className="w-xl mx-auto p-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Нэр"
              className="text-black flex-1 p-2 rounded-lg bg-stone-100 border border-black"
            />
            <input
              type="text"
              placeholder="Овог"
              className="text-black flex-1 p-2 rounded-lg bg-stone-100 border border-black"
            />
          </div>

          <p className="text-black font-medium mt-2">Хаяг</p>
          <input
            type="text"
            placeholder="Гудамж"
            className="text-black p-2 rounded-lg bg-stone-100 border border-black"
          />
          <input
            type="text"
            placeholder="Хороо"
            className="text-black p-2 rounded-lg bg-stone-100 border border-black"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Хот"
              className="text-black flex-1 p-2 rounded-lg bg-stone-100 border border-black"
            />
            <input
              type="text"
              placeholder="Бус нутаг"
              className="text-black flex-1 p-2 rounded-lg bg-stone-100 border border-black"
            />
          </div>

          <input
            type="date"
            placeholder="Хүргэлтийн огноо"
            className="text-black p-2 rounded-lg bg-stone-100 border border-black"
          />
          <input
            type="time"
            placeholder="Хүргэлтийн цаг"
            className="text-black p-2 rounded-lg bg-stone-100 border border-black"
          />

          <label className="text-black font-medium">Тоон гарын үсэг</label>
          <div className="p-4 rounded-lg bg-stone-100 border border-black h-32 flex items-end">
            <div className="w-full border-t border-black" />
          </div>

          <button
            onClick={() => router.push("/pet4")}
            className="mt-4 bg-amber-900 text-white rounded-md py-2 hover:bg-amber-800 transition"
          >
            Төлбөр төлөх
          </button>
        </div>
      </div>
    </div>
  );
}
