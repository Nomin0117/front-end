import { useRouter } from "next/router";

export default function Pet2() {
  const router = useRouter();

  const services = [
    {
      title: "Усанд оруулах",
      desc: "Усанд оруулж арчлах. /20.0$/",
      img: "shower.jpg",
    },
    {
      title: "Үс засах",
      desc: "Үсийг багасгаж , хусах. /25.4$/",
      img: "hair.avif",
    },
    {
      title: "Амьтны эмнэлэг хүргэх/авах",
      desc: "Амьтныг эмнэлэгт үзүүлэх шаардлагатай үед хүргэж авах үйлчилгээ. /30.0$ month/",
      img: "doctor.jpg",
    },
    {
      title: "Амьтны хоол, хэрэгслийн хүргэлт",
      desc: "Амьтны хоол, тоглоом, хумсны үрүүр, өргөө гээд бүх төрлийн хэрэгсэл хүргэх үйлчилгээ. /10,5$/",
      img: "food.jpg",
    },
    {
      title: "Салхинд гаргах / зугаалуулах",
      desc: "Заасан цагт тэжээвэр нохой, муурыг гадаа салхилуулах, дасгал хийх. /45.5$ month/",
      img: "walk.webp",
    },
    {
      title: "Амьтныг хянах",
      desc: "Эзэд нь гадуур явсан үед гэрт нь очиж тэжээвэр амьтныг арчлах, хооллох, хянах үйлчилгээ. /70$ month/",
      img: "care.jpg",
    },
    {
      title: "Амьтны түр байршуулалт",
      desc: "Амьтныг түр хугацаанд байрлуулан асрах байр, асрамжийн үйлчилгээ. /13.7$ a day/",
      img: "house.jpg",
    },
    {
      title: "Сургалтын үйлчилгээ",
      desc: "Нохой, муурыг сургах, тушаал биелүүлэх, хүнд дасгах үйлчилгээ. /160.78$ year/",
      img: "training.jpg",
    },
    {
      title: "Хумс авах, шүд цэвэрлэх",
      desc: "Амьтдын хумсыг авч өгөх, шүдийг цэвэрлэх эрүүл ахуйн үйлчилгээ. /36.4$ /",
      img: "brush.webp",
    },
    {
      title: "Фото зураг",
      desc: "Амьтантай хамт мэргэжлийн гэрэл зурагчинтай зураг авахуулах. /260.5$ hundred times/",
      img: "picture.jpg",
    },
    {
      title: "Төрсөн өдөр, баярын үйлчилгээ",
      desc: "Амьтдад зориулсан төрсөн өдөр, баярын үйлчилгээ. /560.89$ a day/",
      img: "hbd.jpg",
    },
  ];

  return (
    <div className="h-full w-screen bg-stone-200">
 
      <div className="sticky top-0 bg-stone-200 z-10">
        <div className="pt-2 flex items-center justify-between px-12">
          <div className="flex items-center gap-4">
            <img src="/logo.png" className="h-20" alt="" onClick={() => router.push("/pet")} />
            <p className="font-bold text-xl text-amber-950">Happy Pet</p>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-black text-xl font-bold mr-[600]">Үйлчилгээ</p>
              <div className="flex justify-center gap-2 mb-6 mr-[600] mt-2">
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-6 h-3 rounded-full bg-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
                <div className="w-3 h-3 rounded-full border-2 border-amber-900"></div>
              </div>
            </div>

            <div
              className="h-8 px-4 bg-amber-900 text-white text-sm font-medium rounded-md flex items-center justify-center cursor-pointer hover:bg-amber-800 transition"
              onClick={() => router.push("/pet")}
            >
              Буцах
            </div>
          </div>
        </div>
      </div>

     
      <div className="px-8 py-4 max-w-4xl mx-auto">
        <p className="text-lg font-semibold text-amber-950 mb-6">
          Та ямар үйлчилгээ авах вэ?
        </p>

        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => router.push("/pet3")}
              className="flex items-start gap-4 bg-stone-100 p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-12 h-12 object-cover rounded-lg border border-stone-400"
              />
              <div>
                <h3 className="text-amber-950 font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
