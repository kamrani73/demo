import React, { Component } from 'react';
import './App.css';

//adding dynamic data to our app

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userName : "kamrani",
      course : "Zero to Hero",
      data : "09385724...",
      todoItem :[{ action : "plan1", done :false},
                  {action : "plan2", done :true},
                  {action : "plan3", done :false},
                  {action : "plan4", done :true},],
      newItemText : ""            
    }
  }
updateNewValue =(event) =>
{
  this.setState({ newItemText :  event.target.value});
}  

createNewToDo =() =>
{
  if(!this.state.todoItem
          .find(item => item.action === this.state.newItemText))
          {
            this.setState({
              todoItem : [...this.state.todoItem,
                        {action: this.state.newItemText,
                        done: false}],
                        newItemText : ""
            });
          }
}

changeStateDate =() =>
  {
    this.setState(
      {userName : this.state.userName == "kamrani" ? "paria" : "kamrani"}
    )
  }
    render() {
      return( 
        <div>
          <h4 className="bg-primary text-white text-center p-2">
            Hello world APP
          </h4>
          <h4 className="bg-primary text-white text-center">
             {this.state.userName} React {this.state.course} & this is her number {this.state.data}
          </h4>
          <button className="btn btn-danger m-2 " onClick={this.changeStateDate}>
            click me
          </button>
          <h4 className="bg-primary text-white text-center p-2">
            {this.state.userName} to do list
            ({this.state.todoItem.filter(t=> !t.done).length}) item to do          </h4>
          <div className="container-fludi">
              <div className="m-1">
                  <input className="form"
                          value={this.state.newItemText}
                          onChange={this.updateNewValue}/> 
                  <button className="btn btn-info mt-1"
                          onClick={this.createNewToDo}>
                  Add new task
                  </button>        
              </div>
          </div>
          
        </div>
      )
    };
}