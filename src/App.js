
import React ,{Component} from 'react';

import {BrowserRouter as Router} from 'react-router-dom'

//components
import Navbar from './components/Navbar';
import Footer from './components/footer'




class App extends Component{
  render() {
    return(
     <Router> 
        <Navbar />
        <h1 >WelCome To Clearmind</h1>
        <Footer/>
     </Router> 
   
        
    );
  }
}

export default App;
