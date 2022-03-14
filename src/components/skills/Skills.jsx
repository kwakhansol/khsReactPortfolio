import React from 'react'
import '../skills/skills.css'
// import Html from '../../img/html.png'
// import SkImg from '../../img/skills2.png'
import Sk1 from '../../img/sk1.png'
import Sk2 from '../../img/sk2.png'
import Sk3 from '../../img/sk3.png'
import ArrowDown from "../../img/down.png" 
function Skills() {
    return (
        <div className="s">
            <div className="s-txts" style={{width:"90px"}}>
                <h1 className="s-title">Skills</h1>
                <div className="s-container" >
                    <div className="item "></div>
                    <div className="item "></div>
                    <div className="item "></div>
                </div> 
            </div> 
            <div class="scrollImg" style={{position:"absolute", top:"85%"}}>
                <img src={ArrowDown} alt="" className="arrowDown" />
                <span>scroll</span>
            </div>
        </div>
    )
}

export default Skills;