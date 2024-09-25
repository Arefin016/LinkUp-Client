import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // Initialize theme: check localStorage first, fallback to browser's preference if not set
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.querySelector("html").setAttribute("data-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const [login, setLogin] = useState(true);
  const userName = "new user";
  const photoURL = "https://i.ibb.co/5nqdd5h/profile-pic-linkup.jpg";

  const handleLogout = () => {
    setLogin(false);
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
        <NavLink className='nav-link' to='/contact'>
          Contact
        </NavLink>
        <NavLink className='nav-link' to='/testimonials'>
          Testimonials
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-white  dark:text-white lg:px-36 px-4 fixed top-0 left-0 z-10 opacity-90 shadow max-w-screen-xl mx-auto '>
      <div className='navbar-start '>
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
            {links}
          </ul>
        </div>

        <Link to='/'>
          <h1 className='font-right font-extrabold lg:text-3xl text-xl text-shadow-purple text-gray-700 dark:text-white '>
            <span className='text-emerald-500 '>L</span>inkUp
          </h1>
        </Link>
      </div>

      <div className='navbar-center hidden lg:flex'>
        <ul className='menu-horizontal px-1 space-x-8  '>{links}</ul>
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
          <div className=''>
            <Link to='/login' className='btn btn-outline btn-sm'>
              Login
            </Link>
          </div>
        )}
      </div>

      <input
        onChange={handleTheme}
        type='checkbox'
        className='toggle theme-controller mx-6'
        checked={theme === "dark"}
      />
    </div>
  );
};

export default Navbar;
