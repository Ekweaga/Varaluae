import React from 'react'
import "./header.css"
import illustration  from "../../UX-UI Developer Test/Assets/ILLUSTRATION.png"
import ellipse8 from "../../UX-UI Developer Test/Assets/Ellipse 8.png"
import ellipse21 from "../../UX-UI Developer Test/Assets/Ellipse 21.png"
import{AiOutlineSearch} from "react-icons/ai"

function Header() {
  return (
   <>
   <div className='HeaderContent'>
    <div className='HeaderContainer '>

        <div className='HeaderLeft'>
            <div>
            <img src={ellipse21} style={{width:'50px',height:'50px'}} alt="circle" className='hidden md:block'/>
            </div>
            <div className='quote mt-[100px]'>
                <h3 className='font-bold'>Claim a Free Quote</h3>
                <h1 className='text-4xl font-bold'><span className='h1'>Get started <span className='divider'></span></span>on fulfilling 
your Dubai or UAE dream.</h1>
            </div>
            <div className="offshore">
               <h3>UAE & Offshore Company</h3><br/>
               <p>We provide you with information about UAE or 
Offshore Company Registration & help you 
setup your company with a bank account and 
visas.</p>
<div className='buttons'>
<button className='btn1'>Start a Company</button>   <button className='btn2'>Renew a Company</button>
</div>
            </div>
        </div>



        <div className='HeaderRight'>
            <div className='inputContainer border-[2px] border-solid border-blue-800 flex gap-[30px]'>
               <AiOutlineSearch color='blue' background="blue" width="40px" style={{width:'50px',height:'30px',marginLeft:'-60px'}}/> <input type="text" placeholder="Search a Term | Topic" className="placeholder-blue-800 font-bold placeholder-font-bold"/>
            </div>
            <div className='Ellipse'>
                <img src={ellipse8} style={{width:'50px',height:'50px'}} alt="circle"/>
            </div>

            <img src={illustration} alt="illustration" />

        </div>

    </div>
   </div>
   </>
  )
}

export default Header
