export default function NewsProduct() {
    return (
        <>
            <div className="w-full md:px-[10%] px-3 bg-[#f8f8f2] h-[300px] mt-[20px]">
                <p className="text-[30px] font-bold w-full text-center">
                    News Product
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0">
                    <div className="bg-red h-[250px] md:me-2 me-0 rounded-[20px] mt-3">
                    </div>
                    <div className="bg-red h-[250px] md:ms-2 ms-0 rounded-[20px] mt-3">
                    </div>
                </div>
                <div className="w-full bg-red h-[250px] md:me-2 rounded-[20px] mt-3 m-0 p-0"></div>
            </div>
        </>
    )
}
  
  