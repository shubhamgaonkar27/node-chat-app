 var socket = io();

 socket.on('connect', function() {
     console.log('connected to server');


 });

 socket.on('disconnect', function() {
     console.log('Disconnected');
 });


 socket.on('newMessage', function(msg) {
     console.log('new email ', msg);
 });