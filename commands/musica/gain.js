module.exports = async ({ client, message , args}) => {
  if (!args[0]) {
    message.channel.send('não mande nada vazio se não eu quebro mano!')
    return
  }
  let Vchannel = message.member.voice.channel
  if (!Vchannel) {
    message.channel.send('Entre em um chat de voz caramba \'-\'')
    return
  }
  client.music.gain(Vchannel.id, args[0])
}