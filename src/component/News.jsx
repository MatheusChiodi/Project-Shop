import Slide from './Slide';

export default function News() {
    return (
        <>
            <div className="w-full md:px-[10%] px-3 bg-[#f8f8f2] mt-[20px]">
                <p className="text-[30px] font-bold w-full text-center">
                    News
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0">
                    <div className="bg-red md:me-2 me-0 rounded-[20px] mt-3 itens2 object-contain">
                        <img src="./newsMouse.png" alt="" className="w-full h-[250px] lg:h[350px]  rounded-[20px]" />
                    </div>
                    <div className="bg-red h-[250px] md:ms-2 ms-0 rounded-[20px] mt-3 itens2 object-contain">
                        <img src="./newKeyboard.png" alt="" className="w-full h-[250px] lg:h[350px]  rounded-[20px]" />
                    </div>
                </div>
                <Slide customClass="my-3 rounded-[20px]" customClassImg="w-full h-[350px]" customClassImgMobile="w-full h-[500px]"/>
            </div>
        </>
    )
}
  
  