import React from 'react';
import skills from '../../data/skills.json';
import styles from './Experience.module.css';

const skillGroups = {
  "Programming Languages": "Languages",
  "Frontend Development": "Frontend",
  "Backend Development": "Backend",
  "Databases & Tools": "Tools&Databases"
};

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My Toolbox</h2>
      <div className={styles.content}>
        {Object.entries(skillGroups).map(([cardTitle, groupKey]) => {
          const filteredSkills = skills.filter(skill => skill.group === groupKey);

          return (
            <div key={groupKey} className={styles.card}>
              <h3 className={styles.cardTitle}>{cardTitle}</h3>
              <div className={styles.skills}>
                {filteredSkills.map((skill, id) => (
                  <div key={id} className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img src={skill.imageSrc} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
