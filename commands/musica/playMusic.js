const ytdl = require('ytdl-core')

const Log = require('./log.js')
const searchMusic = require('./searchMusic.js')
const getMusic = require('./getMusic.js')
module.exports = async (message, musicArg, client) => {
  let Vchannel = message.member.voice.channel
  let musicLink = musicArg

  if (!Vchannel) {
    message.channel.send("Voce nao esta em um chat de voz")
    return
  }
  if (client.Vconnections === null) client.Vconnections = {}
  if (client.Vconnections[Vchannel.id] === null) client.Vconnections[Vchannel.id] = {}
  let connection = client.Vconnections[Vchannel.id]

  if (connection === {}) {
    connection = await Vchannel.join()
    client.Vconnections[Vchannel.id] = connection
  }
  if (ytdl.validateURL(musicLink)) {
    let data = await getMusic(ytdl.getURLVideoID(musicLink))
  }

  let data = await searchMusic(musicLink)
  connection.list.push(data)
  client.Vconnections[Vchannel.id] = connection
  console.log(connection)
  message.channel.send(Object.keys(connection))
  Log(message.channel, 'queued', data)
  /*
  message.channel.send(musicLink)
  let music = ytdl(musicLink)
  connection.play(music)
  
  log(message.channel, 'playing',title)
  if (!client.VConnections) client.VConnections = {}
  client.VConnections[Vchannel.id] = connection */
}