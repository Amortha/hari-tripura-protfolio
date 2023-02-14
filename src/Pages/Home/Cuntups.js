import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import { FaUsers} from "react-icons/fa";
import { FaRegBuilding} from "react-icons/fa";
import { IoIosCheckmarkCircle} from "react-icons/io";
import { MdOutlineStarRate} from "react-icons/md";
import Countupp from './Countupp';

const Cuntups = () => {
    const [counter,setCounter] = useState(0);
    
    useEffect(()=>{
        const interval =setInterval(()=>{
            setCounter((counter)=> counter+1)
        },100000);
        return ()=>{
            clearInterval(interval);
        }
    },[])

    const counters =[
        {
            _id:1,
            icon:<FaUsers size={50}></FaUsers>,
            count :<CountUp start={0} end={25} duration={5}/>,
            name:'Active Clients',
        },
        {
            _id:2,
            count :<CountUp start={0} end={120} duration={5}/>,
            icon:<IoIosCheckmarkCircle size={50}></IoIosCheckmarkCircle>,
            name:'project Complete',
        },
        {
            _id:3,
            count :<CountUp start={0} end={5} duration={5}/>,
            icon:<MdOutlineStarRate  size={50}></MdOutlineStarRate>,
            name:'Client Ratting',
        },
        {
            _id:4,
            count :<CountUp start={0} end={5} duration={5}/>,
            icon :<FaRegBuilding size={50}></FaRegBuilding>,
            name:'Total Experience',
        },
    ]
    return (
        <div className={`my-24 bg-cover w-full lg:h-96 bg-fixed  bg-[url('https://i.ibb.co/vdnQkt2/00-best-backgrounds.jpg')]`} >
         
            <div className='grid lg:grid-cols-4 gap-6  px-12 h-full   py-8   bg-black/30' >

                {
                    counters.map(counter=> <Countupp key={counter._id} counter={counter}></Countupp>)
                }
            </div>
        </div>
    );
};

export default Cuntups;