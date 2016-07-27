//Parallel asynchronous mapping

var mapAsync = require('./map_async');

var messages = ['Message 1','Message 2','Message 3'];

var index = 0;
mapAsync(messages, send, done);

function done(err, results){
    if(err){
      console.error(err);
    }else{
      console.log('all messages sent, results', results);
    }
}
function send(message, callback){
  var err = Math.random() > 0.8 ? new Error('Message not sent') : null;
  var result = ++ index;
   setTimeout(callback, randomTimeout(), err, result);
}

function randomTimeout(){
  return Math.floor(Math.random() * 1e3);
}
