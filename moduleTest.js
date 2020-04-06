const path = require('path')
const readFile = require('./fsTest');
const filePath = path.resolve('teste.txt');

readFile(filePath)
  .then(console.log)
  .catch(console.error)
