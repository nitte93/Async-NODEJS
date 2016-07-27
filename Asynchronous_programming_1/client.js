var paralleCall = require('./cordinate_parallel_operation');

paralleCall({some:'args'}, function(err, result){
  if(err){
    console.error(err);
  }else{
    console.log('successful call', result);
  }
})
