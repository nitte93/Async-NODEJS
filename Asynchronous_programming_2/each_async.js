module.exports  = eachAsync;

function eachAsync(messages, iterate ,cb){
  var pending = messages.length;
  var calledback = false;

  messages.forEach(function(elem){
    iterate(elem, terminated);
  });

  function terminated(err){
    pending --;
    if(err){
      callback(err);
    }else if(!pending){
      callback();
    }
  }

  function callback(err){
    if(!calledback){
      calledback = true;
      cb(err);
    }
  }
}
