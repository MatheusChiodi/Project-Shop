import { useState } from 'react';
import Contact from './Contact';

const Header = () => {
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

    // Departments
    const [isOpenDepartments, setIsOpenDepartments] = useState(false);

    const toggleDropdownDepartments = () => {
        setIsOpenDepartments(!isOpenDepartments);
        // o botao cor outra cor quando clicado
        document.getElementById("dropdownDepartments").classList.toggle("text-[#ff5555]");
    };

    // Types
    const [isOpenTypes, setIsOpenTypes] = useState(false);

    const toggleDropdownTypes = () => {
        setIsOpenTypes(!isOpenTypes);
        // o botao cor outra cor quando clicado
        document.getElementById("dropdownTypes").classList.toggle("text-[#ff5555]");
    };

    //Contact
    const [isOpenContact, setIsOpenContact] = useState(false);
    const [contactKey, setContactKey] = useState(Math.random());

    function toggleMenuContact(){
        setIsOpenContact(!isOpenContact);
        setContactKey(Math.random()); // gera um novo valor aleatório para a key do componente
    }

    return (
        <div className="m-0 p-0 fixed top-0 bg-[#f8f8f200] mx-auto" style={{ zIndex: 9999 }}>
            <header className="fixed top-0 w-full m-0 p-0 md:bg-[#282a36] bg-[#f8f8f200] text-[#f8f8f2] max-w-[2000px]">
                <nav className="bg-[#282a36]  flex items-center justify-between flex-wrap  md:px-6 px-2 md:border-none border-b border-b-[#44475A] rounded-b-[20px] max-w-[2000px]">
                    <div className="block md:hidden w-[100%]">
                        <div className="flex justify-between flex-row w-[100%] p-0 m-0 items-center">
                            <div className="flex justify-center pt-2 p-0 m-0 w-5/12">
                                <label className="hamburger mt-[-10px] p-0">
                                    <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
                                    <svg viewBox="0 0 32 32">
                                        <path className={isOpen ? 'line line-top-bottom open' : 'line line-top-bottom'} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                        <path className={isOpen ? 'line open' : 'line'} d="M7 16 27 16"></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="flex justify-cemter w-2/12">
                                <p className="h-[39px] mx-auto rounded-[80px] flex items-center justify-center text-center">
                                    <img src='logo.png' className="w-[40px] h-[40px] ml-2 md:mt-2" />
                                </p>
                            </div>
                            <div className="flex justify-center items-center p-0 m-0 w-5/12">
                                <label htmlFor="toggleContactModal" className="h-[25px] text-center inline-block px-4 py-1 leading-none border rounded-xl border-[#44475A] text-white text-[13px] bg-[#282a36] cursor-pointer hover:bg-[#ff5555] hover:border-[#ffffff] transition-colors">Contact</label>
                                <input type="checkbox" name="toggleContactModal" id="toggleContactModal" checked={isOpenContact} onChange={toggleMenuContact}  className="hidden"/>
                            </div>
                        </div>
                        
                    </div>
                    {isOpen ? (
                    <div className="w-full flex-grow md:flex md:items-center md:w-auto" id="menu">
                        <div className="px-2 w-[60px] text-center hidden md:block border-r-[2px] border-[#ff5555] me-3">
                            <img src='logo.png' className="w-[40px] h-[40px]"/>
                        </div>
                        <div className="md:w-[85%] w-full text-center md:text-left md:mb-0 mb-2 flex flex-row justify-center md:justify-start">
                            <div className="relative">
                                <button
                                    id="dropdownDepartments"
                                    onClick={toggleDropdownDepartments}
                                    className='hover:text-[#ff5555]'
                                >
                                    Departments
                                </button> 
                                {isOpenDepartments && (
                                    <div className="absolute top-0 left-0 mt-6 p-1 text-[18px] text-center bg-[#282a36] rounded-b-lg w-[114px] border-t-0 border-2 border-[#ff5555]">
                                        <ul>
                                            <li className="text-[#f8f8f2] hover:text-[#ff5555] cursor-pointer">
                                                Hardware
                                            </li>
                                            <li className="text-[#f8f8f2] mt-2 hover:text-[#ff5555] cursor-pointer">
                                                Peripherals
                                            </li>
                                            <li className="text-[#f8f8f2] mt-2 hover:text-[#ff5555] cursor-pointer">
                                                Games
                                            </li>
                                            <li className="text-[#f8f8f2] my-2 hover:text-[#ff5555] cursor-pointer">
                                                Consoles
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="ms-3 hover:text-[#ff5555] cursor-pointer">Releases</a>
                            <a href="#" className="ms-3 hover:text-[#ff5555] cursor-pointer">Offer of the day</a>
                        </div>
                        <div className="px-2 text-center hidden md:block border-x-[2px] border-[#ff5555] pt-[4px] p-0 h-[40px] justify-center items-center font-normal">
                            <div className="relative w-full">
                                <button
                                    id="dropdownTypes"
                                    onClick={toggleDropdownTypes}
                                    className='hover:text-[#ff5555]'
                                >
                                    Types
                                </button> 
                                {isOpenTypes && (
                                    <div className="absolute top-0 left-[-11.5px] mt-6 bg-[#282a36] w-[73.80px] border-t-0 border-[2px] border-[#ff5555] rounded-b-lg">
                                        <ul>
                                            <li className="text-[#f8f8f2] hover:text-[#ff5555] cursor-pointer mt-3">
                                                <i className="fas fa-mouse text-[30px]"></i>
                                            </li>
                                            <li className="text-[#f8f8f2] mt-2 hover:text-[#ff5555] cursor-pointer">
                                                <i className="fas fa-keyboard text-[30px]"></i>
                                            </li>
                                            <li className="text-[#f8f8f2] mt-2 hover:text-[#ff5555] cursor-pointer">
                                                <i className="fas fa-headset text-[30px]"></i>
                                            </li>
                                            <li className="text-[#f8f8f2] my-2 hover:text-[#ff5555] cursor-pointer">
                                                <i className="fas fa-hdd text-[30px]"></i>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    ) : (null)}
                </nav>
            </header>

            {isOpenContact && <Contact key={contactKey}/> }
        </div>

    )
}

export default Header