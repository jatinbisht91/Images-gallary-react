import React from 'react'
import './Card.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa"
const Card = ({ item }) => {

    return (
        <div className=" hover flex ">
            <div className="bg" style={{ backgroundImage: `  url(${item.src})` }}>
                <div className="overlay"></div>
            </div>
            <div className="heading"><h1>{item.title}</h1><span style={{ fontSize: " 30px" }}><FaRegArrowAltCircleRight /></span></div>
        </div>
    )
}

export default Card