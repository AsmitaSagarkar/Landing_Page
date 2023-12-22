import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';
export default function Accordian({question,answer}){

    const [data,setData] =useState(false);
    return(

        <>
        <div className='flex justify-center items-center flex-col mx-10 lg:mx-0'>
        <div className='flex flex-row'>
        <div className='flex justify-center  text-justify'><h2 className="w-[720px] text-gray-800 text-xl font-medium font-['Satoshi']">{question}</h2></div>
        <div className='flex justify-center' onClick={()=>setData(!data)}>{data?<RemoveCircleOutlineIcon />:<AddIcon />}</div>
        </div>
        <div className='w-[720px] flex justify-center mb-5'>
        {
            data&&<p>{answer}</p>
        }
        </div>

        </div>
        </>
    )

}