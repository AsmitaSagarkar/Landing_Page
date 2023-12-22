import Frame from "./frame/Frame.png";
export default function Working() {

    return (

        <>

            <div className="flex justify-center mt-11 mb-20 mr-5 ml-5">
                <div className="w-[1260px] h-fit relative bg-white rounded-[25.64px] shadow border border-gray-200">
                    <div className="mt-20 text-center text-gray-800 text-5xl font-bold font-['Satoshi']">How it works</div>
                    <div className="text-center text-gray-600 text-xl font-medium font-['Satoshi']">Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</div>
                    
                    <div className="grid md:grid-cols-5 mt-14 mr-14 ml-14 grid-cols-1">
                    <div>
                        <div className="text-center  text-purple-300 text-[240.21px] font-bold font-['Satoshi']  leading-[122.14px]">1</div>
                        <div className="self-stretch text-center  text-gray-800 text-[40px] font-black font-['Satoshi'] relative bottom-14">Subscribe</div>
                        <div className="self-stretch text-center text-gray-500 text-lg font-medium font-['Satoshi'] relative bottom-16 leading-5">Subscribe to a plan & you’ll get an instant access to your private Slack channel.</div>
                    </div>

                    <div className="md:relative top-[40px] left-[80px] hidden md:block"><img src={Frame} alt="Loading"/></div>


                    <div>
                        <div className="text-center text-purple-300 text-[240.21px] font-bold font-['Satoshi'] leading-[122.14px]">2</div>
                        <div className="text-center text-gray-800 text-[40px] font-black font-['Satoshi'] relative bottom-24">Request</div>
                        <div className=" text-center leading-5 text-gray-500 text-lg font-medium font-['Satoshi'] relative bottom-24">Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours</div>
                    </div>

                    <div className="md:relative top-[40px] left-[80px] hidden md:block"><img src={Frame} alt="Loading"/></div>


                    <div>
                        <div className="text-center text-purple-300 text-[240.21px] font-bold font-['Satoshi'] leading-[122.14px]">3</div>
                        <div className="self-stretch text-center text-gray-800 text-[40px] font-black font-['Satoshi'] relative bottom-14">Revise</div>
                        <div className="self-stretch text-center text-gray-500 text-lg font-medium font-['Satoshi'] relative bottom-16 leading-5">Need changes? We guarantee unlimited revisions until you're 200% satisfied.</div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </>
    )
}