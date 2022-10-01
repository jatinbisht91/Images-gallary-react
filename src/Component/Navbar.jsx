import React from 'react'
import Navitem from './Navitem';
import {BsFillPersonFill} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {

  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%",height:"100px",boxShadow:"0px 5px 14px black"}}>
        <div><GiHamburgerMenu/></div>
        <div><Navitem/></div>
        <div className="display"><BsFillPersonFill/><h3>Login</h3></div>
    </div>
  )
}

export default Navbar