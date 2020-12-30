
import React ,{Component} from 'react';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'

//components
import Navbar from './components/Navbar';
import Footer from './components/footer'
import LandingPage  from './components/LandingPage'



class App extends Component{
  render() {
    return(
     <Router> 
        <Navbar />
        <LandingPage/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <Footer/> */}
     </Router> 
   
        
    );
  }
}

export default App;
