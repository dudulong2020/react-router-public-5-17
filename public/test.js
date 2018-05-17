let pathToRegExp = require('path-to-regexp');


let reg = pathToRegExp('/home',[],{end:true});
console.log(reg.test('/home'))