
import React ,{Component} from 'react';

import {BrowserRouter as Router} from 'react-router-dom'
//components
import Navbar from './components/Navbar'



class App extends Component{
  render() {
    return(
     <Router> 
        <Navbar />
     </Router> 
   
        
    );
  }
}

export default App;
