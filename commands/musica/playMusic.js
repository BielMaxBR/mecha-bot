const ytdl = require('ytdl-core')

const Log = require('./log.js')
const searchMusic = require('./searchMusic.js')
const getMusic = require('./getMusic.js')
const join = require('./join.js')

module.exports = async (message, musicArg, client) => {
  const connection = await join(client,message)
  let musicLink = musicArg
  let data = {}
  if (ytdl.validateURL(musicLink)) {
    musicLink = await getMusic(ytdl.getURLVideoID(musicLink))
  }
  
  data = await searchMusic(musicLink)
  
  //connection.list.push(data)

  if (!connection.dispatcher) {
    connection.play(ytdl(data.url))
  }
  /*
  console.log(connection.dispatcher)
  Log(message.channel, 'queued', data)
  
  message.channel.send(musicLink)
  let music = ytdl(musicLink)
  connection.play(music)
  
  log(message.channel, 'playing',title)*/
}