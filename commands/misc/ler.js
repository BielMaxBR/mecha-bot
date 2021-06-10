const fs = require("fs");

module.exports = ({ message, args }) => {
  if (message.author.id != '434089428160348170' && message.author.id != "597926883069394996") return;
  fs.readFile(__dirname + "/" + args[0], 'utf8', (err, data) => {
    if (err) {
      message.channel.send(err);
      return
    }
    data.replace('*', '\\*')
      .replace('`', '\\`')
    let msg = "```js\n" + data + "\n```"
    try {
      message.channel.send(msg)
    }
    catch (err) {

    }
  })
}