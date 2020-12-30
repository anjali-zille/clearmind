import React from 'react'
import './landingpage.css';
import {Card} from 'react-bootstrap'
//importing images
import LandingPageImage from '../images/LandingPageImage.png';
import BkMark from '../images/BkMark.png';
import Vector from '../images/Vector.png';
import overlay from '../images/overlay.png'
import mobileimg from '../images/Rectangle-71.png'



function  LandingPage() {
    return(
        <div>
            <div className="landingpage-allimg">
            <img src={LandingPageImage} />
          
           <img  className="landingPage-img" src={BkMark}/>
           <img className="vector-img" src={Vector} />
           <h1 className="landingpage-heading"> Clearminds</h1>
           <p className="landingpage-para">Lorem ipsum dolor sit amet, consectetur </p>
           </div>
           <div className="landingpage-middle">
             
               <h1 className="landingpage-middle-handing"> Lorem ipsum dolor sit amet</h1>
               <p className ="landingpage-middle-txt"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minima dolorum nesciunt tempora mollitia doloremque consequuntur excepturi voluptate, deserunt, ad impedit quis minus porro facere magni eveniet? Libero, repudiandae corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae minima dolorum nesciunt tempora mollitia doloremque cevzzzzeniet? Libero, repudiandae corrupti. </p>
                    
                </div> 
                <button className="landingpage-btn">Get Started</button>

                <div className="landingpage-middle-second">
                    <img src={overlay}/>
                    <h1 className="landingpage-middle-second-heading">Lorem ipsum dolor sit amet</h1>
                    <p className="landing-middle-second-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minima dolorum nesciunt tempora mollitia doloremque consequuntur excepturi voluptate, deserunt, ad impedit quis minus porro facere magni eveniet? Libero, repudiandae corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae minima dolorum nesciunt tempora mollitia doloremque cevzzzzeniet? Libero, repudiandae corrupti.</p>
                   <img className="landingpage-card" src={mobileimg}/>
                </div>

            
                </div>

              
    )
    
}
export default LandingPage

