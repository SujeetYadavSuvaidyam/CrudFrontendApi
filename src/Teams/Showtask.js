import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './AllTask/Home/Home'
import MyDay from './AllTask/MyDay'


const Showtask = () => {
    const [tabsActive, settabsActive] = useState('task')

    return (
        <>
            <div className='w-full h-[100vh] md:flex max-w-[1800px] mx-auto'>
                <div className='md:w-[25%] border-r-2 border-neutral-300 h-auto shadow-lg bg-slate-100'>
                    <Navbar {...{ tabsActive, settabsActive }} />
                </div>
                <div className='md:w-[75%] h-full bg-slate-200 '>
                    {tabsActive === 'task' && <Home />}
                    {tabsActive === 'myday' && <MyDay />}
                </div>
            </div>
        </>
    )
}

export default Showtask;