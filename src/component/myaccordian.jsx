import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState } from 'react';
export default function Accordian({ question, answer }) {

    const [data, setData] = useState(false);
    return (

        <>
            <div className='flex flex-col '>
                <div className='grid grid-cols-2'>
                    <div><h2 className=" text-gray-800 md:text-xl text-lg font-medium font-['Satoshi']">{question}</h2></div>
                    <div className='flex justify-end  hover:cursor-pointer' onClick={() => setData(!data)}>{data ? <RemoveCircleOutlineIcon /> : <AddIcon />}</div>
                </div>
                <div >
                    {
                        data && <p>{answer}</p>
                    }
                </div>

            </div>
        </>
    )

}