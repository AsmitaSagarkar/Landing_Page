export default function Main() {

    return (

        <>
            <div className="flex justify-center">
                <div className="w-[1101px] text-center text-gray-800 md:text-6xl 
                text-4xl font-black font-['Satoshi']">Elevate Your Presence with Seamless Design and Innovation.</div>

            </div>

            <div className="text-center text-gray-600 text-xl font-medium font-['Satoshi'] mt-5">From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</div>

            <div className="flex justify-center text-center mt-8">
                <div className="w-[215px] h-[60px] px-[34px]  py-4 bg-gray-800 rounded-lg shadow-inner">
                    <div class="text-gray-50 text-xl font-bold font-['Satoshi'] hover:cursor-pointer" onClick={() => window.location.replace("/#pricing")}>View Pricing</div>
                </div>
            </div>
        </>
    )
}