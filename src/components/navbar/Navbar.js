import React from 'react'
import logo from '../../assets/logo.svg'
import languageIcon from '../../assets/languageIcon.svg'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu2Fill } from 'react-icons/ri'

function Navbar() {
  return (
    <>
      <nav className='w-ful bg-transparent z-30'>
        <div className='max-w-[1500px] mx-auto py-6 flex justify-between items-center px-4 gap-4'>

          <Link to="/" 
            className='hidden  gap-1 items-center cursor-pointer md:flex'
          >
            <img className='h-10 w-10' src={logo} alt="logo" />
            <h2 className='font-bold text-lg'>
              <span className='text-brandOrange'>Coin Cap</span> Converter
            </h2>
          </Link>

            {/* Menu */}
            <div className='md:hidden contents cursor-pointer'>
              <RiMenu2Fill className='w-6 h-6' />
            </div>


            {/* Mobile logo */}
            <Link to="/" 
              className='flex gap-1 items-center cursor-pointer md:hidden text-sm'
            >
              <img className='h-7 w-7' src={logo} alt="logo" />
              <h2 className='font-bold text-sm'>
                <span className='text-brandOrange '>Coin Cap</span> Converter
              </h2>
            </Link>

          <div className='md:flex gap-4 md:gap-8 md:mr-16 hidden'>
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
              Goal tracker
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