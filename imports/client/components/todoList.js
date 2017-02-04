import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Todos from '../../../imports/collections';
import Store from '../store/store';
import toggleTodo from '../actions/toggleTodo';
import { connect } from 'react-redux';

class TodoList extends Component{

    renderAllTodos(){
        return this.props.todos.map((item)=>{
            return (
                <li onClick={()=>{
                        toggleTodo(item._id)();
                    }}
                    key={item._id} 
                    style={{ textDecoration: item.completed?'line-through':'none' }}
                    >{item.text}</li>
            );
        });
    }   

    render(){
        return (
            <div>
            <ul>
               { this.renderAllTodos() }
            </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    filter: state.visibilityFilter
  }
};

// createContainer will create an new component
// connection()為connection(null, { dispatch: dispatch }), 沒有傳入State
export default connect(mapStateToProps)(createContainer((props)=>{ //State will add to props
    console.log(props);
    Meteor.subscribe('getTodos', props.filter); //take filter from props
    console.log(Todos.find({}).fetch());
    return { todos: Todos.find({}).fetch() };
}, TodoList));