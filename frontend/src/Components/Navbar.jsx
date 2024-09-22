import React, { useState } from 'react';
import { SiPivotaltracker } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [icon, setIcon] = useState(true);

    const handleToggle = () => {
        setIcon(!icon);
    };

    return (
        <div className='bg-slate-800 text-white h-[10%] w-full'>
            <div className='p-2 flex items-center'>
                <SiPivotaltracker className='text-2xl' />
                <p className='font-bold text-2xl ml-2'>Codeforces Tracker</p>

                <div className='md:flex absolute md:left-[25%] left-[70%]  w-full'>
                    <div className='hidden md:flex text-xl font-semibold ml-3'>
                        <ul className='flex gap-6'>
                            <Link to="/show"><li>LeaderBoard</li></Link>
                            <Link to="/Createuser"><li>Add user</li></Link>
                            <Link to="/Allusers"><li>All users</li></Link>
                        </ul>
                    </div>

                    <div className="relative md:hidden text-right right-0 w-[30%]  top-0 ">
                        {icon ? (
                            <IoMenuSharp className="text-3xl" onClick={handleToggle} />
                        ) : (
                            <div className="absolute top-0 left-0 w-full h-fit  bg-slate-800 p-4 z-50">
                                <IoClose className="text-3xl text-white cursor-pointer" onClick={handleToggle} />
                                <div className="flex flex-col items-start space-y-6">
                                    <ul className="flex flex-col space-y-4 text-white text-lg">
                                        <Link to="/show" onClick={handleToggle}  ><li>LeaderBoard</li></Link>
                                        <Link to="/Createuser " onClick={handleToggle}   ><li>Add user</li></Link>
                                        <Link to="/Allusers" onClick={handleToggle}  ><li>All users</li></Link>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
