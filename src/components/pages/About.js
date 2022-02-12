import React from 'react';
import profileImage from '../../assets/images/Yongfeng.jpg';
function About() {
  return (
    <section>
    <h2 className="section-header">About Me</h2>
    <img src={profileImage} alt="Yongfeng Liu" />
    <p>
    I majored in Education and have been working at UT as an excellent Foreign Language Instructor for more than 7 years. 
    My background in Education have provided me with a unique perspectives on how end-users interact with websites and software platforms.    
    Earned a certificate in Full Stack Web Development from the University Coding Boot Camp. 
    Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, communication and building projects from ideation to execution.   
    </p>
</section>
  );
}

export default About;
