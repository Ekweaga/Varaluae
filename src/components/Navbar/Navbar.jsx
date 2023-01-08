import React,{useState} from 'react'
import "./navbar.css"
import logo from "../../UX-UI Developer Test/Assets/Group 114.png"
import open from "../../UX-UI Developer Test/Assets/icon-hamburger.svg"
import close from "../../UX-UI Developer Test/Assets/icon-close.svg"

function Navbar() {
  const [opens,setOpen] = useState(false)
  return (
   <>
   <nav>
    <div className='navComponent'>
      <div className='navLogo'>
        <img src={logo} alt="logo"/>

      </div>

      <div className='menuList hidden md:block'>
        <ul>
          <li>
            Home
          </li>
          <li>
            Services
          </li>
          <li>
            Pricing
          </li>
          <li>
            About Us
          </li>
          <li>
            <button>Start a Company</button>
          </li>
        </ul>

      </div>

      <div
          onClick={() => setOpen(!opens)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <img src={opens ?close :open} alt="icon" width="20px" height="15px"/>
        </div>

        
        <div
          className={`md:hidden text-white absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-blue-600  top-0 duration-300 ${
        opens ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!opens)}>Home</li>
          <li className="cursor-pointer" >
          Services
            </li>
                
                <li  onClick={() => setOpen(!opens)}>   Pricing</li>
                <li  onClick={() => setOpen(!opens)}> About Us</li>
               
                <li></li>
          </ul>
        </div>
    </div>
   </nav>
   </>
  )
}

export default Navbar