import React from 'react'
import { useState } from "react";
import './contact.css'

const Contact = () => {
    
        const [name, setName] = useState("");
        const [company, setCompany] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const IsEmail=()=>{
            let mail = document.getElementById('not-mail');
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (email.match(regex)) {
                mail.style.display='none';
                return true;
            }
            else{
                mail.style.display='block';
                mail.style.animation = 'dongle 1s';
                setTimeout(()=>{
                    mail.style.animation='none';
                },1000);
                return false;
            }
        }

        const failMessage = () =>{
            let formMess = document.querySelector('.form-message');

            formMess.innerHTML = 'Thank you to complete the required fields *'
            formMess.style.opacity = '1';
            formMess.style.background = 'rgb(253,87,87)';

            document.getElementById('name').classList.add('error');
            document.getElementById('email').classList.add('error');
            document.getElementById('message').classList.add('error');
        }

        const sucessMessage = () =>{
            let formMess = document.querySelector('.form-message');

            formMess.innerHTML = 'Message sent ! We will contact you as soon as possible';
            formMess.style.background = '#00c1ec';
            formMess.style.opacity = '1';
        }

        const handleSubmit = (e) => {
          e.preventDefault();
            if (name && IsEmail() && message) {
                sendFeedback("template_yia4fdo", {
                    name,
                    company,
                    phone,
                    email,
                    message,
                  });
            }
            else{
                failMessage();
            }
         
        };
      
        const sendFeedback = (templateId, variables) => {
      
          window.emailjs
            .send("outlook", templateId, variables)
            .then((res) => {
              sucessMessage();
              setName("");
              setCompany("");
              setPhone("");
              setEmail("");
              setMessage("");
            })
            .catch(
              (err) =>
                document.querySelector('.form-message').innerHTML =
                  "An error has occured, please try again.")
        };
      
        return (
          <form className="contact-form">
            <h2>Contact Us</h2>
            <div className="form-content">
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="name *"
                value={name}
                autoComplete="off"
              />
              <input
                type="text"
                id="company"
                name="company"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="company"
                value={company}
              />
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
                value={phone}
              />
              <div className="email-content">
                <label id="not-mail">Invalid email</label>
                <input
                  type="mail"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email *"
                  value={email}
                  autoComplete="off"
                />
              </div>
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message *"
                value={message}
              />
            </div>
            <input
              className="button"
              type="button"
              value="Submit"
              onClick={handleSubmit}
            />
            <div className="form-message"></div>
          </form>
        
    )
};

export default Contact;
