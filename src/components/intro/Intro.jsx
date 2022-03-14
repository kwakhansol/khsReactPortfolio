import React from 'react'
import './intro.css';
import SOL from "../../img/sol.png" 
import ArrowDown from "../../img/down.png" 
function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">방문해 주셔서 감사합니다 :) </h2>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">HTML CSS 경험이 있는</div>
                                <div className="i-title-item">Javascript 경험이 있는</div>
                                <div className="i-title-item">React 경험이 있는</div>
                                <div className="i-title-item">Java 경험이 있는</div>
                                <div className="i-title-item">SQL 경험이 있는</div>
                            </div>
                        </div>
                    <h1 className="i-name">곽한솔입니다.</h1>
                </div>             
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={SOL} alt="" class="i-img"/>
            </div>
            <a className="scrollImg">
                <img src={ArrowDown} alt="" className="arrowDown" />
                <span>scroll</span>
            </a>
        </div>
    )
}

export default Intro
