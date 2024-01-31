import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }

  return (
    // <div className=" bg-white flex-row border-gray-200 px-4 rounded shadow lg:px-6 py-2.5 dark:bg-gray-800">
    
    //   <div className="text-white text-lg font-bold">
    //     <Link to="/" onClick={onLogout}>KajuStore</Link>
    //   </div>
    //   <div className="hidden lg:flex space-x-4">
    //     {user ? (
    //       <div className="cursor-pointer" onClick={onLogout}>
    //         <FaSignOutAlt className="text-white" /> Logout
    //       </div>
    //     ) : (
    //       <>
    //         <div>
    //           <Link to="/auth" className="text-white flex items-center">
    //             <FaSignInAlt className="mr-2" /> Auth
    //           </Link>
    //         </div>
            
    //       </>
    //     )}
    //   </div>
    // </div>

    <header className=" p-4 pb-0 border-b  rounded-lg shadow-lg bg-white md:flex md:items-center md:justify-between md:pb-4">
  {/* <!--logo--> */}
  <div className="mb-4 flex items-center justify-between md:mb-0">
    <h1 className="leading-none text-2xl text-gray-darkest">
      <a  class="no-underline text-gray-darkest hover:text-black"><Link to='/'>KajuStore</Link></a>

    </h1>
    {/* <!--bar--> */}
    <a href="#" className="text-black md:hidden hover:text-orange">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>

  {/* <!--nav--> */}
  <nav>
    <ul className="list-reset md:flex md:items-center">

    {user ? (
      <li className="md:ml-4 flex">
        <FaSignOutAlt className="text-white" />
        <a href="#" onClick={onLogout} class="block py-2 text-grey-darkest no-underline md:border-none md:p-0 hover:underline">Logout</a>
      </li>

) : (
      <li className="md:ml-4 flex">
        <FaSignInAlt className="mr-2" /> 
        <a href="#" className="block border-t py-2 no-underline text-grey-darkest hover:underline hover:text-black md:p-0 md:border-none"><Link to='/auth'>Auth</Link></a>
      </li>
)}
     

      
          


    </ul>
  </nav>
</header>

  );
};

export default Header;
