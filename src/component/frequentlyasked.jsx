
import { question } from './accordian';
import Accordian from './myaccordian';
import { useState } from 'react';


export default function FAQ(){
    const [data ,setData]= useState(question);
    return(

        <>
        <div className=' flex flex-col items-center text-center' id='faq'>
        <div className=" text-gray-900 lg:text-[58px] md:text-[45px] text-[30px] font-bold font-['Satoshi']">Frequently asked questions</div>
        <div className="mb-6  text-gray-500 text-xl font-medium font-['Satoshi']">Everything you need to know about the product and billing.</div>
        </div>
        <div className='flex flex-col gap-2 mb-4 px-11 lg:px-96 md:px-64 sm:px-40'>
        {
            data.map((curEle)=>{
                const { id } =curEle;
                return <Accordian key={id} {...curEle}/>
            })
        }
        </div>
        </>
    )


}