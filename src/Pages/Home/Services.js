import React from 'react';
import { useState } from 'react';

const Services = () => {
    
    
    const [isHover, setIsHover] = useState("");
    const section = [
        { id: "1", name: "google" },
        { id: "2", name: "google" },
        { id: "3", name: "google" },
        { id: "4", name: "google" },
        { id: "5", name: "google" },
        { id: "6", name: "google" },
    ];
    return (
        <div>
            <h1>TEST</h1>
            <div className="grid grid-cols-3 gap-3">
                {section?.map((one) => (
                    <div
                        key={one?.id}
                        onMouseEnter={() => setIsHover(one?.id)}
                        onMouseLeave={() => setIsHover("")}
                        className=" w-full h-48 bg-white"
                    >
                        <div className="relative w-full bg-slate-300 h-full flex items-center justify-center">
                            <h1 className="absolute z-20">{one?.name}</h1>
                            <div
                                className={`absolute top-0 duration-700 ${isHover === one?.id ? "w-full" : "w-0"
                                    } z-0 h-full bg-red-300`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;