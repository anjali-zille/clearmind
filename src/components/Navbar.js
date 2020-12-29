import React,{useState} from 'react';

import {Link} from 'react-router-dom'
import './Navbar.css';
// import Dropdown from './Dropdown';
import {Dropdown} from 'react-bootstrap'


function Navbar (){
    // mobile view code
    const [click,setclick]=useState(false) //mobileview icon click
    // const [dropdown,setDropdown]=useState(false)
    const [isShown, setIsShown] = useState(false);
    const [isShownProduct,setShowProduct]=useState(false)
    const handleClick=()=>setclick(!click) 
    const closemobileMenu=()=>{setclick(false)}
   
    // const onMouseEnter = () => {
    //     if (window.innerWidth < 960) {
               
    //         setDropdown(false);
            
    //     } else {
    //         console.log('enter') 
    //       setDropdown(true);
    //     }
    //   };
    
    //   const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
            
    //       setDropdown(false);
        
    //     } else {
    //       setDropdown(false);
    //     }
    //   };
    

   
    return(
        <>
            <nav className='navbar'>
                <Link  className='navbar-logo' to='/'  >CLEARMIND</Link>
            
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <li
            className='nav-item'
            onMouseEnter={() => setShowProduct(true)}
             onMouseLeave={() => setShowProduct(false)}>
                <Dropdown>
                    <Dropdown.Toggle variant="Secondary" className ='nav-links'>
                      PRODUCTS
                    </Dropdown.Toggle>

                    {isShownProduct && <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Deep-i</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Cycle</Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>}
                        </Dropdown> 
                </li>
                
                <li
            className='nav-item'
            onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)} >
                     <Dropdown>
                     <Dropdown.Toggle variant="Secondary" className ='nav-links'>
                       SERVICE
                    </Dropdown.Toggle>
                 
                    {isShown && <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Wealth Management</Dropdown.Item>
                        
                        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        
                        </Dropdown.Menu>  }
                    </Dropdown></li>
                
                <li className='nav-item'>
                    <Link  className ='nav-links' to='/blog'  onClick={closemobileMenu}>Blog </Link></li>
                
                <li className='nav-item'>
                    <Link  className ='nav-links' to='/about'  onClick={closemobileMenu}>About</Link></li>
                
                <li className='nav-item' 
                 >
                        <Link className ='nav-links'  to='/contact'  onClick={closemobileMenu}>
                    Contact  </Link></li>
            </ul>
            </nav>
        </>
    )
}
export default Navbar;
