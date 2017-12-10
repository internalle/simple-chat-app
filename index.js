const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('public'))
// //set view engine
 app.set('view engine', 'pug');
//
// //set view direcotyr
// app.set('views','./views');

// app.use(express.static('public'));
// app.use(express.static('images'));


app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' })
});

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });


io.on('connection', (socket) => {
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
	io.emit('chat message', msg);
  });
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected be ajvan');
  });
});


http.listen(3000, function(){
  console.log('listening on http://89.205.58.63:3000:3000');
});

