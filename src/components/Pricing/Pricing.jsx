import React from 'react'
import "./price.css"
import { ListItems } from '../../Data'
import ellipse25 from "../../UX-UI Developer Test/Assets/Ellipse 25.png"
import group100 from "../../UX-UI Developer Test/Assets/Group 100.png"
import {RiCheckboxCircleLine} from "react-icons/ri"


function Pricing() {
  return (
    <>
    <div className='PricingContainer'>
      <div className='priceCircle'>
        <img src={group100} alt="icon"/>
      </div>
       <div className='PricingHeader'>
       <h2 style={{textAlign:'center',fontSize:'30px'}} className="text-3xl font-bold hidden md:block">Most <span className="h1"><span className='divider'></span>popular affordable pricing </span>per<br/>jurisdictions are brought to you to<br/>kick off your adventure</h2>

       </div><br/>

       <div className='PricingPlan'>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          <div>
          <h3 style={{color:'#525DED',fontSize:'20px'}}>AJMAN OFFSHORE</h3>
          <span style={{color:'#525DED',fontSize:'40px',fontWeight:'800'}}>$2,997 </span><span style={{color:'gray',fontSize:'25px'}}>one Time Payment</span>
          <div><h4 style={{color:'#525DED',fontSize:'20px'}}>Ajman Offshore New Company<br/> 
formation includes</h4></div></div><br/>

            <ul style={{color:'#525DED',fontSize:'20px',display:'flex',flexDirection:'column',gap:'20px'}}>
              {
                ListItems.map((item)=>{
                  return (
                    <li style={{color:'#525DED',fontSize:'20px',display:'flex',gap:'15px'}} className="flex items-center">
                      <img src={item.icon} alt="icon" className='w-[20px] h-[20px]'/><span>{item.list}</span>
                    </li>
                  )
                })
              }
            </ul>
<br/>
            <div>
            <button className='btn2'>Continue</button>
            </div>

        </div>



        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center',background:'#525DED',color:'white',paddingBottom:'10px',borderRadius:'10px'}}>
          <div className='p-3'>
          <h3 style={{color:'white',fontSize:'30px'}}>RAK ICC</h3>
          <span style={{color:'white',fontSize:'40px',fontWeight:'800'}}>$4,124 </span><span style={{color:'white',fontSize:'25px'}}>one Time Payment</span>
          <div><h4 style={{color:'white',fontSize:'20px'}} className="p-2">Rak Icc New Company formation <br/> 
          includes</h4></div></div>
<br/>
            <ul style={{color:'#525DED',fontSize:'20px',display:'flex',flexDirection:'column',gap:'20px'}}>
              {
                ListItems.map((item)=>{
                  return (
                    <li style={{fontSize:'20px',display:'flex',gap:'15px',color:'white'}} className="flex items-center">
                     <RiCheckboxCircleLine/><span>{item.list}</span>
                    </li>
                  )
                })
              }
            </ul>
<br/>
            <div>
            <button className='btn2' style={{background:'white'}}>Continue</button>
            </div>

        </div>





        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center',paddingBottom:'10px'}}>
          <div>
          <h3 style={{color:'#525DED',fontSize:'20px'}}>SHARJAH MEDIA CITY</h3>
          <span style={{color:'#525DED',fontSize:'40px',fontWeight:'800'}}>$4,124 </span><span style={{color:'gray',fontSize:'25px'}}>one Time Payment</span>
          <div><h4 style={{color:'#525DED',fontSize:'20px'}}>Sharjah Media City New<br/> 
          Company formation include</h4></div></div><br/>

            <ul style={{color:'#525DED',fontSize:'20px',display:'flex',flexDirection:'column',gap:'20px',marginLeft:'-20px'}}>
              {
                ListItems.map((item)=>{
                  return (
                    <li style={{color:'#525DED',fontSize:'20px',display:'flex',gap:'15px'}} className="flex items-center">
                      <img src={item.icon} alt="icon" className='w-[20px] h-[20px]'/><span>{item.list}</span>
                    </li>
                  )
                })
              }
            </ul><br/>

            <div>
            <button className='btn2'>Continue</button>
            </div>

        </div>

       </div>

    </div>

    <div style={{width:'80%',margin:'auto'}}>
<img src={ellipse25} alt="ucon" width={50} height={50}/>
    </div>
    </>
  )
}

export default Pricing
