import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'


class NovoAnuncio extends Component {
    constructor(props) {
        super()
        this.state = {
            sucess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
          
            const file = this.foto.files[0]
            const { name, size } = file
            const ref = storage.ref(name)
            ref
            .put(file)
            .then( img => {
                const novoAnuncio = {
                    nome: this.nome.value,
                    descricao: this.descricao.value,
                    preco: this.preco.value,
                    vendedor: this.vendedor.value,
                    foto: img.metadata.downloadURLs[0],
                    telefone: this.telefone.value,
                    categoria: this.categoria.value
                }
                base.push('anuncios', {
                    data: novoAnuncio
                }, (err) => {
                    if(err){
    
                    }else{
                      this.setState({ sucess: true })    
                }
            })
        })  

        e.preventDefault()
    }
    render(){
        if (this.state.sucess) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <HeaderInterno />
                <div className='container' style={{ paddingTop: '120px'}}>
            <h1>Novo Anuncio</h1>
            <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
            <label htmlform='foto'>Foto</label>
            <input type='file' className='form-control' id='foto' placeholder='Foto' ref={(ref) => this.foto = ref} />
            </div>
            <div className='form-group'>
            <label htmlform='nome'>Nome</label>
            <input type='text' className='form-control' id='nome' placeholder='Nome' ref={(ref) => this.nome = ref} />
            </div>
            <div className='form-group'>
            <label htmlform='categorias'>Categorias </label>
            <select ref={(ref) => this.categoria = ref}>
            { 
                this.props.categorias.map( cat => <option value={ cat.url}> { cat.categoria }</option>)
            }

            </select>
            </div>
            <div className='form-group'>
            <label htmlform='descricao'>Descrição</label>
            <input type='text' className='form-control' id='descricao' placeholder='Descrição' ref={(ref) => this.descricao = ref}/>
            </div>
            <div className='form-group'>
            <label htmlform='preco'>Preço</label>
            <input type='text' className='form-control' id='preco' placeholder='Preço' ref={(ref) => this.preco = ref}/>
            </div>
            <div className='form-group'>
            <label htmlform='nome'>Telefone</label>
            <input type='text' className='form-control' id='telefone' placeholder='Telefone' ref={(ref) => this.telefone = ref}/>
            </div>
            <div className='form-group'>
            <label htmlform='nome'>Vendedor</label>
            <input type='text' className='form-control' id='vendedor' placeholder='Nome' ref={(ref) => this.vendedor = ref}/>
            </div>
            <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
            </form>
            </div>
            </div>
        )

    }
}
export default NovoAnuncio