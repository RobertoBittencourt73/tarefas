import React, {Component} from 'react';
import Tarefas from './Tarefas.js'
import './App.css';

class App extends Component{
    constructor(props) {
      super(props)
      this.state = {

      }
    }
    render(){
      return(
          <div>
            <header>
                  <h1>Tarefas</h1>
            </header>
            <section>
                 <Tarefas />
            </section>
            <footer>
               <h4>By Roberto Bittencourt</h4>
            </footer>
              
          </div>
      )
    }
}

export default App
