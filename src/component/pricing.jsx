import Free from "./free";
import Professional from "./professional";
import Enterprise from "./enterprise";

export default function Pricing(){
    return(

        <>
        <div style={{ backgroundImage: 'url("/Gradient.png")' }}>

        <div className="flex justify-center">
        <div class="text-center text-gray-800 text-[58px] font-bold font-['Satoshi']">Pricing made for collaborative support.</div>
        </div>

        <div className="flex justify-center">
        <div class="w-[685px] text-center text-gray-500 text-xl font-medium font-['Satoshi']">Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</div>
        </div>

        <div className="flex flex-row mt-14 justify-center gap-7 mb-12">
        <Free />
        <Professional />
        <Enterprise />
        
        </div>

        

        </div>
        </>
    )
}