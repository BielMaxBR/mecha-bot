const fs = require("fs");

module.exports = ({ message, args }) => {
  if (message.author.id != '434089428160348170' && message.author.id != "597926883069394996") return;
  let texto = ''
  for (let i = 1; i < args.length; i++) {
    texto += args[i] + " "
  }
  fs.writeFile(__dirname + '/' + args[0], texto, () => { console.log('ceirado') })
}