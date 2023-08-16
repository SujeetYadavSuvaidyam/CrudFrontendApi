import React from 'react'
import mob from './Assets/new_mob.png';
import download from './Assets/download.svg';
import { AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const data = {
        email: email,
        password: password
    }
    const navigate = useNavigate()
    const login = () => {
        if (!email || !password) {
            return alert('name and email require')
        }
        axios.post('http://localhost:4000/auth/login', data).then((res) => {
            sessionStorage.setItem('token', res.data.token)
            console.log(res)
            navigate('/task')
        }).then((err) => {
            console.log("SOMETHING WENT WRONG", err)
        })
    }

    return (
        <>
            <div className='w-full h-screen bg-slate-100 max-w-[1800px] mx-auto '>
                <div className='w-full h-[2px] bg-[#206bc4]'>
                </div>
                <p className='text-md flex md:justify-start justify-center font-semibold mt-3'><Link to='/register' className='text-blue-700 md:mx-10'><span className='text-red-600'>Create Have an Account ? /</span> Register Now</Link></p>
                <div className='md:flex md:justify-center xl:gap-20 md:gap-5 md:mx-6 lg:mx-0 mx-2 '>
                    {/* img */}
                    <div className='mt-32 lg:block hidden'>
                        <img src={download} alt="" className=' h-[300px]' />
                    </div>
                    {/* form */}
                    <div>
                        <div className='flex justify-center md:justify-start'>
                            <img src={mob} alt="" className='lg:h-11 mt-4 h-9 xl:px-32 md:px-20 ' />
                        </div>
                        <div>
                            <div className='md:w-[450px]  md:h-[380px]  h-[370px] bg-white md:mt-10 mt-4  border-[1.3px] shadow-lg rounded-md opacity-90'>
                                <div>
                                    <h1 className='text-center pt-6 text-xl font-semibold '>Login to your account</h1>
                                </div>
                                <div className='mx-10 mt-10'>
                                    <label htmlFor="name" className='font-semibold  text-sm'>Email address</label>
                                    <input type="text" className='w-full h-9 focus:outline-[#89b4e7]  border-[1px] border-gray-300 rounded-md mt-1 pl-3' placeholder='Your@email.com' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='mx-10 mt-3 '>
                                    <label htmlFor="name" className='font-semibold text-sm'>Password</label>
                                    <div className='flex justify-end' onChange={(e) => setPassword(e.target.value)}>
                                        <input type="password" className='w-full h-9 focus:outline-[#89b4e7]  border-[1px] border-gray-300 rounded-md mt-1 pl-3 relative' placeholder='Enter Your Password' />
                                        <div className='absolute mt-3 mx-3 text-gray-500 text-lg cursor-pointer '>
                                            <AiOutlineEye />
                                        </div>
                                    </div>

                                </div>
                                <div className='flex mx-8 mt-3'>
                                    <input type="checkbox" className='mx-2 cursor-pointer' />
                                    <h1>Rembember on this device</h1>
                                </div>
                                <div className='w-full px-10 mt-9'>
                                    <input type="button" value="Login In" className='w-full cursor-pointer bg-[#206bc4] h-9 rounded-md text-white hover:bg-blue-400  hover:text-white duration-500 font-semibold text-sm' onClick={login} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;