

import React from 'react';

const SkillsDisplay = () => {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 65 },
    { name: 'Python', level: 90 },
    { name:  "React", level:50},
    { name:  "git", level:65}
    // Add more skills here
  ];

  return (
    

    <div id="testimonial" className="skills-container">

      <div className="portfolio--container">
      <p className="section--titleee">My Skills</p>
        
      </div>


      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-label">{skill.name}</div>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: `${skill.level}%` }}>
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;
