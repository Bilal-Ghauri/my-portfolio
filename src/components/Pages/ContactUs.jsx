import React , {useEffect, useRef, useState} from "react";
import Appbar from "../reusable/Appbar";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactUs = () => {

  const notify = () => toast.success("Email Send!");
  const [formData , setFormData] = useState({
    name : '',
    email : '',
    phone : '',
    message : ''
  })

  const [disabled , setDisabled] = useState(true)

  const {name , email , phone , message} = formData

  const form = useRef();

  useEffect(()=> {
    if(email.trim() == '' || name.trim() == '' || phone.trim() == '' || message.trim() == ''){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  } , [formData])

  const handleChange = (e)=> {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if(email.trim() == '' || name.trim() == '' || phone.trim() == '' || message.trim() == ''){
      return
    }

    emailjs.sendForm('service_saoit4j', 'template_rrqp1ku', form.current, 'Se6WbRXHk6D5l-eiZ')
      .then((result) => {
          setFormData({
            name : '',
            email : '',
            phone : '',
            message : ''
          })
          notify()

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="mx-3 mx-md-5">
      <Appbar />
      <div className="rounded  ml-10 p-md-4 p-0 pt-3  mt-0">
        <h1 className="display-5  fw-bold">Contact Us</h1>
        <p className="fs-4 pt-1 lead">
          Please help us to respond better to your query by filling out the form
          below.
        </p>

        <form ref={form} className="contact-us-form" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" id="" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" value={formData.message} onChange={handleChange} ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" disabled={disabled}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
