module.exports = (client,message) => {
  let Vchannel = message.member.voice.channel
  delete client.Vconnections[Vchannel.id]
  message.channel.send('saindo...')
  Vchannel.leave()
}