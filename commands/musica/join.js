module.exports = (client,message) => {
  let Vchannel = message.member.voice.channel

  if (!Vchannel) {
    message.channel.send("Voce não está em um chat de voz")
    return
  }
  if (client.Vconnections == null) {
    client.Vconnections = {}
  }
  let clientVChannel = message.guild.voiceConnection
  if(client.Vconnections[Vchannel.id] != null || clientVChannel == Vchannel) {
    message.channel.send("eu já estou nesse chat de voz!")
    return
  }

  let connection = Vchannel.join()

  client.Vconnections[Vchannel.id] = connection
  message.channel.send('entrando!')

}