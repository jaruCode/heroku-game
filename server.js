var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    //console.log() calls will be displayed in the server console, since it the back-end;

    //io.emmit triggers listener on 'user connection', and sends the msg;


    socket.on('userAuth', function(userData){
        console.log(userData);
        io.emit( 'user connection', userData, 'User ' +userData.nickname+ ' has joined the chat, say HI!' );

        socket.on('chat message', function(userData ,msg){
            io.emit('chat message', userData , msg);
        });
        socket.on('disconnect', function(){
            io.emit( 'user connection', 'User ' +userData.nickname+ ' has left the chat, you where to booring, sorry' );
        });
        socket.on('user typing', function(userData, istyping){
            io.emit('user typing msg', userData, istyping);
        });
        
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});