import React from 'react'

const Categoria = (props) => {
    return(
        
    <h1>
        Categoria: {JSON.stringify(props.match.params.urlCategoria)}
    </h1>
    )
}
   
export default Categoria