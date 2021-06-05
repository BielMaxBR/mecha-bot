const leave = require('./leave.js')

module.exports = async (client,message) => {
  let Vchannel = message.member.voice.channel

  if (!Vchannel) {
    message.channel.send("Voce não está em um chat de voz")
    return
  }
  if (client.Vconnections == null) {
    client.Vconnections = {}
  }
  let clientVChannel = message.guild.voiceConnection
  let connection = await Vchannel.join()
  if(client.Vconnections[Vchannel.id] == null || clientVChannel != Vchannel) {
    //message.channel.send("eu já estou nesse chat de voz!")
  
    console.log(Object.keys(connection))
    if(!connection.list) connection.list = []
    if(!connection.index) connection.index = 0
    
    client.Vconnections[Vchannel.id] = connection

    connection.on('disconnect',()=>{
      leave(client,message)
    })
  }
  return connection
}