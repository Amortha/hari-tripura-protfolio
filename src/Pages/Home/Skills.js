
import React from 'react';
import Progressbar from './Progressbar';

const testData = [
    {
        bgcolor: "#800080",
        completed: 90,
        name: "Social Media Marketing",
    },
    {
        bgcolor: "#800080",
        completed: 80,
        name: "Search Engine Marketing"
    },
    {
        bgcolor: "#800080",
        completed: 80,
        name: "SEO"
    },
    {
        bgcolor: "#800080",
        completed: 75,
        name: "Shopify Store Design"
    }
];


const Skills = () => {

    return (
        <div id='skills' className='p-6 lg:p-12 mt-10 bg-base-300 '>
            <div className='grid lg:grid-cols-2 gap-12 p-4 bg-base-100  overflow-hidden'>

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 className='text-purple-800  lg:text-2xl font-semibold'>My Expertise</h1>
                    <h1 className='font-bold text-2xl lg:text-5xl my-4'>My Skills</h1>
                    {testData.map((item, idx) => (

                        <Progressbar
                            key={idx}
                            name={item.name}
                            bgcolor={item.bgcolor}
                            completed={item.completed}
                        />
                    ))}

                </div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 className=' text-purple-800 lg:text-2xl font-semibold'>My Qualification</h1>
                    <h1 className='my-4 text-2xl lg:text-5xl font-bold'>My Education</h1>
                    <div className=' lg:flex w-full'>
                        <div className='lg:w-2/5'>
                            <h1 className='text-purple-900 font-bold text-2xl'>2016</h1>
                            <h1 className='font-semibold'>Business Studies</h1>
                        </div>
                        <div className='lg:w-3/5'>
                            <h1 className='font-bold lg:text-xl'>FATIKCHARI GOLTAJ MEMORIAL<br /> SCHOOL & COLLEGE</h1>
                            <h1 className='font-semibold'>HIGHER SECONDARY SCHOOL</h1>
                        </div>
                    </div>
                    <div className=' lg:flex w-full my-6 '>
                        <div className='lg:w-2/5'>
                            <h1 className='text-purple-700 font-bold text-2xl'>2018</h1>
                            <h1 className='font-semibold'>National University</h1>
                        </div>
                        <div className='lg:w-3/5'>
                            <h1 className='font-bold lg:text-xl'>NATIONAL UNIVERSITY</h1>
                            <h1 className='font-semibold'>NATIONAL UNIVERSITY Studied In Bechelor Of Social Science (Economics Department)</h1>
                        </div>
                    </div>
                    <div className=' lg:flex w-full '>
                        <div className='lg:w-2/5'>
                            <h1 className='text-purple-900 font-bold text-2xl'>2022</h1>
                            <h1 className='font-semibold'>DIGITAL MARKETING COURSE</h1>
                        </div>
                        <div className='lg:w-3/5'>
                            <h1 className='font-bold lg:text-xl'>ADVANCE DIGITAL MARKETING COURSE </h1>
                            <p className='font-semibold'>My Servics: Social Media Marketing, Search Engine Marketing, Seo, Shopify Dropshipping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;