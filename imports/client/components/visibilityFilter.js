import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Todos from '../../../imports/collections';
import Store from '../store/store';
import { connect } from 'react-redux';

const Link=({ active, children, type})=>{

  if(active === type){
    return (<span>{children}</span>);
  }
    return (
      <a href="#" onClick={(e)=>{
          e.preventDefault();
          Store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: type});
      }}>{children}</a>
  );
};

class TodoList extends Component{

    renderAllTodos(){
        this.props.todos.map((item)=>{
            return (
                <li ref={item.id}>item.text</li>
            );
        });
    }   

    render(){
        return (
            <div>
                <Link active={this.props.filter} type={'SHOW_ALL'}>All</Link>, 
                <Link active={this.props.filter} type={'SHOW_COMPLETED'}>Completed</Link>, 
                <Link active={this.props.filter} type={'SHOW_ACTIVE'}>Active</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    filter: state.visibilityFilter
  }
};

export default connect(mapStateToProps)(TodoList);