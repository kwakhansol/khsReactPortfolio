import React from 'react'
import "../project/project.css";

import ArrowDown from "../../img/down.png" 

function Project({img,link,desc}) {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-desc" >{desc}</div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">       
            <img src={img} alt="" className="p-img"/>
            </a>
            
        </div>
    )
}


export default Project;
