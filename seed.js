var mongoose   = require('mongoose');
var Todo       = require('./models/todo.js');

var data = [
        {
            name: "Feed Rocket, My Berner",
            completed: false
        },
        {
            name: "Tune up the FJ-40",
            completed: true
        },
        {
            name: "Get motorcycle ready ",
            completed: false
        }
    ];

// Content inside of the 'seedDB' function so that it's easy to export
function seedDB(){
    // Empty the original database
    Todo.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Removed all the to-do list items');
    
            // Add a few campgrounds
            data.forEach(function(todoItem){
                Todo.create(todoItem, function(err, item){
                    if(err){
                        console.log(err);
                    } else {
                        console.log('Added To Do List Item!');
                        }
                });
            });            
            
        }
    });
    
    
    // Add a few comments
}

module.exports = seedDB;