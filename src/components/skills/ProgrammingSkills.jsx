import React from 'react'
import ProgressBar from '../progress/ProgressBar'
import styles from './ProgrammingSkills.module.scss'

const ProgrammingSkills = () => {
    return (
        <section className={styles.skillsContainer}>
        <h2>Programming Skills</h2>
        <ProgressBar title="HTML 5 & CSS 3" prog={90} />
        <ProgressBar title="Javascript" prog={90} />
        <ProgressBar title="React JS" prog={60} />
        <ProgressBar title="Node JS" prog={50} />
        <ProgressBar title="Java" prog={50} />
        </section>
    )
}

export default ProgrammingSkills
