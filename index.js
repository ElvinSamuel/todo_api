var express = require('express'),
    app     = express(),
    /* Adding in the Port */
    port    = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.json({
        message: "Does this work?"
    });
});

app.listen(port, function(){
    console.log(`To-Do List Up & Running On Port ${process.env.PORT}`);
});
