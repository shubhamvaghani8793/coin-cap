import React from 'react'
import logo from '../../assets/logo.svg'
import languageIcon from '../../assets/languageIcon.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='w-ful bg-transparent z-10'>
        <div className='max-w-[1500px] mx-auto py-6 flex justify-between items-center px-4 gap-4'>

          <Link to="/a" 
            className='flex gap-1 items-center cursor-pointer'
          >
            <img className='h-10 w-10' src={logo} alt="logo" />
            <h2 className='font-bold text-lg'>
              <span className='text-brandOrange'>Coin Cap</span> Converter
            </h2>
          </Link>  

          <div className='flex gap-8 sm:mr-16'>
            <NavLink 
              to="/converter"
              className={({ isActive }) =>
                isActive ? "text-brandOrange" : ""
              }
            >
              Converter
            </NavLink>
            <NavLink 
              to="/"
              className={({ isActive }) =>
                isActive ? "text-brandOrange" : ""
              }
            >
              Market Cap
            </NavLink>
            <NavLink 
              to="/goal-tracker"
              className={({ isActive }) =>
                isActive ? "text-brandOrange" : ""
              }
            >
              Converter
            </NavLink>
          </div>

          <div className='flex gap-1 items-center'>
            <img className='w-4 h-4' src={languageIcon} alt="language" />
            <select name="" className='text-white outline-none bg-transparent text-sm cursor-pointer w-12'>
              <option value="en" className='text-white lightGary'>EN</option>
              <option value="fr" className='text-white lightGary'>FR</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar