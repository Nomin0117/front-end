import { useRouter } from "next/router";

export default function pet4() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-200 text-black">
 
 <div className="sticky top-0 bg-stone-200 z-10">
        <div className="pt-2 flex items-center justify-between px-12">
          <div className="flex items-center gap-4">
            <img src="/logo.png" className="h-20" alt="" onClick={() => router.push("/pet")} />
            <p className="font-bold text-xl text-amber-950">Happy Pet</p>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-black text-xl font-bold mr-[500]">
                QR-аар төлбөр төлөх
              </p>
              <div className="flex justify-center gap-2 mb-6 mr-[500] mt-2">
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-6 h-3 rounded-full bg-amber-900"></div>
                
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

  
      <div className="w-5xl mx-auto p-6 space-y-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
          <div className="bg-white rounded-xl shadow-xl p-6 text-center shadow-stone-600">
            <p className="mb-4 text-lg font-semibold text-blue-900">QPay-ээр төлөх</p>
            <img src="/qr.png" alt="qpay" className="w-60 h-60 mx-auto rounded-xl border" />
          </div>

         
          <div className="bg-white rounded-xl shadow-xl p-6 text-center shadow-stone-600">
            <p className="mb-4 text-lg font-semibold text-sky-700">SocialPay-ээр төлөх</p>
            <img src="/qr.png" alt="socialpay" className="w-60 h-60 mx-auto rounded-xl border" />
          </div>
        </div>

        <button
          onClick={() => alert("Төлбөр амжилттай хийгдлээ")}
          className="w-full py-3 bg-amber-900 text-white rounded-md hover:bg-amber-800 transition text-lg font-semibold"
        >
          Төлбөр шалгах
        </button>
      </div>
    </div>
  );
}
