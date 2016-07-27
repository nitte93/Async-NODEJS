//Parallel asynchronous iteration

var eachAsync = require('./each_async');

var messages = ['Message 1','Message 2','Message 3'];

eachAsync(messages, send, done);

function done(err){
    if(err){
      console.error(err);
    }else{
      console.log('all messages sent');
    }
}
function send(message, callback){
  var err = Math.random() > 0.8 ? new Error('Message not sent') : null;
   setTimeout(callback, randomTimeout(), err);
}

function randomTimeout(){
  return Math.floor(Math.random() * 1e3);
}
