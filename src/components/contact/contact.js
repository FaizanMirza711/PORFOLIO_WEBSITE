import React from 'react'
import "./contact.css"
import Phone from"./phone.png"
import Email from "./gmail.png"
import Address from "./home-address.png"
// import emailjs from '@emailjs/browser';

const contact = () => {
    // const formRef =useRef()

    // const handlesubmit =(e)=>{
    //     e.preventDefault();
    // }
  return (
   <div className="c">
    <div className="c-bg"></div>
    <div className="c-wraper">
        <div className="c-left ">
            <h1 className="c-title">
                Hey Let's Chat Now!!!
            </h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Phone} alt="contact-me" className="c-icon"/>
                   +91 8459432151
                </div>
            </div>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Email} alt="contact-me" className="c-icon"/>
                    mirzafaizanmail@gamil.com
                </div>
            </div>
            <div className="c-info">
                <div className="c-info-item">
                    <img src={Address} alt="contact-me" className="c-icon"/>
                    Sus gaon Pune
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                <b>What is Your Story ?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat accusantium voluptates beatae, placeat ipsa tempore consectetur amet incidunt aliquam, numquam doloribus dolores nisi hic error cumque vitae optio harum.
            </p>
            <form >

            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea cols="10" rows="5" placeholder="Message" name='message'></textarea>
            <button>Submit</button>
            </form>
        </div>
    </div>
   </div>
  )
}

export default contact


// ref={formRef} onSubmit={handlesubmit} inside form for email
//upar hook use reference