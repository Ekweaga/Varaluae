import React from 'react'
import Ellipse9 from "../../UX-UI Developer Test/Assets/Ellipse 7.png"
import "./footer.css"
import vector4 from "../../UX-UI Developer Test/Assets/Vector-4.png"
import vector3 from "../../UX-UI Developer Test/Assets/Vector-3.png"
import group34 from "../../UX-UI Developer Test/Assets/Group 34.png"
import facebook from "../../UX-UI Developer Test/Assets/facebook.png"
import youtube from "../../UX-UI Developer Test/Assets/youtube.png"
import instagram from "../../UX-UI Developer Test/Assets/instagram.png"
import linkedin from "../../UX-UI Developer Test/Assets/linkedin.png"

function Footer() {
  return (
   <>
   <footer>
   <div style={{width:'70%',margin:'auto',marginTop:'50px'}}>
    <img src={Ellipse9} alt="icon" width={60} height={60}/>
   </div>

   <div className='FooterContainer'>

    <div className='FooterLeft'>
      <div style={{borderLeft:'5px solid blue'}}>
        <h2 style={{fontSize:'25px',paddingLeft:'20px'}}>Read about our blog for more<br/> information on our process</h2>

      </div>

      <div style={{display:'flex',alignItems:'center',gap:'20px',marginTop:'60px'}}>
        <div style={{border:'2px solid #525DED',padding:'12px',borderRadius:'5px'}}><img src={vector4} alt="icon"/></div>
        <div><h2>How to start a company <br/>
formation in Dubai</h2>
<span style={{color:'#525DED',fontSize:'20px',fontWeight:'700'}}>5 Minutes</span>
</div>
        
        </div>

        <div style={{display:'flex',alignItems:'center',gap:'20px',marginTop:'60px'}}>

        <div style={{border:'2px solid #525DED',padding:'12px',borderRadius:'5px'}}><img src={vector4} alt="icon"/></div>
        <div><h2>How to start an Offshore  <br/>
        company formation in Dubai</h2>
<span style={{color:'#525DED',fontSize:'20px',fontWeight:'700'}}>5 Minutes</span>
</div>
        
        </div>

        <div style={{display:'flex',alignItems:'center',gap:'20px',background:'#525DED',color:'white',borderRadius:'10px',padding:'8px',marginTop:'60px'}} className="md:w-[400px]">

        <div style={{border:'2px solid #FFFF',padding:'12px',borderRadius:'5px'}}><img src={vector4} alt="icon"/></div>
        <div><h2>SEO Dubai: Who benefits   <br/>
        the most?</h2>
<span style={{color:'#FFFF',fontSize:'20px',fontWeight:'700'}}>5 Minutes</span>
</div>
        
        </div>

        <div style={{borderLeft:'5px solid blue',marginTop:'60px'}}>
        <h2 style={{fontSize:'25px',paddingLeft:'20px'}}>Satisfied We are When Our <br/> Customers Are Happy</h2>

      </div>
        <div style={{display:'flex',alignItems:'center',gap:'40px',marginTop:'60px'}}>
          <div>
          <div style={{border:'2px solid #525DED',padding:'12px',borderRadius:'50%'}}><div><img  src={vector3} alt="icon"/></div>
        </div>
        <br/><br/><br/><br/>
        <div style={{background:'#5274F2',width:'60px',height:'5px'}}></div>
          </div>
         
          <section style={{fontSize:'20px',width:'400px'}}>
            <p style={{fontSize:'23px'}}><span style={{fontWeight:'900'}}>""</span>I am very happy with them. I’ll 
continue to use their services in 
future & highly recommend them 
to anyone<span style={{fontWeight:'900'}}>""</span></p><h5>Muhib Abrar</h5>
          </section>
        
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'40px',marginTop:'60px'}}>
        <div>
          <div style={{border:'2px solid #525DED',padding:'12px',borderRadius:'50%'}}><div><img  src={vector3} alt="icon"/></div>
        </div>
        <br/><br/>
        <div style={{background:'#5274F2',width:'60px',height:'5px'}}></div>
          </div>
         
          <section style={{fontSize:'20px',width:'400px'}}>
            <p style={{fontSize:'23px'}}><span style={{fontWeight:'900'}}>""</span>Rama has a high level of integrity, 
intellect, knowledge of his 
business, resourcefulness and 
humanity,<span style={{fontWeight:'900'}}>""</span></p><h5>Colin Saldahna</h5>
          </section>
        </div>
        <div>

        <div style={{display:'flex',alignItems:'center',gap:'40px',marginTop:'60px'}}>
        <div>
          <div style={{border:'2px solid #525DED',padding:'12px',borderRadius:'50%'}}><div><img  src={vector3} alt="icon"/></div>
        </div>
        <br/><br/><br/><br/>
        <div style={{background:'#5274F2',width:'60px',height:'5px'}}></div>
          </div>
         
          <section style={{fontSize:'20px',width:'400px'}}>
            <p style={{fontSize:'23px'}}><span style={{fontWeight:'900'}}>""</span>Your advise was so complete that I 
actually realized how beneficial 
this would be to my clients and my 
business.<span style={{fontWeight:'900',fontSize:'20px'}}>""</span></p><h5>Mark Swann</h5>
          </section>
        </div>
        
        </div>

    </div>


    <div className='FooterRight'>

    <div style={{borderLeft:'5px solid blue'}}>
        <h2 style={{fontSize:'25px',paddingLeft:'20px'}}>Get to know the whole us and<br/> more of our services</h2>

      </div>

      <div style={{marginTop:'60px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <h2 style={{textAlign:'left'}} className="text-2xl font-bold">Services</h2>
        <ul style={{display:'flex',flexDirection:'column',gap:'15px',color:'gray',fontSize:'25px',listStyle:'none',textAlign:'left'}}>
          <li>Products</li>
          <li>Solutions</li>
          <li>Assurance</li>
          <li>FAQ</li>
          <li>Working at Varal-Singhania</li>
        </ul>

      </div>
<br/>
      <div>
      <h2 style={{textAlign:'left'}} className="text-2xl font-bold">Policies</h2>
        <ul style={{display:'flex',flexDirection:'column',gap:'15px',color:'gray',fontSize:'25px',listStyle:'none'}}>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          
        </ul>
      </div><br/>
      <div>
      <h2 style={{textAlign:'left'}} className="text-2xl font-bold">About</h2>
        <ul style={{display:'flex',flexDirection:'column',gap:'15px',color:'gray',fontSize:'25px',listStyle:'none'}}>
          <li>About Us</li>
          <li>Contact Us</li>
          
        </ul>
      </div><br/>
      <div>
      <h2 style={{textAlign:'left'}} className="text-2xl font-bold">Address</h2>
      <section className="sections"><p className='address'>608 One Lake Plaza, Cluster T,
Al Sarayat Street, Jumeirah 
Lake Towers

Dubai

United Arab Emirate</p></section><br/>
<section className="sections"><p className='address'>Office Hours: Sunday to 
Thursday 8:30 AM to 6:30 PM 
[GMT+4]<br/>

M: +971 55 794 2016<br/>

O: +971 4 447 2061</p></section>
      </div>
<br/>
      <div>
        
      <h2 style={{textAlign:'left'}} className="text-2xl font-bold">Subscribe Now</h2>
      <section className="sections"> <p>Subscribe now to receive our 
Newsletters about amazing 
opportunities in Dubai</p></section>

<div style={{display:'flex',alignItems:'center'}}>
  <input type="email" placeholder="Enter email address" style={{background:'gray',padding:'3px',width:'250px',height:'55px',border:'none',outline:'none'}}/><img src={group34} alt="icon"/>
</div>
<div style={{marginTop:'40px'}} className="flex ">
  <img src={facebook} alt="icon"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={instagram} alt="icon"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={linkedin} alt="icon"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={youtube} alt="icon"/>
</div>
     
      </div>
    </div>



   </div>

   <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',fontSize:'20px',marginTop:'50px',color:'grey'}} className="p-4">
    <p>Varaluae 2021 C All Right Reserved</p>
   </div>

   </footer>
  
   </>
  )
}

export default Footer
