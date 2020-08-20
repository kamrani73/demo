import React, { Component } from 'react';

export class TodoRow extends Component 
{
    render = () =>
    <tr>
        <td>
            {this.props.item.action}
        </td>
        <input type="checkbox" checked={this.props.item.done}
                onChange={()=> this.props.callback(this.props.item)} />
    </tr>
}
export default TodoRow;