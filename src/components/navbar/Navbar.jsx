import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // theme

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(theme);
  };
  // To do: get login and user info from auth context
  // const login = false;
  const login = true;
  const userName = "demo user";
  const photoURL =
    "https://i.ibb.co/myTwYWh/hasib-vg-bg-32-1-fotor-202309019507-1.png";

  // to do: implement logout after authentication
  // to do: resolve the conflict
  const handleLogout = () => {
    alert("check to do");
  };

  const links = (
    <>
      <li>
        <NavLink className='nav-link' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className='nav-link' to='/aboutus'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className='nav-link' to='/m'>
          Menu3
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100   lg:px-36 px-4 fixed top-0 left-0 z-10 opacity-90  shadow   '>
      <div className='navbar-start '>
        {/* Hamburger icon for small screens */}
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
            {/* Menu links for small screens */}
            {links}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl dark:text-white '>LinkUP</a>
      </div>

      {/* Menu links for large screens */}
      <div className='navbar-center hidden lg:flex'>
        <ul className=' menu-horizontal px-1 space-x-8 '>{links}</ul>
      </div>

      <div className='navbar-end'>
        {login ? (
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img alt='User avatar' src={photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
              <li>
                <a className='justify-between'>{userName}</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className='navbar-end'>
            <Link to='/login' className='btn btn-outline btn-sm'>
              Login
            </Link>
          </div>
        )}
      </div>
      <input
        onClick={handleTheme}
        type='checkbox'
        className='toggle theme-controller mx-6'
      />
    </div>
  );
};

export default Navbar;
