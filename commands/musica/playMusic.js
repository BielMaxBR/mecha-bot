const ytdl = require('ytdl-core')

const log = require('./log.js')

module.exports = async (message, musicLink) => {
  let Vchannel = message.member.voice.channel
  let connection = await Vchannel.join()
  
  if(!Vchannel) {
    await message.channel.send('entra num chat de voz mano')
    return
  }
  if (!ytdl.validateURL(musicLink)) {
    await message.channel.send('insira um link adequado')
    return
  }
  let music = ytdl(musicLink)
  connection.play(music)
  log(message.channel, 'playing')

}