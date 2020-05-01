import React, {Component} from 'react'

class Tarefas extends Component{
    constructor(props) {
        super(props)
        this.state = {
            tarefa: '',
            itens: []
             
        }
       this.addItem = this.addItem.bind(this)
       this.deletar = this.deletar.bind(this)
    }
   addItem(e){
      let state = this.state
      if(this._ipt.value !== ''){
          let newItem = {
            text: this._ipt.value,
              key: Date.now()              
          }
          this.setState({itens: [...state.itens, newItem]})
      }
     e.preventDefault()
     this.setState({tarefa: ''})
   }
   deletar(key){
        let filtro = this.state.itens.filter((item)=> {
            return (item.key !== key)
        })
        this.setState({itens: filtro})
   }
    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type='text' placeholder='Nova Tarefa...' name='tarefa' className='tarefas'
                     value={this.state.tarefa} onChange={(ev)=> this.setState({tarefa: ev.target.value})}
                     ref={(refer)=> this._ipt = refer}/> 
                     <button type='submit'>Salvar</button>
                </form>
                <ol>
                    {this.state.itens.map((item)=> {
                        return(
                            <li key={item.key}>{item.text}
                                <button onClick={()=> this.deletar(item.key)} className='btnLix'>
                                    <img src='excluir.png' title='Excluir'/>
                                
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default Tarefas