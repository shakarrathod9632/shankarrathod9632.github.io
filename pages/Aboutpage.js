import React from 'react'
import './AboutMe.css';


function Aboutpage() {
  return (
    <div className="about-container">
    <h1>About Me</h1>

<div className="about-content">
  <div className="about-section">
    <h2>Personal Details</h2>
    <p><strong>Name:</strong> Shankar Rathod</p>
    <p><strong>Gender:</strong> Male</p>
    <p><strong>Height:</strong> 5'8"</p>
    <p><strong>Marital Status:</strong> Single</p>
    <p><strong>Date of Birth:</strong> march 08, 2002</p>

    <div className="about-section">
    <h2>Languages</h2>
    <p>Proficient in English, Kannada, Hindi, and Telugu.</p>
  </div>
  </div>
  <div className="about-section">
    <h2>Contact Me</h2>
    <p><strong>PHONE:</strong> 9632533323</p>
    <p><strong>E-Mail:</strong>sakkurathod8585@gmail.com</p>

      <div className="about-section">
      <h2>Hobbies & Interests</h2>
      <p>Watching movies, cooking, reading philosophical books, playing video games, and researching interesting topics.</p>
    </div>
  </div>

  <div className="about-section">
    <h2>Address</h2>
    <p><strong>Permanent Address:</strong> Vantigudasi, Post: Venkatapur, Taluk: Chincholi, District: Kalaburgi, Postal Code: 585305</p>
    <p><strong>Current Address:</strong> Electronic City, Bangalore, Karnataka</p>
  </div>

  <div className="about-section">
    <h2>Education Background</h2>
    <p><strong>School:</strong> Government Higher School, Kunchawaram, completed up to 10th standard with 73%</p>
    <p><strong>PUC:</strong> Karnataka PUC Science College, Bidar (2018-2020) with 80%</p>
    <p><strong>Graduation:</strong> Bachelor of Computer Application (BCA) from SunSoft Degree College, Bidar (2020-2023) with 8.2 CGPA</p>
  </div>

  


</div>
</div>
);
};

export default Aboutpage;