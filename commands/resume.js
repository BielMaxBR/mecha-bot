const log = require('./musica/log.js')

module.exports = async ({ client, message }) => {
  let Vchannel = message.member.voice.channel
  let connection = client.VConnections[Vchannel.id]
  if (!connection) return
  let dispatcher = connection.dispatcher
  if (!Vchannel) {
    await message.channel.send('entra num chat de voz mano')
    return
  }
  console.log(dispatcher.paused)
  if (dispatcher.paused) {
    dispatcher.resume()
    log(message.channel, 'resume')
  } else {
    message.channel.send('ja ta rodando mano \'-\'')
  }

}