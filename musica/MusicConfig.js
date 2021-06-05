const musicLog = require('./log.js')
const searchMusic = require('./searchMusic.js')
const ytdl = require('ytdl-core')
module.exports = class MusicConfig {
  constructor() {
    this.connections = {}
  }
  async join(channel, Mchannel) {
    const connection = await channel.join()
    this.createConnection(await connection, channel.id, Mchannel)
  }
  createConnection(connection, id, Mchannel) {
    connection.queue = []
    connection.index = -1
    connection.playing = false
    connection.Mchannel = Mchannel
    this.connections[id] = connection
  }
  async addQueue(query, channel, Mchannel) {
    if (!this.connections[channel.id]) await this.join(channel, Mchannel)
    const connection = this.connections[channel.id]
    const data = await searchMusic(query)
    connection.queue.push(data)

    musicLog(Mchannel, 'queued', data)
    if (!connection.playing) {
      this.next(channel.id)
    }
  }
  async play(music, id) {
    const connection = this.connections[id]
    musicLog(connection.Mchannel, 'playing', music)
    const dispatcher = await connection.play(ytdl(music.url))
    connection.playing = true
    dispatcher.on('finish', () => {
      connection.playing = false
      this.next(id)
    })
  }
  next(id) {
    const connection = this.connections[id]
    connection.index++
    const index = connection.index
    const queue = connection.queue
    if (index == queue.length) { connection.index--; return }
    const music = queue[index]

    this.play(music, id)
  }
  leave(id) {

  }
  getConnection(id) {
    return this.connections[id]
  }
  pause(id) {
    const connection = this.connections[id]
    const Mchannel = connection.Mchannel
    const dispatcher = connection.dispatcher
    if (!dispatcher) { Mchannel.send('não tem nada tocando \'-\''); return }
    if (dispatcher.paused) { Mchannel.send('já ta pausado \'-\''); return }
    dispatcher.pause()
    musicLog(Mchannel,'pause')
  }
  resume(id) {
    const connection = this.connections[id]
    const Mchannel = connection.Mchannel
    const dispatcher = connection.dispatcher
    if (!dispatcher) { Mchannel.send('não tem nada tocando \'-\''); return }
    if (!dispatcher.paused) { Mchannel.send('já ta tocando \'-\''); return }
    dispatcher.resume()
    musicLog(Mchannel,'resume')
  }
}