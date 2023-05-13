import './QuickAccess.css';

export default function QuickAccess() {
    return (
        <>
            <div className="w-full px-[10%] bg-[#f8f8f2] h-[180px] mt-[20px]">
                <p className="text-[30px] w-full text-center">
                    <span className="font-bold">Quick</span> Access
                </p>
                <div className="flex h-[150px] mx-auto justify-center items-center">
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-[#f8f8f2] me-[20px] border-[2px] border-[#ff5555] hover:brightness-[95%]">
                        <i className="fas fa-chevron-left text-[20px] text-[#ff5555]"></i>
                    </button>
                    <div className="flex flex-row justify-center items-center">
                        <div className="bg-[#ff5555] h-[100px] w-[100px] rounded-[20px] me-2 text-center hover:brightness-[90%] hover:scale-[101%] cursor-pointer">
                            <i className="fas fa-mouse text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                        </div>
                        <div className="bg-[#ff5555] h-[100px] w-[100px] rounded-[20px] me-2 text-center hover:brightness-[90%] hover:scale-[101%] cursor-pointer">
                            <i className="fas fa-keyboard text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                        </div>
                        <div className="bg-[#ff5555] h-[100px] w-[100px] rounded-[20px] me-2 text-center hover:brightness-[90%] hover:scale-[101%] cursor-pointer">
                            <i className="fas fa-headset text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                        </div>
                        <div className="bg-[#ff5555] h-[100px] w-[100px] rounded-[20px] text-center hover:brightness-[90%] hover:scale-[101%] cursor-pointer">
                            <i className="fas fa-hdd text-[40px] text-[#f8f8f2] mt-[30px]"></i>
                        </div>
                    </div>
                    <button className="w-[50px] h-[50px] rounded-[50%] bg-[#f8f8f2] ms-[20px] border-[2px] border-[#ff5555] hover:brightness-[95%]">
                        <i className="fas fa-chevron-right text-[20px] text-[#ff5555]"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
  
  