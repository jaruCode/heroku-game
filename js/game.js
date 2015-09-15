jQuery(document).ready(function(){
    var socket = io();

    socket.on('connect', function() {

        console.log("connected");

    }); 
});



//console.log(socket);