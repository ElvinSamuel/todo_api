var express    = require('express'),
    app        = express(),
    /* Adding in the Port */
    port       = process.env.PORT || 3000,
    bodyParser = require('body-parser');

// MongoDb============================
var todoRoutes = require('./routes/todos');

app.use('/api/todos', todoRoutes);
// BodyParser========================
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));
//===================================
app.get('/', function(req, res){
    res.sendFile('Hello From Root Route!');
});

// Handle Everything Else By Simply Redirecting
app.get('*', function(req, res){
    res.redirect('/');
});

app.listen(port, function(){
    console.log(`To-Do List Up & Running On Port ${process.env.PORT}`);
});
