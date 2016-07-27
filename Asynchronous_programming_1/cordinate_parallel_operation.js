module.exports = function composedCall(args, callback){
  callback1(args, handlingError(function(result1){
      callback2(args, handlingError(function(result2){
        callback3(args, handlingError(function(result3){
          callback(null, [result1, result2, result3]);
        }));
      }));
  }));

  function handlingError(fn){
    return function(err, result){
      if(err){
        callback(err)
      }else{
          fn(result);
      }
    }
  }
}


function callback1(args ,callback){
  setTimeout(callback, randomTimeout(), null, randomValue());
}

function callback2(args ,callback){
  setTimeout(callback, randomTimeout(), null, randomValue());
}
function callback3(args ,callback){
  setTimeout(callback, randomTimeout(), null, randomValue());
}

//utils
function randomTimeout(){
  return Math.floor(Math.random() * 1e3);
}

function randomValue(){
  return Math.floor(Math.random() * 1e10);
}
