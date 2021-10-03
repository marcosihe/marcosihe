import React from 'react'
import styles from './Data.module.scss'

const Data = (props) => {
    const { list, liStyles } = props
    return (
        <section className={styles.listContainer}>
            <ul className={styles.ulStyles}>
                {list.map( (item, index) => <li key={index} className={liStyles}>{item}</li>)}
            </ul>
        </section>
    )
}

export default Data
