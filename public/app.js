/* global $ */
$(document).ready(function(){
    $.getJSON("/api/todos")
        .then(addTodos);
        
        $('#todoInput').keypress(function(event){
            if(event.which === 13){
                console.log("You hit enter");
            }
        })
});

function addTodos(todos){
    todos.forEach(function(todo){
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.completed){
            newTodo.addClass("done");
        }
        $('.list').append(newTodo);
    });
}