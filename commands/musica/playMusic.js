const ytdl = require('ytdl-core')

const Log = require('./log.js')
const searchMusic = require('./searchMusic.js')
const getMusic = require('./getMusic.js')
module.exports = async (message, musicArg, client) => {
  

  if (Object.keys(connection).length == 0) {
    connection = await Vchannel.join()
    client.Vconnections[Vchannel.id] = connection
  }
  
  let data = {}
  if (ytdl.validateURL(musicLink)) {
    data = await getMusic(ytdl.getURLVideoID(musicLink))
  }
  
  data = await searchMusic(musicLink)
  if(!connection.list) connection.list = []
  if(!connection.index) connection.index = 0
  
  connection.list.push(data)
  client.Vconnections[Vchannel.id] = connection
  console.log(connection.dispatcher)
  Log(message.channel, 'queued', data)
  /*
  message.channel.send(musicLink)
  let music = ytdl(musicLink)
  connection.play(music)
  
  log(message.channel, 'playing',title)
  if (!client.VConnections) client.VConnections = {}
  client.VConnections[Vchannel.id] = connection */
}