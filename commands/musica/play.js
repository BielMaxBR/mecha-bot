module.exports = async ({ client, message, args }) => {
  if (!args[0]) {
    message.channel.send('não mande nada vazio se não eu quebro mano!')
    return
  }
  let Vchannel = message.member.voice.channel
  if (!Vchannel) {
    message.channel.send('Entre em um chat de voz caramba \'-\'')
    return
  }
  let text = ''
  args.forEach(arg => {
    text += arg + " "
  });
  client.music.addQueue(text, message.member.voice.channel, message.channel,message.author)
}