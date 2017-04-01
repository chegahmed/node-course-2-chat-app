var socket =io();

socket.on('connect',function(){
    console.log('Connect to server');


});
/*socket.emit('createMessage',{
 from:'Andrew',
 text:'Yop , that works for meeee.'
 });*/
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New  Message',message);
});
