const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('hello code your future');
});

app.listen(3000, function(){
    console.log('server listen on port 3000');
});
