
const fs = require("fs");

module.exports = ({ message, args }) => {
  let texto = ''
  for (let i = 1; i < args.length; i++) {
    texto += args[i] + " "
  }
  fs.writeFile(__dirname + '/' + args[0], texto, () => { console.log('ceirado') })
}