import React, { Component } from 'react';

export class TodoBanner extends Component 
{
    render = () =>
    
    <div>      
    <h4 className="bg-primary text-white text-center p-2">
        {this.props.name} To Do List
        ({this.props.task.filter(t => !t.done).length} item )
    </h4>
    </div>
}
export default TodoBanner;