// import React from "react";
import emailjs from 'emailjs-com';
const Mailer = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_nxvwfye','template_pw4a8z6',e.target,)
    }

    return(
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name="name"/>

                <label>email</label>
                <input type="email" name="user_email"/>

                <label>message</label>
                <textarea name="message" rows="4"/>

                <input type="submit" value="send"/>
            </form>
        </div>
    );
}

export default Mailer;