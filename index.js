var app =require('express')();
var http = require('http').createServer(app);
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/home',function(req,res){
    res.send('<h2>testing home </h2>');
})

http.listen(7272,function(){
    console.log('listening on *: 3000');
    
})