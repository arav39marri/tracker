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
        <div className='bg-slate-800 flex text-white min-h-14 items-center gap-5  w-full '>
            <div className='p-3 flex items-center justify-start gap-6 w-[20%]  '   >
            <SiPivotaltracker className='text-2xl' />
            <p className='font-bold text-xl '> Tracker</p>
            </div>
            <div className='p-1 w-[80%] '  >
            <ul className='md:flex hidden items-center   justify-start gap-10 text-lg font-semibold '>
                    <Link to="/show"><li>LeaderBoard</li></Link>
                    <Link to="/Createuser"><li>Add user</li></Link>
                    <Link to="/Allusers"><li>All users</li></Link>
            </ul>
               { 
                 icon ? 
                 (<div  className=' md:hidden relative   right-0 bg-slate-800   top-0 p-3    ' >
                    <div className=' flex justify-end '>
                    <IoMenuSharp className="text-3xl text-right " onClick={handleToggle} />
                        </div>
                 </div> ) :
                 ( <div className='md:hidden  fixed  right-0  w-[40%] bg-slate-800   transition-transform rounded-xl h-screen   top-0 p-3 '   >
                        <div className=' flex justify-end '>
                        <IoClose className="text-3xl text-white text-right cursor-pointer" onClick={handleToggle} />
                        </div>
                     <ul className="flex flex-col space-y-4 text-white text-lg bg-slate-800 w-full gap-6 p-4 ">
                       <Link to="/show"  className='text-center' onClick={handleToggle}  ><li>LeaderBoard</li></Link>
                         <Link to="/Createuser " className='text-center' onClick={handleToggle}   ><li>Add user</li></Link>
                        <Link to="/Allusers" className='text-center' onClick={handleToggle}  ><li>All users</li></Link>
                    </ul>
                 </div> 
                   
                
                )
              }
            </div>
        </div>
        
    );
};

export default Navbar;
