module.exports  = mapAsync;

function mapAsync(messages, map ,cb){
  var results = [];
  var pending = messages.length;
  var calledback = false;

  messages.forEach(function(elem, index){
    map(elem, terminating(index));
  });

  function terminating(index){

    return function terminated(err, result){
        pending --;
        if(err){
          callback(err);
        }else{
          results[index] = result
          if(!pending){
           callback(null, results);
         }
        }
      }
  }

  function callback(err, results){
    if(!calledback){
      calledback = true;
      cb(err, results);
    }
  }
}
