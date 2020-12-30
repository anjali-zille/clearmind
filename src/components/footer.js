import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter ,MDBIcon} from "mdbreact";
import './footer.css';


function Footer() {
    return(
        <MDBFooter color="black" className="font-small pt-4 mt-8">
      <MDBContainer fluid className="text-center text-md-left">
      <hr></hr>
      <hr></hr>
        <MDBRow>
          <MDBCol md="3">

            <h5 className="footerTitle">CLEARMIND</h5>
            {/* <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p> */}
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title"><b>PRODUCTS</b></h5>
            <ul>
              <li className="list-unstyled footer-list">
                <a href="#!">Cycle</a>
              </li>
              <li className="list-unstyled footer-list">
                <a href="#!">Deep-i</a>
              </li>
            </ul>
            <h5 className="title"><b>SERVICE</b></h5>
            <ul>
              <li className="list-unstyled footer-list">
                <a href="#!">Wealth Management</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
              
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="titlefooter "><b>Contact</b></h5>
            <ul>
              <li className="list-unstyled   footer-list">
                {/* <a href="#!">Link 1</a> */}
                <MDBIcon  className= "footer-icon" icon="map-marker-alt" /><br></br> 
                <address  >1st floor,Above Industial Bank Opp Lane NO.4,North Main Road,
                    Koregaon Park,Pune-411001 Maharastra </address>
              </li>
              <li className="list-unstyled  footer-list">
              <MDBIcon className="footer-phone" icon="phone-alt" /> 
                 <a href="tel:020 29510916">020 29510916</a><br></br>
                 <a href="tel:+91 9372810916">+91 9372810916</a>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
              
            </ul>
          </MDBCol>
          <MDBCol md="3">
            {/* <h5 className="title">Links</h5> */}
            <ul>
              <li className="list-unstyled">
                <a href="#!"><h5><b>BLOGS</b></h5></a>
              </li>
              
              <br></br>
              <li className="list-unstyled">
                <a href="#!"><h5><b>ABOUT</b></h5></a>
              </li>
              <br></br>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon  className="footer-social-icon" fab icon="facebook-square mdb-gallery-view-icon" /></a>
                <a href="#"> <MDBIcon className="footer-social-icon" fab icon="linkedin-in mdb-gallery-view-icon" /></a>
                <a href="#"> <MDBIcon className="footer-social-icon" fab icon="twitter mdb-gallery-view-icon" /></a>
                <a href="#"> <MDBIcon  className="footer-social-icon"fab icon="google-play mdb-gallery-view-icon" /></a>
              </li>
              
            </ul>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <hr className="hr"></hr>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy;  2015 ClearMind. <a href="#"> All rights reserved </a>
        </MDBContainer>
      </div>
      {/* <hr></hr> */}
    
    </MDBFooter>
    )
    
}
export default Footer;


//copyright function
// {new Date().getFullYear()}