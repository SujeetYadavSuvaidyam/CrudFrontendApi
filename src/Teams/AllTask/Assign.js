import React from 'react'
import { MdPersonAddAlt } from 'react-icons/md'

const Assign = () => {
    return (
        <>
            <div>
                <div className='flex gap-7 w-full h-8 cursor-pointer items-center px-6 mt-1 hover:bg-slate-100 hover:w-[90%]'>
                    <MdPersonAddAlt />
                    <div className='-mt-1'>
                        <p>Assigned to <menu type="toolbar"></menu></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assign;