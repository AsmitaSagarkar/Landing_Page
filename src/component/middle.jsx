import img1 from "./frame/Frame12.png";
import img2 from "./frame/Frame9.png";
import img3 from "./frame/Frame10.png";
import img4 from "./frame/Frame11.png";
import img5 from "./frame/Frame13.png";

export default function Middle() {
    return (


        <>
            <div className="flex justify-center gap-5 overflow-hidden mt-24">

                <img className="w-[320px] h-[400px] rounded-md" src={img1} alt="Loading" />
                <img className="w-[320px] h-[400px] rounded-md" src={img2} alt="Loading" />
                <img className="w-[320px] h-[400px] rounded-md" src={img3} alt="Loading" />
                <img className="w-[320px] h-[400px] rounded-md" src={img4} alt="Loading" />
                <img className="w-[320px] h-[400px] rounded-md" src={img5} alt="Loading" />


            </div>

            <div className="flex justify-center mt-14">
                <div class="w-[273px] h-[62px] px-[34px] py-4 rounded-lg shadow-inner border border-gray-600 justify-center items-center gap-2.5 inline-flex">
                    <div class="text-gray-600 text-xl font-bold font-['Satoshi']">View recent work</div>
                </div>
            </div>
        </>

    )
}