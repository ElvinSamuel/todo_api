var express = require('express'),
    app     = express(),
    /* Adding in the Port */
    port    = process.env.PORT || 3000;
    
// ====================================
var todoRoutes = require('./routes/todos');

app.use('/api/todos', todoRoutes);
// ===================================
app.get('/', function(req, res){
    res.send('Hello From Root Route!');
});

app.listen(port, function(){
    console.log(`To-Do List Up & Running On Port ${process.env.PORT}`);
});
