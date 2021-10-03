import React from 'react'
import styles from './CardBody.module.scss'

const CardBody = (props) => {
    return (
        <section className={styles.cardContainer}>
        {props.children}
        </section>
    )
}

export default CardBody
