var fs = require('fs');
var path = require('path');

var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'target');

fs.mkdir(dir, handlingError(mkdirped));

function mkdirped(err){
    fs.readFile(source,  handlingError(haveFile))
}

function haveFile(err, content){
    fs.writeFile(target, content, handlingError(wroteFile))
}
function wroteFile(err){
    console.log('All done');
}

function handlingError(callBack){
  return function (err, result) {
    if(err){
      handleError(err)
    }else{
      callBack(result);
    }
  }
}

function handleError(err){
  console.error(err);
}
