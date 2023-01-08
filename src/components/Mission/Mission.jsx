import React from 'react'
import "./mission.css"
import videoImg from "../../UX-UI Developer Test/Assets/Group 117.png"
import { companies } from '../../Data'
import ellipse21 from "../../UX-UI Developer Test/Assets/Ellipse 21.png"
import ellipse16 from "../../UX-UI Developer Test/Assets/Ellipse 16.png"
import ILLUSTRATION3 from "../../UX-UI Developer Test/Assets/ILLUSTRATION 03.png"
import group from "../../UX-UI Developer Test/Assets/Group.png"
import arr from "../../UX-UI Developer Test/Assets/Vector.png"
import ellipse12 from "../../UX-UI Developer Test/Assets/Ellipse 19.png"
import ellipse24 from "../../UX-UI Developer Test/Assets/Ellipse 15.png"
import ellipse14 from "../../UX-UI Developer Test/Assets/Ellipse 14.png"
import group2 from "../../UX-UI Developer Test/Assets/Group-2.png"
import group100 from "../../UX-UI Developer Test/Assets/Group 100.png"

function Mission() {
  return (
   <>
   <div className='MissionContent'>

    <div className='UAE'>
      <div className='circle'>
        <img src={group100} alt="icon"/>
      </div>
      <div className='uaeDesc'> <p>Watch the video about UAE or Offshore Company Registration</p> <div style={{border:'2px solid blue',borderRadius:'50%',padding:'5px'}}><img src={videoImg} alt="videoIcon"/></div></div><br/>

      <div className='uaeMission'>
        <h2 className='text-3xl font-bold'><span className=" relative">Dedicated<span className="dividers w-[140px] h-[8px] bg-yellow-500 absolute -bottom-[3px] left-0 mt-[3px]"></span></span><br/>to our mission we are</h2>
        <p>Our services include Company Formation & Renewals, 
Trust & Fiduciary, Tax Residency Setup With Family, Bank 
Accounts, Remote Management, Stock Trading 
Platforms, Ownership Solutions.</p>
      </div>
     
    </div>


    <div className='company'>
      <div className='companyContent'>
        {
          companies.map((item)=>{
            return(
              <><div className='companyContainer flex flex-col items-center justify-center md:justify-start md:items-start'><img src={item.icon} alt='icon'/>
              <div>
                <h3 className='text-3xl font-bold mt-[20px] mb-[20px] text-center md:text-left'>{item.title}</h3>
                <p>{item.desc}</p>
                <span><a href={item.icon}>{item.link}</a></span>
                </div></div></>
            )
          })
        }
      </div>

    </div>
    <div style={{display:'flex'}}>
<img src={ellipse16} alt="ellipse" style={{width:'50px'}}/>
</div>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
<img src={ellipse21} alt="ellipse" style={{width:'50px'}}/>
</div>

   </div>



   <div className='missionFeatures'>
    <div className='FeaturesContainer'>


      <div className='Features1'>
        

        <div className='Features1Left md:w-[400px] '>
        <div>
          <section>Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream</section>
          <h5 style={{color:'#525DED',fontSize:'20px'}}>Claim a Free Quote</h5>
        </div><br/><br/><br/>
        <div style={{border:'1px solid grey',borderRadius:'10px'}} className="Bank md:h-[600px]">
          <img src={ILLUSTRATION3} alt="illustration"/>

          <div>
            <h2 className='text-2xl font-bold mb-[20px] mt-[20px]'>Bank Account Setup</h2>
            <p>
            There are many banks in the United 
Arab Emirates [UAE]. Both locally 
owned and branches of 
multinational ones. Foreign banks 
adjust according to their parent s 
strategies and have changed local 
requirements overnight in the past. 
But we are here to help you.
            </p><br/>
            <div className='nav'>
              <span className='text-2xl text-blue-600'><a href="www">Learn more <img src={arr} alt="arrowIcon"/></a> </span>
            </div>
          </div></div>

        </div>

<div>

<div className='Features1Right md:w-[400px] md:h-[600px]'>
        <img src={group} alt="illustration"/>

<div>
  <h2 className='text-2xl font-bold mb-[20px] mt-[20px]'>Advice & Guidance</h2>
  <p>
  All activities in the UAE are licensed. 
Whether manufacturing, finance, 
trading, marketing, consultancy or 
restaurants. In some countries only 
manufacturing is licensed. In others 
there is a threshold below which 
business are encouraged. Get our 
insightfull guidance today.
  </p></div><br/>
  <div className='nav md:-ml-[200px] -ml-[150px]'>
    <span className='text-2xl text-blue-600'><a href="www">Learn more <img src={arr} alt="arrowIcon"/></a></span>
  </div>

          

        </div>
        <div><img src={ellipse12} alt="icon" style={{marginTop:'40px'}}/></div>
        <div><img src={ellipse24} alt="icon" style={{float:'right',marginTop:'20px'}}/></div>

</div>
        


      </div>





      <div className='Features2'>

        
      <div className='Features1Left'>

      <div className='' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<img src={ellipse14} alt="icon" style={{marginTop:'40px'}}/>
</div><br/><br/><br/>
       
        <div style={{border:'1px solid grey',borderRadius:'10px'}} className="Bank p-2 md:h-[600px]">
          <img src={group2} alt="illustration"/>

          <div>
            <h2 className='text-2xl font-bold mt-[20px] mb-[20px]'>UAE Company Visas</h2>
            <p>
            Your application for visas is critical 
especially if you intend to move to 
Dubai. This becomes even more 
urgent if your family will also move 
with you. All the paperwork is done 
on your behalf smoothly so that you 
may only focus on doing what 
matters most to you.
            </p><br/>
            <div className='nav'>
              <span className="text-blue-600 text-2xl"><a href="www">Learn more <img src={arr} alt="arrowIcon"/></a> </span>
            </div>
          </div></div>

        </div>



        <div className='Features1Left'>
       
       <div style={{border:'1px solid grey',borderRadius:'10px'}} className="Bank p-2 md:h-[600px]">
         <img src={group2} alt="illustration"/>

         <div>
           <h2 className="text-2xl font-bold mt-[20px] mb-[20px]">Registration Document 
Preparation</h2>
           <p>
           Your application for visas is critical 
especially if you intend to move to 
Dubai. This becomes even more 
urgent if your family will also move 
with you. All the paperwork is done 
on your behalf smoothly so that you 
may only focus on doing what 
matters most to you.
           </p><br/>
           <div className='nav'>
             <span className="text-blue-600 text-2xl"><a href="www">Learn more <img src={arr} alt="arrowIcon"/></a> </span>
           </div>
         </div></div>

         <div><br/><br/>
          <section>We have gathered a team of 
professionals to craft adequate 
services you can rely on for a friction 
free setup in UAE.</section>
<div className='navs'>
             <span><a href="www" style={{textDecoration:'none',fontSize:'20px',display:'flex',alignItems:'center',marginTop:'20px',gap:'10px'}} className="text-blue-600 text-3xl font-bold">More about our services <img src={arr} alt="arrowIcon"/></a> </span>
           </div>
        </div>

       </div>


      </div>


    </div>

   </div><br/><br/>
   </>
  )
}

export default Mission