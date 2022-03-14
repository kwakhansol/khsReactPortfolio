import React from 'react'
import "./contact.css";
import Phone from"../../img/phone.png";
import Email from"../../img/email.png";
import Address from "../../img/address.png"
import { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
    const formRef = useRef()
   
    const [done, setDone] = useState(false);
    const handleSubmit = (e)=>{
       e.preventDefault(); 
       emailjs.sendForm(
            "service_y6p03t6",
            "template_j45r1vg",
            formRef.current,
            "user_nE1c1IFDSE6AwjWngZ2CS"
        )
       .then((result) => {
           alert('메일이 전송되었습니다.');
           setDone(true);
           document.location.href = '/'
       }, (error) => {
           console.log(error.text);
       });
    }


    return (
        <div className="c">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="연락처" className="c-icon" />
                            +82 10 2250 0362
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="이메일" className="c-icon" />
                            kwack1107@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="주소지" className="c-icon" />
                            서울시 영등포구
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b className="desc-title">제 포트폴리오를 봐주셔서 감사합니다.</b>
                        <br/>
                        저에 궁금한 점이 있으시다면
                        <br/> 메일을 보내주시거나 연락처로 연락 남겨주세요:)
                        <br/> 빠른 회신 드리겠습니다. 감사합니다.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder="성함" name ="user_name"/>
                        <input type="text" placeholder="제목" name ="user_subject"/>
                        <input type="text" placeholder="이메일" name ="user_email"/>
                        <textarea name="message" rows="5" placeholder="내용을 작성해 주세요"></textarea>
                        <button >Submit</button>
                        {done}
                    </form>
                </div>
            </div>
            <footer className="c-footer" >
                <p className="footer-copy">copyright ⓒ hansol kwak 2021.12</p>
            </footer>
        </div>
    )
}

export default Contact
