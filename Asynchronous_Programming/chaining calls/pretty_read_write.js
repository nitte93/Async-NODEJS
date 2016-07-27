var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'target');

fs.mkdir(dir, mkdirped);

function mkdirped(err){
  if(err){
    handleError(err);
  }else{
    fs.readFile(source,  haveFile)
  }
}
function haveFile(err, content){
  if(err){
    handleError(err);
  }else{
    fs.writeFile(target, content, wroteFile)
  }
}
function wroteFile(err){
  if (err) {
    handleError(err)
  }else{
    console.log('All done');
  }
}
function handleError(err){
  console.error(err);
}
