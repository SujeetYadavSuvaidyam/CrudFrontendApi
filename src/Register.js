import React from 'react'
import mob from './Assets/new_mob.png';
import download from './Assets/download.svg';
import { AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const singup = () => {
  //   console.log([name, email, password])
  // }
  const data = {
    name: name,
    email: email,
    password: password
  }
  const navigate = useNavigate();
  const submit = () =>{
    axios.post(`http://localhost:4000/auth/register`,data).then((res)=>{
      console.log(res)
      navigate('/')
    }).catch((err)=>{
      console.log( "Somthing went wrong",err);
    })
  }

  return (
    <>
      <div className='w-full h-screen bg-slate-100 max-w-[1800px] mx-auto '>
        <div className='w-full h-[2px] bg-[#206bc4]'>
        </div>
        <p className='text-md flex md:justify-end justify-center font-semibold mt-3'><Link to='/' className='text-blue-700 md:mx-10'><span className='text-red-600'>Create Have an Account ? /</span> Login Now</Link></p>
        <div className='flex justify-center md:justify-start'>
          <img src={mob} alt="" className='lg:h-11 xl:px-64 md:px-32  mt-4 h-9 ' />
        </div>
        <div className='md:flex xl:gap-24 md:gap-5 justify-center md:mx-6 mx-2 '>
          <div className='md:w-[450px] md:h-[400px] h-[400px] bg-white md:mt-10 mt-4 border-[1.3px] shadow-lg rounded-md opacity-90'>
            <div>
              <h1 className='text-center pt-6 text-xl font-semibold '>Singup to your account</h1>
            </div>
            <div className='mx-10 mt-4'>
              <label htmlFor="name" className='font-semibold text-sm'>Name</label>
              <input type="text" className='w-full h-9 focus:outline-[#89b4e7]  border-[1px] border-gray-300 rounded-md mt-1 pl-3' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mx-10 mt-2'>
              <label htmlFor="name" className='font-semibold text-sm'>Email address</label>
              <input type="text" className='w-full h-9 focus:outline-[#89b4e7]  border-[1px] border-gray-300 rounded-md mt-1 pl-3' placeholder='Your@email.com' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mx-10 mt-2 '>
              <label htmlFor="name" className='font-semibold text-sm'>Password</label>
              <div className='flex justify-end' onChange={(e) => setPassword(e.target.value)}>
                <input type="password" className='w-full h-9 focus:outline-[#89b4e7]  border-[1px] border-gray-300 rounded-md mt-1 pl-3 relative' placeholder='Enter Your Password' />
                <div className='absolute mt-3 mx-3 text-gray-500 text-lg cursor-pointer '>
                  <AiOutlineEye />
                </div>
              </div>

            </div>
            <div className='flex mx-8 mt-2'>
              <input type="checkbox" className='mx-2 cursor-pointer' />
              <h1>Rembember on this device</h1>
            </div>
            <div className='w-full px-10 mt-5'>
              <input type="button" value="Sing up" className='w-full cursor-pointer bg-[#206bc4] h-9 rounded-md text-white hover:bg-blue-400  hover:text-white duration-500 font-semibold text-sm' onClick={submit} />
            </div>
          </div>
          {/* img */}
          <div className='mt-10 md:block hidden'>
            <img src={download} alt="" className='h-[300px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;