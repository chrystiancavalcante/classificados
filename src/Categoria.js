import React, { Component } from 'react'
import Axios from 'axios'

class Categoria extends Component{
    constructor(props){
     super(props)

    }
        render(){
            return(
        <h1>
            Categoria: {JSON.stringify(this.props.match.params.urlCategoria)}
        </h1>
            
        )
    }
}
   
export default Categoria

// https://mercadodevpro.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22esportes-e-lazer%22