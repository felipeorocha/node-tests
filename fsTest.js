const fs = require('fs');

const callback = data => {
  return data.toString()
}

const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(callback(data));
    });
  });
}

module.exports = readFile
