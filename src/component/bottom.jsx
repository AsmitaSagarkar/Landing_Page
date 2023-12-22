import Footer from "./footer";
export default function Bottom(){

    return (

        <>
        <div style={{ backgroundImage: 'url("/bottom.png")' }}>
        
        <div className="flex justify-center">
        <div className="w-[1440px] text-center text-gray-900 lg:text-7xl md:6xl 4xl font-black font-['Satoshi'] mt-16">No long-term contracts.<br/>No catches. Simple.</div>
        
        </div>

        <div className="flex justify-center">
        <div className="w-[1440px] text-center text-gray-500 lg:text-xl text-lg font-medium font-['Satoshi']">Start your 30-day free trial. Cancel anytime.</div>
        </div>

        <div className="flex justify-center">
        <div className="w-[215px] h-[60px] px-[34px] py-4 bg-gray-800 mt-10 mb-16 rounded-lg shadow-inner justify-center items-center gap-2.5 inline-flex">
    <div class="text-gray-50 lg:text-xl text-lg  font-bold font-['Satoshi'] ">Contact us</div>
</div>
        </div>
        <div className="overflow-hidden mb-10">
        <Footer />
        </div>
        

        </div>
        </>
    )
}