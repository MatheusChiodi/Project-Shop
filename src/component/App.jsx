export default function App() {
    return (
        <>
            <div className="w-full lg:px-[10%] px-3 m-0 p-0 mt-[20px] lg:bg-[#282a36] lg:py-[10px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                    <div className="lg:col-span-2">
                        <p className="leading-tight text-center lg:text-left xl:text-xl lg:text-lg md:text-md lg:text-[#f8f8f2] text-gray-700">
                            <span className="font-bold">Download</span> the app now and get exclusive offers
                        </p>
                    </div>
                    <div className="flex lg:justify-end justify-center">
                        <img src="./GooglePlay.png" alt="GooglePlay" className="itens w-[150px] h-[50px] object-contain me-[10px] lg:mt-0 mt-[10px]" />
                        <img src="./AppStore.png" alt="GooglePlay" className="itens w-[150px] h-[50px] object-contain lg:mt-0 mt-[10px]" />
                    </div>
                </div>
            </div>
        </>
    )
}
  
  