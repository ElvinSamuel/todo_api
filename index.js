var express = require('express'),
    app     = express();

app.get('/', function(req, res){
    res.send("Hi!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`To-Do List Up & Running On Port ${process.env.PORT}`);
});
