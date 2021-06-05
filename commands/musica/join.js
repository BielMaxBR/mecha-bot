const join = require('../../musica/join.js')

module.exports = async ({client,message}) => {
  join(client,message)
  message.channel.send('entrando!')
}