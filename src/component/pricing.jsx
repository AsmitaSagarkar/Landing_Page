import Free from "./free";
import Professional from "./professional";
import Enterprise from "./enterprise";

export default function Pricing(){
    return(

        <>
        <div id="pricing" style={{ backgroundImage: 'url("/Landing_Page/Gradient.png")' }} >

        <div className="flex justify-center">
        <div class="text-center text-gray-800 md:text-[58px] text-[40px] font-bold font-['Satoshi']">Pricing made for collaborative support.</div>
        </div>

        <div className="flex justify-center">
        <div class="w-[685px] text-center text-gray-500 lg:text-xl text-lg font-medium font-['Satoshi']">Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</div>
        </div>

        <div className="lg:flex lg:flex-row mt-14 justify-center gap-7 mb-12 grid md:grid-cols-2 ml-5 mr-5 grid-cols-1">
        <div className="flex justify-center"><Free /></div>
        <div className="flex justify-center"><Professional /></div>
        <div className="flex justify-center"><Enterprise /></div>
        
        </div>

        

        </div>
        </>
    )
}