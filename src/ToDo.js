// const { Component } = require("react");
import React, { Component } from 'react';

class ToDo extends Component{
    constructor(props){
      super(props)

      this.state = {
        isContentUpdating : false
      }
    }

    handleContentEdit = (e)=>{
      this.setState({
        isContentUpdating : true
      })
    }

    handleRemoveClick = (e)=>{
      var id = this.props.id
      this.props.removeToDo(id)
    }
    render(){
        return(
            <div className="todo">
                <div className="todo-body">
                  <i className="far fa-times-circle todo-remove" onClick={this.handleRemoveClick}></i>
                  <div className="todo-content" onDoubleClick = {this.handleContentEdit}>
                    {
                      this.state.isContentUpdating == true ? (
                        <input type="text" className="form-control" value="Call Peter"/>
                      ) : this.props.content
                    }
                  </div>
                  <div className="todo-priority">
                    {this.props.priority}
                  </div>
                </div>
              </div>
        )
    } 
}

export default ToDo;