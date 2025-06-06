import { useRouter } from "next/router";
export default function toki(){
    const router=useRouter();
    return(
        <div  className="">
            <div className="bg-white h-22 sticky top-0 ">
           <div className="pt-[18px] flex ">
                 <img src="tokilogo.png" className="ml-34 w-[130px] h-14"/>
           <div className="mt-3 flex space-x-7 ml-[680px]">
            <p className="text-black text-md ">Үйлчилгээ</p>
            <p className="text-black text-md ">Давуу тал</p>
            <p className="text-black text-md ">Мэдээ</p>
            <p className="text-black text-md ">Хамтран ажиллах</p>
           </div>
           </div>

            </div>

            <div className="h-screen w-screen bg-orange-100">
                <div className="flex justify-center absolute ">
                <p className=" ml-[450px] text-black text-3xl font-light mt-24">ХЭРЭГЦЭЭТ  ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</p>
                </div>
                <div className="h-12 w-screen bg-orange-100">
                </div>
                <div className="flex justify-center  ">
                <img src="neg.png" className="h-[700px]"/>
                </div>
                <div className="flex space-x-6 justify-center ">
                 <img src="apple.png" className="w-[160px] h-14"/>
                 <img src="android.png" className=" w-[160px] h-14"/>
               </div>
            </div>


            <div className="h-screen w-screen bg-gray-50">
                <div className="flex ">
                        <img src="hoyr.png" className="absolute ml-32" />
                        <div className=""> 
                            <p className="font-bold text-4xl text-yellow-400 mt-72 mr-34 ml-[800px]">Toki Service</p>
                            <p className="text-md  text-black mt-6 mr-34 ml-[805px]">Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний</p>
                            <p className="text-md  text-black mr-34 ml-[805px]">төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд</p>
                            <p className="text-md  text-black mr-34 ml-[805px]">хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах</p>
                            <p className="text-md  text-black mr-34 ml-[805px]">боломжтой.</p>

                        </div>
                </div>

            </div>


            <div className="h-screen w-screen bg-orange-100">
            <div className="flex ">
            <div className=""> 
                            <p className="font-bold text-4xl text-yellow-400 mt-72 mr-34 ml-[550px]">Toki Pay</p>
                            <p className="text-md  text-black mt-6 mr-34 ml-34">Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч </p>
                            <p className="text-md  text-black mr-34  ml-34">юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг </p>
                            <p className="text-md  text-black mr-34 ml-[440px]">
                            баримтуудаа нэг дор хадгалаарай.</p>

                        </div>
                        <img src="gurav.png" className="absolute ml-32" />
                </div>

            </div>
            

            <div className="h-screen w-screen bg-gray-50">
                \<div className="flex ">
                        <img src="dorov.png" className="absolute ml-32" />
                        <div className=""> 
                            <p className="font-bold text-4xl text-yellow-400 mt-72 mr-34 ml-[800px]">Toki Shop</p>
                            <p className="text-md  text-black mt-6 mr-34 ml-[805px]">Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж,</p>
                            <p className="text-md  text-black mr-34 ml-[805px]">нэг дороос шууд захиалах боломжтой.</p>
                           

                        </div>
                </div>


            </div>

            <div className="h-[500px] w-screen bg-white">
                
                <p className="font-bold text-4xl text-yellow-400 pt-30 flex justify-center ">Toki апп өдөр бүр танд тусална</p>
                <p className="text-md text-black flex justify-center mt-6">Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг</p>
                <p className="text-md text-black flex justify-center ">хэмнэх хялбар, хэрэгтэй аппликейшн юм.</p>

               

               
            

            </div>

            <div className="h-38 w-screen bg-orange-100">
                <div className="flex justify-center pt-12">
                <div className="bg-amber-400 w-[150px] h-12 rounded-full">
                    <p className=" font-semibold text-white texr-lg flex justify-center pt-2"> Давуу тал</p>
                </div>
                </div>

            </div>

            <div className="h-64 w-screen bg-black">
                <div className="flex">
                    <img src="tokilogo.png" className="w-[100px] h-10 ml-42 mt-20"/>
                    <div>
                    <p className="text-gray-300 mt-16 ml-34 text-sm hover:text-amber-400">Түгээмэл асуулт</p>
                    <div className="flex">
                        <img src="location.png" className="w-4 h-4 ml-34 mt-4 "/>
                        <p className="text-gray-300 mt-4 text-sm hover:text-amber-400">Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>

                    </div>
                   <div className="flex">
                   <img src="apple-phone.png" className="w-4 h-4 ml-34  "/>

                   <p className="text-gray-300  ml-2 text-sm hover:text-amber-400">
                    77074477, 4477</p>
                    <img src="mail.webp" className="w-4 h-4 ml-6  "/>

                    <p className="text-gray-300   ml-2 text-sm hover:text-amber-400">
                    info@toki.mn</p>
                   </div>
                   <p className="text-gray-300 mt-8 ml-34 text-sm hover:text-amber-400">
                   Copyright © 2022 | Toki.mn</p>

                    </div>
                    
                    <p className="text-gray-300 mt-16 ml-62 text-sm hover:text-amber-400">Нууцлал</p>

                     <div className="flex mt-30 space-x-4">
                          <img src="facebook.png" className="h-6 w-6 "/>
                          <img src="instagram.png" className="h-8 w-8"/>

                      </div>

                </div>

            </div>



        </div>
    )
        
}
