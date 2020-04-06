const { promises: fs } = require("fs");

// const callback = data => {
//   return data
// }

const readFile = async file => {
  try {
    let result = await fs.readFile(file, (err, data) => data)
    return result.toString()
  } catch (e) {
    console.log("Erro!", e);
  }
}

module.exports = readFile
