import React from 'react'
import { MDBIcon} from 'mdbreact';

function Feature(){
    return(
        <div>
            <div class="container ">
  <section class="p-md-3 mx-md-5 text-lg-left">
    
    <div class="row text-center d-flex justify-content-center mt-4">
      <div class="col-lg-4 col-md-6 mb-5">
      <MDBIcon icon="users  fa-2x mb-4" />
        <h4  style={{color: "#ffffff"}}class="font-weight-bold mb-4">Our Team</h4>
        <p class="text-muted px-2 mb-lg-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
      <MDBIcon icon="desktop  fa-2x mb-4" />
        <h4  style={{color: "#ffffff"}} class="font-weight-bold mb-4">Our Products</h4>
        <p class="text-muted px-2 mb-lg-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
      <MDBIcon icon="cogs fa-2x mb-4" />
        <h4  style={{color: "#ffffff"}} class="font-weight-bold mb-4">Our Services</h4>
        <p class="text-muted px-2 mb-md-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </section>
</div>
        </div>
    )
}

 export default Feature 