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
    console.log('é')
    data = await getMusic(ytdl.getURLVideoID(musicLink))
  }
  else {
    data = await searchMusic(musicLink)
  }
  
  //connection.list.push(data)
  console.log(await data.url)

  if (!connection.dispatcher) {
    const dispatcher = await connection.play(ytdl(await data.url))
    connection.dispatcher = dispatcher
    dispatcher.on('finished',()=>{
      message.channel.send('cabo ;-;')
    })
  }
  /*
  Log(message.channel, 'queued', data)
  
  message.channel.send(musicLink)
  let music = ytdl(musicLink)
  connection.play(music)
  
  log(message.channel, 'playing',title)*/
}