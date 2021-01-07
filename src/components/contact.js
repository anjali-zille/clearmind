import React,{useState}from 'react';
import { uid } from 'uid';
import fire from './firebase'
import Footer from './footer'
import contactimg from '../images/contactimg.png'
import "./contact.css"

import "firebase/database";
const Contact = ()=>{
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

     const add =async () =>{
       console.log(name,email,message,uid())
      var data = {
        Name : name,
        Email : email,
        Message : message,
      }
      await fire.database().ref('web/contacts/' + uid()).set(data).catch(error =>{
        console.log(error.message);
    });
        setEmail("")
        setMessage("")
        setName("")  
          
     }

    return(
      <div > 
<h1 className="primary-heading"> Say </h1>
<h1 className="title-contact">Hello !</h1>
<hr className="hr-contact"></hr>
<div className="contactform-background"></div>

<img  className="contact-background img-fluid  contact-img"src={contactimg}/>
<form className="contact-form">
  <h1 className="contact-heading"> Contact Us</h1>
                    <table style={{width:"35%",height:"30%"}}>
                            <label for="heading"  className="form-label" >Name</label>
                            <input id="heading" className="form-control form-input" type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter Your Name"></input>

                            <label for="link" className="form-label">Email</label>
                            <input className="form-control form-input"  type="email" value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Enter Your Email"></input>
                            <div>
                                <label for="desc" className="form-label">Message</label>
                                <textarea id="desc" className="form-control form-input    " rows="7" name="comment" value={message} onChange={e=>setMessage(e.target.value)}  form="usrform" placeholder="Write Your Message Here......  ">
                                </textarea> <br/>
                            </div>
                            <input type="button" className="contact-button btn btn-success" onClick={()=>add()} value="Submit"/>
                    </table>
                </form>
<div className='contact-footer'>
  <Footer/> 
</div>


        </div>
    )
}


export default Contact;

