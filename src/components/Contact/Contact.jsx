import React from 'react'
import styles from './Contact.module.css'
import emailIcon from '/assets/contact/emailIcon.png'
import githubIcon from '/assets/contact/githubIcon.png'
import linkedinIcon from '/assets/contact/linkedinIcon.png'

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:ivan.andrau@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer">
            ivan.andrau@gmail.com
            </a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/ivan-andrau-a246a5269/" 
          target="_blank" 
          rel="noopener noreferrer">
            linkedin.com/IvanAndrau
            </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="GitHub icon" />
          <a href="https://github.com/IvanAndrau" 
          target="_blank" 
          rel="noopener noreferrer">
            github.com/IvanAndrau
            </a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
