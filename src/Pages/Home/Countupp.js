import React from 'react';

const Countupp = ({counter}) => {
    const { count, name, icon } = counter;

    return (
       <div className='bg-base-100 my-auto h-50'>
         <div className=" ">
            <div className="card-body items-center   ">
                <h1 className='text-amber-400 mb-4'>{icon}</h1>
                <h2 className="card-title text-4xl font-semibold">{count}+</h2>
                <p className='text-xl   font-semibold'>{name}</p>

            </div>
        </div>
       </div>
    );
};

export default Countupp;