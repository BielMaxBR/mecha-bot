module.exports = async ({client,message,args}) => {
  console.log(client.Vconnections[message.member.voice.channel.id])
}