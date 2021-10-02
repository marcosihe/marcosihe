import React from 'react'

const Copy = (props) => {
    const {name, styles, fecha} = props
    return (
        <article className={styles}>
            <p>&copy; {fecha}</p>
            <p>Created by {name}</p>
        </article>
    )
}

export default Copy
