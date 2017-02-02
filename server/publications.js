import Todos from '../imports/collections';

const todoPubFields = {
  text: 1, // return text
  completed: 1 // return completed
};

function getTodosPublication(filter, pageSkip = 0){
    let query = {};
    switch(filter){
        case 'SHOW_COMPLETED':
            query.completed = true; 
            break;
        case 'SHOW_ACTIVE':
            query.completed = false; 
            break;
        default:
            break;
    }
    Counts.publish(this, 'TodoCount', Todos.find(query)); //return total text counts
    return Todos.find(query, {fields: todoPubFields, skip: pageSkip, limit: 10}); //return specific fields
}

Meteor.publish('getTodos', getTodosPublication);