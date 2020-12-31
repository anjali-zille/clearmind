import React from 'react'
import './landingpage.css';
import {Card} from 'react-bootstrap'
//importing images
import LandingPageImage from '../images/LandingPageImage.png';
import BkMark from '../images/BkMark.png';
import Vector from '../images/Vector.png';
import overlay from '../images/overlay.png'
import mobileimg from '../images/Rectangle_71.png'
import paperrimg from '../images/paperrimg.png';
import quote from '../images/Quote-section.png';

function  LandingPage() {
    return(
        <div>
            <div className="landingpage-allimg">
            <img src={LandingPageImage} />
          
           <img  className="landingPage-img" src={BkMark}/>
           <img className="vector-img" src={Vector} />
           <h1 className="landingpage-heading"> Clearminds</h1>
           <p className="landingpage-para">Lorem ipsum dolor sit amet, consectetur </p>
           <button className="btn-landingpage">Get Start</button>
           </div>
           <div className="landingpage-middle">
             
               <h1 className="landingpage-middle-handing"> Lorem ipsum dolor sit amet</h1>
               <p className ="landingpage-middle-txt"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minima dolorum nesciunt tempora mollitia doloremque consequuntur excepturi voluptate, deserunt, ad impedit quis minus porro facere magni eveniet? Libero, repudiandae corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae minima dolorum nesciunt tempora mollitia doloremque cevzzzzeniet? Libero, repudiandae corrupti. </p>
                    
                </div> 
                <button className="landingpage-btn">Get Started</button>

                <div className="landingpage-middle-second">
                    <img  className="overlay" src={overlay}/>
                    <h1 className="landingpage-middle-second-heading">Lorem ipsum dolor sit amet</h1>
                    <p className="landing-middle-second-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae minima dolorum nesciunt tempora mollitia doloremque consequuntur excepturi voluptate, deserunt, ad impedit quis minus porro facere magni eveniet? Libero, repudiandae corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae minima dolorum nesciunt tempora mollitia doloremque cevzzzzeniet? Libero, repudiandae corrupti.</p>
                  
                  <img className="landingpage-card1" src={mobileimg}/> 
                   <img  className="landingpage-card1" src={paperrimg}/>
                   <p className="landingpage-card-heading">Clearmind App</p>
                   <p className="landingpage-card1-heading"> Wealth Creation</p>
                   
                </div>

                <div className="quotearea">
                <p><q className="quoteclearmind">❝ Clearmind brings the best plans that will suite your pocket and help to scale the ladder of success in stock . ladder of success in stock m Clearmind bring ❞</q></p>
              {/* <img src={quote}/> */}
                </div>
             <div className="rectangle-subsction">

             </div>
            
                </div>

              
    )
    
}
export default LandingPage

