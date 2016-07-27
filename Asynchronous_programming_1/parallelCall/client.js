var paralleCall = require('./operation');

paralleCall({some:'args'}, function(err, result){
  if(err){
    console.error(err);
  }else{
    console.log('successful call', result);
  }
})
