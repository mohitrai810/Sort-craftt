import React from 'react';
import './About.css'; // Import the CSS file


const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title"><div class="h">Mohit Rai</div></h1>
        <div className="social-icons">
            
          <a href="https://www.linkedin.com/in/mohit-rai-369595224/" target="_blank" rel="noopener noreferrer">
            
            <img src='https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png' alt="LinkedIn" className="social-icon" style={{ width: '30px', height: '30px' }} />
          </a>
         
          <a href="https://www.instagram.com/goldenwood.09/" target="_blank" rel="noopener noreferrer">
            <img src='https://seeklogo.com/images/I/instagram-new-2016-logo-4773FE3F99-seeklogo.com.png' alt="Instagram" className="social-icon" style={{ width: '30px', height: '30px' }} />
          </a>
         
          <a href="https://wa.me/+919871024166">
            <img src='https://i.pinimg.com/564x/6c/78/49/6c784972cbf5806215d46fbda8b0c46a.jpg' alt="Twitter" className="social-icon" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://leetcode.com/u/mohitrai22/" target="_blank" rel="noopener noreferrer">
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png' alt="Instagram" className="social-icon" style={{ width: '30px', height: '30px' }} />
          </a>
         
        </div>
      </div>

      <p className="about-content"><div class='hh'>Hey there! I'm currently a student at NIET College pursuing Computer Science with a specialization in Data Science. My fascination with technology and its potential to transform the world led me to dive deep into the realm of data science. At NIET, I'm constantly exploring new concepts, solving complex problems, and honing my skills to become a future-ready professional in the field.</div></p>
      <br></br>
      <p className="about-content"><div class='hhh'><i>Success is not final, failure is not fatal: It is the courage to continue that counts.</i> - <b>Winston Churchill</b></div></p>
    </div>
  );
};

export default About;
