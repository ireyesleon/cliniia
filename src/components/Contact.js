import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [btnText, setBtnText] = useState('Submit');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zrhgbbw', 'template_pclyt0o', form.current, 'ueI3w2L6G7N_KAGOS')
      .then((result) => {
        setBtnText('Your email has been sent')
        setTimeout(() => {
          setBtnText('Submit')
        }, 5000);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
  return (
  <div className="row justify-content-center mt-5">
  <form onSubmit={sendEmail} ref={form} className="col-6">
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" name='email_address' required className="form-control email" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlInput1">Full Name</label>
    <input type="name" name="name" required className="form-control" id="exampleFormControlInput1" placeholder="Ex. Fox Mulder" />
  </div>
  <div className="form-group mt-2">
    <label htmlFor="exampleFormControlTextarea1">Send me a message</label>
    <textarea className="form-control" required name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-2">{btnText}</button>
</form>
    </div>
  )
}

export default Contact