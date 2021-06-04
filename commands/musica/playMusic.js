const ytdl = require('ytdl-core')

const log = require('./log.js')
const searchMusic = require('./searchMusic.js')
module.exports = async (message, musicArg, client) => {
  let musicLink = musicArg
  if (message.member.voice.channel == null) return message.channel.send("Entre em um canal");
  let Vchannel = message.member.voice.channel
  let connection = await Vchannel.join()
  
  if(!Vchannel) {
    await message.channel.send('entra num chat de voz mano')
    return
  }
  if (!ytdl.validateURL(musicLink)) {
    musicLink = await searchMusic(musicLink)
    return
  }
  let music = ytdl(musicLink)
  connection.play(music)

  log(message.channel, 'playing')
  if (!client.VConnections) client.VConnections = {}
  client.VConnections[Vchannel.id] = connection 
}
