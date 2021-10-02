import React from 'react'

const List = (props) => {
    //Se espera recibir, mediante props, un array con elementos a listar y además los estilos para esta lista
    const { list, styles } = props
    return (
        <ul className={styles}>
            {list.map( (item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

export default List
