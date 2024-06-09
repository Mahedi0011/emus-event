import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <li className=""><NavLink to='/'>Home</NavLink></li>
        <li className=""><NavLink to='/services'>Services</NavLink></li>
        <li className=""><NavLink to='/about'>About</NavLink></li>
        <li className=""><NavLink to='/gallery'>Gallery</NavLink></li>
        <li className=""><NavLink to='/price'>Price</NavLink></li>
        <li className=""><NavLink to='/review'>Review</NavLink></li>
        <li className=""><NavLink to='/contract'>Contract</NavLink></li>
        
    </>


    return (
        <div className="navbar bg-base-100 mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Emus <span className="text-cyan-700">Event</span> </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;