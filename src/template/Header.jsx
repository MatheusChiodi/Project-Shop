import { useState } from 'react';

export default function Header() {
    // se o tamanho da tela for maior que 1024 entao useState fica como true
    // se o tamanho da tela for menor que 1024 entao useState fica como false
    var status = false;

    if (window.innerWidth > 992) {
        status = true;
    }

    const [isOpen, setIsOpen] = useState(status);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    //vou verificar o button contact e ver se ele esta aberto ou fechado
    //se ele estiver fechado eu vou abri-lo
    //ao abrir ele mostra o componente Contact

    const [isOpenContact, setIsOpenContact] = useState(false);

    function toggleMenuContact(){
        setIsOpenContact(!isOpenContact);
    }

    return (
        <div className="m-0 p-0 fixed top-0 bg-[#282a36] mx-auto" style={{ zIndex: 9999 }}>
            <header className="fixed top-0 w-full m-0 p-0 px-[40px] bg-[#282a36] text-[#f8f8f2] max-w-[2000px]">
                <nav className="flex items-center justify-between flex-wrap  md:px-6 px-2 md:border-none border-b border-b-[#44475A] rounded-b-[20px] max-w-[2000px]">
                    <div className="block md:hidden w-[100%]">
                        <div className="flex justify-between flex-row w-[100%] p-0 m-0">
                            <div className="flex justify-center pt-1 p-0 m-0 w-5/12">
                                <label className="hamburger mt-[-10px] p-0">
                                    <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
                                    <svg viewBox="0 0 32 32">
                                        <path className={isOpen ? 'line line-top-bottom open' : 'line line-top-bottom'} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                        <path className={isOpen ? 'line open' : 'line'} d="M7 16 27 16"></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="flex justify-cemter md:pt-1 p-0 m-0 w-2/12">
                                <p className="h-[39px] mx-auto rounded-[80px] flex items-center justify-center text-center">
                                    <img src='logo.png' className="w-[40px] h-[40px] ml-2 md:mt-2" />
                                </p>
                            </div>
                            <div className="flex justify-center items-center md:pt-1 p-0 m-0 w-5/12">
                                <label htmlFor="toggleContactModal" className="h-[25px] text-center inline-block px-4 py-1 leading-none border rounded-xl border-[#44475A] text-white text-[13px] bg-[#282a36] cursor-pointer">Contact</label>
                                <input type="checkbox" name="toggleContactModal" id="toggleContactModal" checked={isOpenContact} onChange={toggleMenuContact}  className="hidden"/>
                            </div>
                        </div>
                        
                    </div>
                    {isOpen ? (
                    <div className="w-full flex-grow md:flex md:items-center md:w-auto" id="menu">
                        <div className="px-2 w-[60px] text-center hidden md:block border-r-[2px] border-[#ff5555] me-3">
                            <img src='logo.png' className="w-[40px] h-[40px]"/>
                        </div>
                        <div className="md:w-[85%] w-full text-center md:text-left md:mb-0 mb-2">
                            <a href="#ContainerDepartments" className="text-md block mt-1 md:mt-0 md:inline-block text-[#f8f8f2] hover:text-[#ff5555] font-normal md:mr-4 mr-0 ms-[5%] transition-all">
                                Departments
                            </a>
                            <a href="#ContainerReleases" className="text-md block mt-1 md:mt-0 md:inline-block text-[#f8f8f2] hover:text-[#ff5555] font-normal md:mr-4 mr-0 mb-0 ms-[3%] transition-all">
                                Releases
                            </a>
                            <a href="#ContainerOfferDay" className="text-md block mt-1 md:mt-0 md:inline-block text-[#f8f8f2] hover:text-[#ff5555] font-normal md:mr-4 mr-0 mb-0 ms-[3%] transition-all">
                                Offer of the day
                            </a>
                        </div>
                        <div className="px-2 w-[10%] text-center hidden md:block border-x-[2px] border-[#ff5555] pt-[7px] p-0 h-[40px] justify-center items-center font-normal">
                            Types
                        </div>
                    </div>
                    ) : (null)}
                </nav>
            </header>
        </div>

    )
}