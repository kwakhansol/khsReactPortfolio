import React from 'react'
import Project from "../project/Project";
import "../projectList/projectList.css";
import { projects } from "../../data.js";
import ArrowDown from "../../img/down.png" 
function ProjectList() {
    return (
        <div className="pl">
            <div className="pl-txts">
                <h1 className="pl-title">Project</h1>
                <p className="pl-desc">
                    HTML,CSS,JavaScript,React,Java를 이용한 프로젝트입니다.
                </p>
            </div> 
            
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} desc={item.desc}  />    
                ))}
            </div>
            <div class="scrollImg" >
                <img src={ArrowDown} alt="" className="arrowDown" />
                <span>scroll</span>
            </div>        
        </div>
    )
}

export default ProjectList
