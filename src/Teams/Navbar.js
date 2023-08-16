import React from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { BsBrightnessHigh } from 'react-icons/bs'
import { BsExclamationLg } from 'react-icons/bs'
import { MdOutlineDateRange } from 'react-icons/md'
import { MdPersonAddAlt } from 'react-icons/md'
const Navbar = ({ tabsActive, settabsActive }) => {
    return (
        <>
            <div className='w-full h-full'>
                <div className='w-full pt-8 '>
                    <h1 className='px-4'>My task <span className='text-gray-400'>To do</span></h1>
                    <div className='w-full h-8 items-center cursor-pointer flex gap-7 px-6 mt-4 hover:bg-white md:hover:w-[90%]' onClick={() => settabsActive('task')}>
                        <GrHomeRounded />
                        <div className='-mt-1'>
                            <p>Tasks</p>
                        </div>
                    </div>
                    <div className='flex gap-7 w-full h-8 cursor-pointer items-center px-6 mt-1 hover:bg-white md:hover:w-[90%]' onClick={() => settabsActive('myday')}>
                        <BsBrightnessHigh />
                        <div className='-mt-1'>
                            <p>My Day</p>
                        </div>
                    </div>
                    <div className='flex gap-7 w-full h-8 cursor-pointer items-center px-6 mt-1 hover:bg-white md:hover:w-[90%]'>
                        <BsExclamationLg className='text-lg' />
                        <div className='-mt-1'>
                            <p>Important</p>
                        </div>
                    </div>
                    <div className='flex gap-7 w-full h-8 cursor-pointer items-center px-6 mt-1 hover:bg-white md:hover:w-[90%]'>
                        <MdOutlineDateRange />
                        <div className='-mt-1'>
                            <p>Planned</p>
                        </div>
                    </div>
                    <div className='flex gap-7 w-full h-8 cursor-pointer items-center px-6 mt-1 hover:bg-white md:hover:w-[90%]'>
                        <MdPersonAddAlt />
                        <div className='-mt-1'>
                            <p>Assigned to <menu type="toolbar"></menu></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;