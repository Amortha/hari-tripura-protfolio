import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'

const Navber = () => {
  const menuItems = <>

        <li className='px-2 hover:text-purple-800'><Link to="/">HOME</Link></li>
        <li className='px-2 hover:text-purple-800'><Link to="aboutus">ABOUT US</Link></li> 
        <li className='px-2 hover:text-purple-800' ><Link to="service">SERVICE</Link></li>
        <li className='px-2 hover:text-purple-800'><Link to="protfolio">PORTFOLIO</Link></li>
        <li className='px-2 hover:text-purple-800'><Link to="contact">CONTACT</Link></li>
   </>
  return (
    <div className='sticky top-0 z-50'>


    <div className="navbar bg-white h-14 lg:px-12   ">
        <div className="navbar-start ">
            <div>
                <a className="  normal-case text-xl hidden  lg:flex"><img  src={logo} alt="pic" className='w-32  bg-slate-50' /></a>

            </div>

            <div className="dropdown ">
                <label tabIndex={0} className="btn btn-ghost  text-black lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content bg-white text-black mt-3 p-2 shadow bg-blue-900  w-52">
                    {menuItems}
                </ul>
            </div>

        </div>
        <div className=" hidden  navbar-end lg:flex ">
            <ul className=" menu-horizontal px-4  font-bold text-black ">
                {menuItems}
            </ul>
        </div>
      
    </div>
</div>
  );
};

export default Navber;