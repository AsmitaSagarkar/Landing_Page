import Logomark from "./sectionimage/Logomark.png";
import Logotype from "./sectionimage/Logotype.png";
import Avatar from "./sectionimage/Avatar.png";

export default function Section() {
    return (
        <>
            <div className="mb-16"  style={{ backgroundImage: 'url("/bg2.png")' }}>
                <div className="flex flex-row justify-center gap-2 pt-10">
                    <img src={Logomark} alt="Loading" />
                    <img src={Logotype} alt="Loading" />
                </div>
                <div className="flex justify-center mt-14 ">
                    <div class="text-center text-gray-800 text-5xl font-bold font-['Satoshi'] leading-[60px] pl-20 pr-20">We’ve been with unicraft to kick start every new project and can’t imagine working without it.</div>
                </div>
                <div className="flex justify-center mt-14 ">
                    <img class="w-16 h-16 rounded-[200px] " alt="Loading..." src={Avatar} />
                </div>
                <div className="flex justify-center flex-col ">
                    <div class="text-center text-gray-900 text-lg font-medium font-['Satoshi'] leading-7">Candice Wu</div>
                    <div class="text-center text-gray-500 text-base font-normal font-['Satoshi'] leading-normal mb-16">Product Manager, Sisyphus</div>
                </div>
            </div>






        </>
    )
}