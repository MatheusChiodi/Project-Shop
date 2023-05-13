import { useState } from 'react';

export default function Slide() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // quero que mude a imagem a cada 6 segundos
    setInterval(() => {
        if(currentPage === 3) {
            setCurrentPage(1);
        }else{
            setCurrentPage(currentPage + 1);
        }
    }, 6000);

    return (
        <>  
        <div className="mt-0 md:mt-[40px] h-[350px]">
            <div className="w-full" style={{ display: currentPage === 1 ? 'block' : 'none' }}>
                <img src="./slide1.jpeg" alt="" className='w-full h-[350px]'/>
            </div>
            <div className="w-full" style={{ display: currentPage === 2 ? 'block' : 'none' }}>
                <img src="./slide2.jpeg" alt="" className='w-full h-[350px]'/>
            </div>
            <div className="w-full" style={{ display: currentPage === 3 ? 'block' : 'none' }}>
                <img src="./slide3.jpeg" alt="" className='w-full h-[350px]'/>
            </div>
            <div className="md:mt-5 mt-[-30px] absolute top-[-300] md:top-[320px] flex justify-center text-center w-full">
                <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`p-2 ms-1 ${currentPage === 1 ? 'bg-white' : 'bg-gray-300'} hover:bg-slate-50 rounded-[50%] transition-all`}
                ></button>
                <button
                onClick={() => handlePageChange(2)}
                disabled={currentPage === 2}
                className={`p-2 ms-1 ${currentPage === 2 ? 'bg-white' : 'bg-gray-300'} hover:bg-slate-50 rounded-[50%] transition-all`}
                ></button>
                <button
                onClick={() => handlePageChange(3)}
                disabled={currentPage === 3}
                className={`p-2 ms-1 ${currentPage === 3 ? 'bg-white' : 'bg-gray-300'} hover:bg-slate-50 rounded-[50%] transition-all`}
                ></button>
            </div>
        </div>
        </>
    )
}
  
  