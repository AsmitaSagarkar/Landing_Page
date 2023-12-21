import Main from "./main";
import Logo from "./logo";
export default function Header() {
    return (
        <div  style={{ backgroundImage: 'url("/bg_image.png")' }}>
        <div className="grid grid-cols-3">
            <div className="text-center text-gray-700 text-2xl font-bold font-['Satoshi'] mt-11 mb-14">UniCraft</div>

            <div class="w-[286px] h-6 justify-center items-center gap-12 inline-flex mt-11 ml-9">
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="text-gray-700 text-lg font-medium font-['Satoshi']">How it works</div>
                </div>
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="text-gray-700 text-lg font-medium font-['Satoshi']">Pricing</div>
                </div>
                <div class="justify-center items-center gap-2.5 flex">
                    <div class="text-gray-700 text-lg font-medium font-['Satoshi']">FAQ</div>
                </div>
            </div>


            <div class="w-[153px] h-[50px] px-[34px] py-4 rounded-lg shadow-inner border border-gray-600 justify-center items-center gap-2.5 inline-flex mt-8 ml-24">
                <div class="text-gray-600 text-lg font-bold font-['Satoshi']">Contact us</div>
            </div>


        </div>
        <Main />
        <Logo />
        </div>
        

    )
}