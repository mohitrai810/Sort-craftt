import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title"><div class='c' >Contact me</div></h1>
      <div className="contact-info">
        <ul>
          <li>
            <div class='cc'>Email : <a href="https://mail.google.com/">mohitrai22222@gmail.com</a></div>
          </li>
          <li><div class='cc'>Phone no. : 9871024166</div></li>
          <li><div class='cc'>
            Location : <a href='https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5275544,77.0441691,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu'>New Delhi, Delhi</a>
            </div></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
