
const fs = require("fs");

module.exports = ({ message, args }) => {
  fs.readFile(__dirname +"/"+ args[0], 'utf8', (err, data) => {
    if (err) {
      message.channel.send(err);
      return
    }
    message.channel.send(data)
  })
}