import React from 'react'
import LeftSection from '../main-left/LeftSection'
import styles from './Main.module.scss'
import RightSection from '../main-right/RightSection'

const Main = () => {
    return (
        <main className={styles.mainContainer}>
            <LeftSection />
            <RightSection />
        </main>
    )
}

export default Main
