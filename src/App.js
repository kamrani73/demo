import React, { Component } from 'react';
import './App.css';
import TodoBanner from './TodoBanner';
import TodoRow from './TodoRow';
import TodoCreator from './TodoCreator';
import VisibilityControl from './VisibilityControl';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userName : "kamrani",
      todoItem :[{ action : "buy flower for my self", done :false},
                  {action : "read book", done :true},
                  {action : "go to the gym", done :false},
                  {action : "teach react", done :true},],
      showCompleted :true            
            }
  }
updateNewValue =(event) =>
{
  this.setState({ newItemText :  event.target.value});
}  

createNewToDo =(task) =>
{  if(!this.state.todoItem
          .find(item => item.action === task))
          {this.setState({
              todoItem : [...this.state.todoItem,
                        {action: task,
                        done: false}]},
         //keep data to show every time
  ()=> localStorage.setItem("todos",
        JSON.stringify(this.state))); 
                        
         }
}
  toggletodo =(todo) => this.setState
  ({todoItem : this.state.todoItem.map
    (item =>item.action ===todo.action ?
      {...item, done: !item.done} :item) });

  todoTableRows=(doneValue) => this.state.todoItem
  .filter(item => item.done === doneValue)
  .map
    (item =>
    <TodoRow key={item.action} item={item}
    callback={this.toggletodo}/>
    );
  
  
  //load /Get the kept data
  componentDidMount =() =>
  {
    let data =localStorage.getItem("todos");
    this.setState(data!=null ? JSON.parse(data):
    {
      userName : "kamrani",
      todoItem :[{ action : "buy flower for my self", done :false},
                  {action : "read book", done :true},
                  {action : "go to the gym", done :false},
                  {action : "teach react", done :true},],
      showCompleted :true    
    });
  }
    render() {
      return( 
        <div>
          {/*first mode to show without props
           <h4 className="bg-primary text-white text-center p-2"> 
             {this.state.userName} you have
            ({this.state.todoItem.filter(t=> t.done === false).length}) item to do
          </h4> */}
          {/*secend model to show s.t with props*/}
          <TodoBanner name={this.state.userName}
                      task={this.state.todoItem}/> 

              <TodoCreator callback={this.createNewToDo}/>
              <table className="table table-striped table-borderd">
                <thead>
                  <th>
                    To Do Task Name 
                  </th>
                  <th>
                    Done
                  </th>
                </thead>
                <tbody>
                  {/*show incomplete task*/}
                  {this.todoTableRows(false)}
                </tbody>
              </table>
              <div className="bg-warning text-white text-center p-2">
                  {/*calling child compunnent*/}
                  <VisibilityControl description ="completed Task"
                    ischecked={this.state.showCompleted}
                    callback={(checked)=>
                    this.setState({showCompleted:checked})}/>
              </div>
              {this.state.showCompleted &&
                <table className="table table-striped table-borderd">
                <thead>
                  <th>
                    Did Task Name 
                  </th>
                  <th>
                    status
                  </th>
                </thead>
                <tbody>
                  {/*show complete task*/}
                  {this.todoTableRows(true)}
                </tbody>
              </table>
              }
          </div>
      )
    };
}