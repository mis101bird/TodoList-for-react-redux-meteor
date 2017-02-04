import Todos from '../imports/collections';

Meteor.methods({
    'addTodo': function(text){
        const todo = Todos.insert({
            text: text,
            completed: false
        });
        console.log(todo);
        return todo;
    },
    'toggleTodo': function(id){
        const todoInQuestion = Todos.findOne({_id: id}, {fields: {completed: true}});
        return Todos.update({_id: id}, {$set: { completed: !todoInQuestion.completed }});
    }
});
