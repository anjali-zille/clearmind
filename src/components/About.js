import React from 'react';
import './About.css'
import Footer from './footer';
//image
import hrimg from '../images/hrimg.png';
import box from '../images/box.png';
import image4 from '../images/image4.png';
import graph from '../images/Graphic.png';
import triangle from '../images/triangle.png'
import graphbar from '../images/chart.png'

function About(){
    return(
       <div>
           <div className="about-background"></div>
           <h1  className="about-heading">About</h1>
           <h1 className="about-heading-second">get to know us more</h1>
           <p className="about-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolorum minima dolorum nesciunt </p>
         <img  className= "hrimg" src={hrimg} />
          <img className="littleBox" src={box} /><h2 className="about-subheading">our objectives</h2>
          <p className="about-body">Lorem ipsum dolor sit amet, consectetur<br></br>adipiscing elit,
           sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna aliqua. Ut enim ad<br></br> minim veniam, quis nostrud exercitation ullamco <br></br> est laborum.</p>
          <div className="green-body"> </div>
          <img  className="about-body-img" src={image4}/>

        <div>
            <img   className="littleBox-middle" src={box}/>
            <h2 className="secondary-heading-about">What are we trying to achieve with IAmClearMind.com</h2>
            <p className="secondary-para-about">Our story of investing generally begins with someone suggesting us to buy shares of certain company. He can be your friend, relative, acquaintance, banker, broker or anybody else. He may be expert in picking stocks or may be a novice.
<br></br><br></br>
Alternatively, since we believe in written words more than anything else and we read somewhere about equity investing and people making money in equity market, we go and buy some shares.<br></br><br></br>

Best scenario is - by luck we happen to be in bull market, get some profit, book it, reinvest all money in other companies and so on.
 But on change of direction of market from bull to bear we suffer losses(notional or actual), 
depending on when you book loss or you never sell in hope of recovery.
 We don't even talk about it because of shameful feeling about being imprudent and losing in stock market.<br></br><br></br>

Now, some people will try to study their mistakes and again invest in market while some will deem it too risky or unpredictable and quit the market (very big loss of opportunity!).<br></br><br></br>

I believe we lose in market because we don't have an <span style={{color: "#B3E789"}}>objective process of taking investment decisions.</span></p>
            </div> 

<div className="relative-about">
        <img  className="relative-about-img" src={box}/>
         <h2 className="relative-about-heading">Relative Strength Investing</h2> 
        <p className="relative-about-para">For your portfolio to outperform the market,
         it must be comprised of stocks that are outperforming the market. Relative strength has always been a cornerstone of our investment process.
          It is, in our opinion, the most robust and adaptable method of security analysis ever developed. Despite the popular notion that such a simplistic 
          approach to security analysis can never beat the market, relative strength has been shown tim
        time again by portfolio managers and academic studies to be a viable methodology for outperforming the market over time.</p> 
      
     <img  className="about-left-img" src={graph}/>     
     <h3 className="about-right-heading">Objective</h3>
     <p className="about-right-para">Whether the market is favoring mid-cap growth stocks, dividend-paying stocks, Blue Chips, 
         stocks with high fundamental valuations, etc. our relative strength screens will lead us to
          those stocks being rewarded most by the market, 
         with the probability that these stocks will continue to be good performers in the future.</p>
         <img  className="triangle" src={triangle}/>


         <p className="adaptive-about">Adaptive</p>
         <p className="adaptive-para">By building a portfolio of strong relative strength stocks, 
         the investor is allowed to participate in long term trends.</p>
         <img   className="triangle-adaptive" src={triangle}/>


         <p className="management-about">Money Management Philosophy</p>
         <p className="management-para">Relative strength measurements are undistorted by emotion or personal bias. It is not necessary to interpret whether or not a stock is exhibiting strong relative strength. 
             It either is, or it is not. Only stocks with strong relative strength are candidates for our portfolios.</p>
             <img  className="management-triangle"  src={triangle}/>
</div>

         
         <div> 
             <img  className="technical-box" src={box}/>
             <h3 className="technical-body" >Why do I use technical analysis (Charts)</h3>
             <p className="technical-para">I have made immense trading profits for my clients and myself precisely because I do not listen to the news 
                 or any outside influences. I follow a 100% non-emotional and highly disciplined mechanical trading strategy.
                  And finally, to make money trading, we need only to know that markets move- not why they move. All of my trading methods are primarily based on price because price is reality. Trends in motion will stay in motion until they reverse.</p>
         </div>
        <div className="background-graphbar">
           
        </div>
        <p className="graphbar-para">❝  You should know that I rarely (if ever) talk about the news. My view as a trader for 38 years is that market moves create the news, not that the news creates market moves. Therefore, to say that this news event caused the market to do thus and so - is absurd. No one knows why the markets do anything (although many traders with great hubris think they know),
          
                 but it is a claim that cannot be epistemologically defended in my view.</p>
                 <img className="graphbar-img" src={graphbar}/>
       <div className="footer">
       <Footer/>
       </div>
     </div>
    ) 
}
export default About
