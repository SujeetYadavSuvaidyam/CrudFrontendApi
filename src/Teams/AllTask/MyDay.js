import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { BsCircle } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'
const MyDay = () => {
    return (
        <>
           <div>
                <div className='font-semibold text-lg mx-6 mt-6'>
                    <h1>My Day</h1>
                </div>
                <div>
                    <div className='w-[95%] h-9 items-center flex justify-between bg-slate-50 mt-5 mx-5 rounded-sm'>
                        <div className='flex gap-2 mx-16'>
                            <div>
                                <h1>Task title</h1>
                            </div>
                            <div className='mt-1'>
                                <BsArrowDown />
                            </div>
                        </div>
                        <div className='flex gap-4 mx-36'>
                            <div>
                                <h1>Pririty </h1>
                            </div>
                            <div>
                                <h1>Due</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[95%] h-10 items-center justify-between px-7  bg-white flex  border-[1.7px] mx-5 '>
                        <div>
                            <BsCircle />
                        </div>
                        <input type="text" className='w-[70%] outline-none py-1 focus:border-b-2 focus:border-blue-900 pl-4' placeholder='New task' />
                        <div className='w-1 h-1 bg-green-600 rounded-full'></div>
                        <div>
                            <h1>Due on</h1>
                        </div>
                        <div>
                            <FcCheckmark />
                        </div>
                        <div>
                            <RxCross2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyDay;