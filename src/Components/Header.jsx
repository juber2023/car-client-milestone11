import React, { useContext } from 'react';
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom';
import { UserContext } from './ContextApi';

const Header = () => {
  const {user,logOut,loading}=useContext(UserContext)
  console.log(user);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{ 
      localStorage.removeItem('car-access-token')
    })
    .catch(error=>{})
  }
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     
      {loading?'':user?.email?<button onClick={handleLogOut}>Logout</button>:<Link to='/login'>Login</Link>}
     
     
     <Link to='/register'>Register</Link>
      </ul>
    </div>
    <Link to='/'>
    <img src={logo} className="btn btn-ghost normal-case text-xl"></img>
    </Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-8">
    <Link to='/'>Home</Link>
     <Link to='/about'>About</Link>
     {user?.email?<><Link to='/bookings'>My Bookings</Link> <button onClick={handleLogOut}>Logout</button></>:<Link to='/login'>Login</Link>}
     <Link to='/register'>Register</Link>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
        </div>
    );
};

export default Header;