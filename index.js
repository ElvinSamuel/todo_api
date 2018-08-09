var express    = require('express'),
    app        = express(),
    /* Adding in the Port */
    port       = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    seedDB     = require('./seed.js');

// run the seed file for data
seedDB();

// MongoDb============================
var todoRoutes = require('./routes/todos');
// Express Static Files===============
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
// Express.Router=====================
app.use('/api/todos', todoRoutes);
// BodyParser=========================
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: true}));
//====================================
app.get('/', function(req, res){
    res.sendFile('index.html');
});

// Handle Everything Else By Simply Redirecting
app.get('*', function(req, res){
    res.redirect('/');
});

app.listen(port, function(){
    console.log(`To-Do List Up & Running On Port ${process.env.PORT}`);
});
