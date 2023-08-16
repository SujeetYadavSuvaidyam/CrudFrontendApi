import React, { useContext } from 'react'
import { BsBrightnessHigh } from 'react-icons/bs'
import { FcApproval } from 'react-icons/fc'
import { SlArrowRight } from 'react-icons/sl'
import { BsExclamationLg } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import { UserContext } from '../../usecontext/Usecontext'

const Homeud = (_id) => {
    const { setupadate, setValue, task_id, settask_id } = useContext(UserContext);
    const headers = { 'token': sessionStorage.getItem('token') }
    const deleteTask = () => {
        axios.delete(`http://localhost:4000/task/${_id._id}`, { headers })
            .then((res) => {
                console.log(res);
                _id.setrender(!_id.render);
            }).then((err) => {
                console.log(err);
            })
    }
    const handelUpdate = () => {
        setValue(_id?.data);
        settask_id(_id?._id);
        setupadate(true);
    }
    return (
        <>
            <div className='sm:w-52 w-32 sm:h-60 bg-slate-100 absolute z-[999] top-[30px]  right-12 shadow-lg rounded-md px-3'>
                <div className='sm:block hidden'>
                    <div className='w-full flex items-center pt-4 gap-3'>
                        <div><BsBrightnessHigh /></div>
                        <h1>Add to My Day</h1>
                    </div>
                    <div className='w-full flex items-center pt-4  justify-between'>
                        <div className='flex items-center gap-3 text-lg'>
                            <div><FcApproval /></div>
                            <h1>Progress</h1>
                        </div>
                        <div><SlArrowRight /></div>
                    </div>
                    <div className='w-full flex items-center pt-4  justify-between'>
                        <div className='flex items-center gap-3 text-lg'>
                            <div><BsExclamationLg /></div>
                            <h1>Priority</h1>
                        </div>
                        <div><SlArrowRight /></div>
                    </div>
                </div>
                <div onClick={handelUpdate} className='w-full flex items-center text-sm sm:text-lg sm:pt-4 pt-1 gap-3 cursor-pointer'>
                    <div><GrUpdate /></div>
                    <h1>Update Task</h1>
                </div>
                <div className='border-b-[1.7px] sm:pt-4 pt-1'></div>
                <div className='w-full flex items-center sm:pt-3 gap-3 sm:text-lg text-sm pb-1 cursor-pointer' onClick={deleteTask}>
                    <div><AiOutlineDelete /></div>
                    <h1>Delete Task</h1>
                </div>
            </div>
        </>
    )
}

export default Homeud;