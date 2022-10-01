import React from 'react'
import "./Navitem.css"
import {RiLiveLine,RiPlayListAddFill} from "react-icons/ri"
import {FaRegNewspaper} from "react-icons/fa"
import{ GiRun} from "react-icons/gi";

const Navitem = () => {




    return (
        < div className="middle">
            
         <div className="nav-items"><RiLiveLine/><span>Live</span></div>
              
         <div className="nav-items"><FaRegNewspaper/><span>Membership</span></div>    
         <div className="nav-items">< GiRun/><span>Plans</span></div>   
         <div className="nav-items"><RiPlayListAddFill/><span>More</span></div>
        </div>
    )
}

export default Navitem