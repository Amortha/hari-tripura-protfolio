import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
const Contact = () => {

    return (
        <div id="contact ">
            <h1 className='mt-10 text-center font-bold text-2xl lg:text-4xl'>CONTACT</h1>
            <div className='grid lg:grid-cols-2  my-10 h-48'>

                <div className='flex place-content-center py-4 bg-base-300'>
                    <div className='  '>
                        <input className='border bg-base-100 my-2 w-96 h-12 p-4' type="text" placeholder='your name' /><br />
                        <input className='border bg-base-100 my-2 w-96 h-12 p-4' type="email" placeholder='your email' /><br />
                        <input className='border bg-base-100 my-2 w-96 h-12 p-4' type="text" placeholder='subject' /><br />
                        <textarea className='border bg-base-100 my-2 w-96  p-4' type="text" placeholder='Message' /><br />
                        <input className='w-96 text-white text-xl font-bold py-2 bg-purple-700' type="submit" value="submit" /><br />
                    </div>
                </div>
                <div className={`bg-cover  bg-[url('https://i.ibb.co/ySf7w4X/contactimg.jpg')]`}>
                   <div className='flex place-content-end mx-12 mt-8 '>
                   <div className=''>
                        <div className='bg-base-100 w-60 h-auto p-4 '>
                            <div className='flex'>
                                <div>
                                    <MdLocationOn className='text-purple-800 mt-2' size={35}/>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Address</h1>
                                    <h1 className='font-semibold'>Chittagong,Bangladesh</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-base-100 w-60 h-auto p-4 my-8'>
                            <div className='flex'>
                                <div>
                                    <BsFillTelephoneForwardFill className='text-purple-800 mt-2' size={30}/>
                                </div>
                                <div className='mx-2'>
                                    <h1 className='text-xl font-bold'>Phone Number</h1>
                                    <h1 className='font-semibold'>01869474404</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-base-100 w-60 h-auto p-4'>
                            <div className='flex'>
                                <div>
                                    <MdMarkEmailRead className='text-purple-800 mt-' size={35}/>
                                </div>
                                <div className='mx-2'>
                                    <h1 className='text-xl font-bold'>Address</h1>
                                    <h1 className='font-semibold'>Chittagong,Bangladesh</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;