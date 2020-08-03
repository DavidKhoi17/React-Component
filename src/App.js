import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [
          {
              id: 1,
              content: 'Water plants',
              priority: 'Urgent'
          },
          {
              id: 2,
              content: 'Camp shoes',
              priority: 'Important'
          },
          {
              id: 3,
              content: 'Check calendar',
              priority: 'Urgent'
          },
      ]
    }
  }

  addToDo = (data)=>{
    var newToDo ={
      id: Date.now(),
      ...data
    }

    var newList = [...this.state.todos, newToDo]
    this.setState({
      todos: newList
    })
  }
  removeToDo = (id)=>{
    var todos = this.state.todos

    var filtered = todos.filter((todo)=>{
      return todo.id != id
    })

    this.setState({
      todos: filtered
    })
  }
  updateToDo = ()=>{}

  render(){
    return(
        <div className="wrap">
          <div className="container">
            <div className="todos">
              
              {
                this.state.todos.map((todo)=>{
                  var todoProps = {
                    key: todo.id,
                    removeToDo: this.removeToDo,
                    ...todo
                  }
                  return(
                    <ToDo {...todoProps}/>
                  )
                })
              }
              <NewToDoForm addToDo={this.addToDo}/>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
