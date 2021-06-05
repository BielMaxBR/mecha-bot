module.exports = async ({ client, message }) => {
  let Vchannel = message.member.voice.channel
  if (!Vchannel) {
    message.channel.send('Entre em um chat de voz caramba \'-\'')
    return
  }
  client.music.next(Vchannel.id)

}