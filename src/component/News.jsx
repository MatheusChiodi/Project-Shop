import { useState } from 'react';

export default function News() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="w-full md:px-[10%] px-3 bg-[#f8f8f2] mt-[20px]">
                <p className="text-[30px] font-bold w-full text-center">
                    News
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full m-0 p-0">
                    <div className="bg-red h-[250px] md:me-2 me-0 rounded-[20px] mt-3 itens2">
                        <img src="./newsMouse.jpeg" alt="" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                    <div className="bg-red h-[250px] md:ms-2 ms-0 rounded-[20px] mt-3 itens2">
                        <img src="./newsKeyboard.jpeg" alt="" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
                <div className="w-full bg-red h-[250px] md:me-2 rounded-[20px] mt-3 m-0 p-0">
                    <div className="w-full" style={{ display: currentPage === 1 ? 'block' : 'none' }}>
                        <img src="./slide1.jpeg" alt="" className='w-full h-[250px] rounded-[20px]'/>
                    </div>
                    <div className="w-full" style={{ display: currentPage === 2 ? 'block' : 'none' }}>
                        <img src="./slide2.jpeg" alt="" className='w-full h-[250px] rounded-[20px]'/>
                    </div>
                    <div className="w-full" style={{ display: currentPage === 3 ? 'block' : 'none' }}>
                        <img src="./slide3.jpeg" alt="" className='w-full h-[250px] rounded-[20px]'/>
                    </div>
                    <div className="flex mt-[-30px] justify-center text-center w-full">
                        <button
                        onClick={() => handlePageChange(1)}
                        disabled={currentPage === 1}
                        className="p-2 ms-1 bg-gray-300 hover:bg-slate-50 rounded-[50%] transition-all"
                        ></button>
                        <button
                        onClick={() => handlePageChange(2)}
                        disabled={currentPage === 2}
                        className="p-2 ms-1 bg-gray-300 hover:bg-slate-50 rounded-[50%] transition-all"
                        ></button>
                        <button
                        onClick={() => handlePageChange(3)}
                        disabled={currentPage === 3}
                        className="p-2 ms-1 bg-gray-300 hover:bg-slate-50 rounded-[50%] transition-all"
                        ></button>
                    </div>
                </div>
            </div>
        </>
    )
}
  
  