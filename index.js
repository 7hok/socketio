var app =require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/home',function(req,res){
    res.send('<h2>testing home </h2>');
})

io.on('connection',function(socket){
    console.log('user connected')

    socket.on('chat message',function(data){
        console.log(`USER :`+ data);
            io.emit('chat message',data);
    })
    socket.on('disconnect',function(){
        console.log(`one left now`);
    })
})


http.listen(7272,function(){
    console.log('listening on *: 3000');
    
})