import Main from "./main";
import Logo from "./logo";
// import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function toggleNavbar() {
        setIsOpen(!isOpen);
    }
    return (
        <div style={{ backgroundImage: 'url("/bg_image.png")' }}>
            <nav className="grid grid-cols-3">
                <div className="text-center text-gray-700 md:text-2xl text-xl font-bold font-['Satoshi'] mt-11 mb-14">UniCraft</div>

                <div className="hidden lg:flex justify-around">
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-gray-700 md:text-lg text-md font-medium font-['Satoshi']">How it works</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-gray-700 md:text-lg text-md font-medium font-['Satoshi']">Pricing</div>
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-gray-700 md:text-lg text-md font-medium font-['Satoshi']">FAQ</div>
                    </div>



                </div>


                <div className="hidden w-[153px] h-[50px] rounded-lg shadow-inner border border-gray-600 justify-center items-center gap-2.5 lg:flex mt-8 ml-24 relative left-24">
                    <div className="text-gray-600 md:text-lg  text-md font-bold font-['Satoshi']">Contact us</div>
                </div>

                <div className="lg:hidden absolute right-5 top-11">
                    <button onClick={toggleNavbar}>{isOpen ? <CloseIcon /> : <ListIcon />}</button>
                </div>


            </nav>
            {isOpen && (
                <div className="text-white text-md font-['Satoshi'] absolute z-10 top-20 p-12 w-screen bg-black opacity-80 flex flex-col justify-center text-center">
                <div>How it Works</div>
                <div>Pricing</div>
                <div>FAQ</div>
                <button>Contact Us</button>

                </div>
            )}
            <Main />
            <Logo />
        </div>


    )
}