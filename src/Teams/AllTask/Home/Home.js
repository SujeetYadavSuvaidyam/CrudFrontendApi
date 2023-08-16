import React, { useEffect, useState } from 'react'
import { BsArrowDown, BsThreeDotsVertical } from 'react-icons/bs'
import { BsCircle } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'
import { RxCross2 } from 'react-icons/rx'
import { UserContext } from '../../usecontext/Usecontext'
import { useContext } from 'react'
import axios from 'axios'
import Homeud from './Homeud'
import { GrUpdate } from 'react-icons/gr'
const Home = () => {
    const { task, settask, upadate, value, setValue, setupadate, task_id } = useContext(UserContext);
    const [card, setcard] = useState(false);
    const [render, setrender] = useState('');
    const headers = { 'token': sessionStorage.getItem('token') }
    const add = () => {
        axios.post(`http://localhost:4000/task`, { task: value }, { headers })
            .then((res) => {
                setrender(!render);
                console.log(res);
                setValue('');
            }).catch((err) => {
                console.log(err);
            })


    }
    const gettask = () => {
        axios.get(`http://localhost:4000/task`, { headers }).then((res) => {
            settask(res.data.tasks)
        }).catch((err) => {
            console.log(err)
        })
    }

    const cards = (e) => {
        e.card = !e.card
        settask([...task])
    };

    const Update = () => {
        axios.put(`http://localhost:4000/task/${task_id}`, { task: value }, { headers },)
            .then((res) => {
                console.log(res);
                setupadate(false);
                setrender(!render);
                setValue('');
            }).then((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        gettask()
    }, [render])



    return (
        <>
            <div className=' w-full'>
                <div className='font-semibold text-lg mx-6 md:mt-6 mt-2'>
                    <h1 className='md:pt-0 pt-3'>Tasks</h1>
                </div>
                <div>
                    <div className='md:px-5'>
                        <div className='lg:w-[100%] h-9 items-center flex justify-between  bg-slate-50 mt-5  rounded-sm'>
                            <div className='flex gap-2 lg:mx-16 md:mx-8 mx-4 '>
                                <div>
                                    <h1>Task title</h1>
                                </div>
                                <div className='mt-1'>
                                    <BsArrowDown />
                                </div>
                            </div>
                            <div className='flex gap-4 lg:mx-36 md:mx-24 mx-4'>
                                <div>
                                    <h1>Pririty </h1>
                                </div>
                                <div>
                                    <h1>Due</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:mx-5'>
                        <div className='w-full md:h-[450px] h-[150px] overflow-y-scroll'>
                            <div className='lg:w-[100%] h-10 items-center justify-between  bg-white flex  border-t-[1.5px]  cursor-pointer md:px-5 px-4 '>
                                <div>
                                    <BsCircle />
                                </div>
                                {/* input box */}
                                <input value={value} type="text" className='lg:w-[70%] md:w-[50%] outline-none py-1 focus:border-b-2 focus:border-blue-900 md:pl-4' placeholder='New task' onChange={(e) => setValue(e.target.value)} />
                                <div className='w-1 h-1 bg-green-600 rounded-full' ></div>
                                <div>
                                    <h1 className='sm:block hidden'>Due on</h1>
                                    <h1 className='sm:hidden block'>Due</h1>
                                </div>
                                <div className='cursor-pointer text-lg'>
                                    {upadate === true ? <><p onClick={() => Update()}><GrUpdate className='text-sm' /></p></> : <FcCheckmark onClick={add} />}

                                </div>
                                <div className='cursor-pointer text-lg'>
                                    <RxCross2 />
                                </div>
                            </div>
                            {task.map(e => (
                                <>
                                    <div className='lg:w-[100%] md:h-10 bg-white border-[1px] md:mx hover:bg-slate-200   relative' key={e._id}>
                                        <div className='w-full md:h-10 h-14 md:px px-4 flex justify-between items-center'>
                                            <div className='flex   md:gap-10 gap-5'>
                                                <p className=' w-4 h-4 border-[1.5px] border-black rounded-full cursor-pointer mt-1'></p>
                                                <h1>{e.task}</h1>
                                            </div>
                                            <div className=' relative  cursor-pointer'>
                                                <BsThreeDotsVertical onClick={() => cards(e)} />

                                            </div>
                                        </div>
                                        {e.card ? <Homeud _id={e._id} setrender={setrender} render={render} data={e.task} /> : null}
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Home;