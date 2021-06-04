const leave = require("./musica/leave.js")

module.exports = ({client,message}) => {
  leave(client,message)
  message.channel.send('saindo...')
}