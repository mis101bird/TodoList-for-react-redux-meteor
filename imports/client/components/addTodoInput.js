import React, {Component} from 'react';
import addTodo from '../actions/addTodo';

class TodoInputContent extends Component{
    

    handleAddToDo(e){
        e.preventDefault();
        console.log("click: "+this.textInput.value);
        addTodo(this.textInput.value)();
    }
    
    render(){
        return (
            <div>
                <input type="text" name="text" ref={(input) => { this.textInput = input; }} />
                <input type="button" onClick={this.handleAddToDo.bind(this)} value="Click Me!" />
            </div>
        );
    }
}

export default TodoInputContent;