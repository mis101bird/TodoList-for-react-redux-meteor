import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from '../imports/client/store/store';
import AddTodoInput from '../imports/client/components/addTodoInput';
import ToDoList from '../imports/client/components/todoList';
import VisibilityFilter from '../imports/client/components/visibilityFilter';

function TodoAppRoot() {
  return (
    <Provider store={Store}>
    <div className='todo-container'>
        <AddTodoInput />
        <ToDoList />
        <VisibilityFilter />
    </div>
    </Provider>
  );
}

Meteor.startup(()=> {
  ReactDOM.render(
    <TodoAppRoot />,
    document.getElementById('app')
  );
});