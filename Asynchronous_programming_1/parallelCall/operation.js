module.exports = function composedCall(args, cb){

  var pending = 0;
  var results = [];
  var calledBack = false;

  callback1(args,handleResult());
  callback2(args,handleResult());
  callback3(args,handleResult());

  function handleResult(){
    var order = pending;
    pending ++;
    return function(err, result){
      pending --;
      if(err){
        callback(err);
      }else{
        results[order] = result;
        if(!pending){
          callback(null, results);
        }
      }
    }
  }
  function callback(err, value){
    if(! calledBack){
      calledBack = true;
      cb(err, value)
    }
  }
}


function callback1(args ,callback){
  setTimeout(callback, randomTimeout(), null, 1);
}

function callback2(args ,callback){
  setTimeout(callback, randomTimeout(), null, 2);
}
function callback3(args ,callback){
  setTimeout(callback, randomTimeout(), null, 3);
}

//utils
function randomTimeout(){
  return Math.floor(Math.random() * 1e3);
}

function randomValue(){
  return Math.floor(Math.random() * 1e10);
}
