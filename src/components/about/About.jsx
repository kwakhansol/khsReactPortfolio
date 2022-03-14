import React from 'react'
import '../about/about.css'
import SOL2 from "../../img/sol2.png" 
import  { PermIdentity,SchoolRounded,Email,GitHub,Instagram,FormatListBulleted} from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Button } from '@material-ui/core';


import ArrowDown from "../../img/down.png" 
import SlideBanner1 from "../../img/slidebanner1.png" 
import SlideBanner2 from "../../img/slidebanner2.png" 
import SlideBanner3 from "../../img/slidebanner3.png" 
import SlideBanner4 from "../../img/slidebanner4.png" 
import SlideBanner5 from "../../img/slidebanner5.png" 
import SlideBanner6 from "../../img/slidebanner6.png" 


function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 8000,
       
    };

    return (
        <div className="a">
            <h1 className="a-title">About</h1>     
            <div className="a-conteiner">         
                <div className="a-left">
                    <img src={SOL2} alt="" className="a-img"/>
                    <div className="a-list">
                        <PermIdentity fontSize="large" className="a-icon"/>
                        <h4 className="a-info-title">생년월일</h4>
                        <p className="a-info-desc">92.11.07</p>
                    </div>
                    <div className="a-list">                            
                        <SchoolRounded fontSize="large"  className="a-icon"/>
                        <h4 className="a-info-title">학력</h4>
                        <p className="a-info-desc">남서울대학교 유통학과 졸업 </p>
                    </div>
                    <div className="a-list">   
                        <Email fontSize="large"  className="a-icon"/>
                        <h4 className="a-info-title">이메일</h4>
                        <p className="a-info-desc">kwack1107@naver.com</p>
                    </div>
                    <div className="a-list">
                        <GitHub fontSize="large" className="a-icon" />
                        <h4 className="a-info-title">깃허브</h4>
                        <a className="a-info-desc link" 
                            onClick={()=>window.open('https://github.com/kwakhansol')}
                            target="_blank">https://github.com/kwakhansol
                        </a>
                    </div>
                    <div className="a-list">
                        <FormatListBulleted fontSize="large" className="a-icon"/>
                        <h4 className="a-info-title">블로그</h4>
                        <a className="a-info-desc link" 
                        onClick={()=>window.open('https://instagram.com/soldinary','_blank')}
                        target="_blank">https://solog4something.tistory.com/
                        </a>   
                    </div>
                </div>
                <div className="a-right">
                    <div className="a-slider">                     
                        <Slider {...settings}>
                            <div className="bnImg">
                                <img src={SlideBanner1} alt="" />
                            </div>
                            <div className="bnImg">
                                <img src={SlideBanner2} alt="" />
                            </div>
                            <div className="bnImg">
                                <img src={SlideBanner3} alt="" />
                            </div>
                            <div className="bnImg">
                                <img src={SlideBanner4} alt="" />
                            </div>
                            <div className="bnImg">
                                <img src={SlideBanner5} alt="" />
                            </div>
                            <div className="bnImg">
                                <img src={SlideBanner6} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <a className="scrollImg">
                <img src={ArrowDown} alt="" className="arrowDown" />
                <span>scroll</span>
            </a>

        </div>
    )
}

export default About






