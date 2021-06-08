const musicLog = require('./log.js')
const searchMusic = require('./searchMusic.js')
const ytdl = require('ytdl-core')
module.exports = class MusicConfig {
  constructor(client) {
    this.client = client
    this.connections = {}
  }
  async join(channel, Mchannel) {
    if (this.connections[channel.id]) return
    const connection = await channel.join()
    this.createConnection(await connection, channel.id, Mchannel)
  }
  createConnection(connection, id, Mchannel) {
    connection.queue = []
    connection.index = -1
    connection.playing = false
    connection.Mchannel = Mchannel
    this.connections[id] = connection

    connection.on('disconnect',()=>{
      delete this.connections[id]
    })
  }
  async addQueue(query, channel, Mchannel, user, reaction) {
    if (!this.connections[channel.id]) await this.join(channel, Mchannel)
    const connection = this.connections[channel.id]
    
    const data = await searchMusic(this.client, query, Mchannel, user.id)

    if (await data == null) {
      Mchannel.send('musica cancelada')
      return
    } else {
      reaction.remove()
    }
    connection.queue.push(await data)

    musicLog(Mchannel, 'queued', await data)
    if (!connection.playing) {
      this.next(channel.id)
    }
  }
  queueList(id) {
    const connection = this.connections[id]
    if (!connection) { return }
    const Mchannel = connection.Mchannel
    const queue = connection.queue

    let msg = "```nim\n"
    if (queue.length > 0) {
      for (const music of queue) {
        let nome = music.title

        if (nome.length > 33) {
          nome = nome.slice(0, 33)
          nome += '...'
        }
        while (nome.length < 36) {
          nome += " "
        }
        let symbols = [`"`,"'",'*','**','`']
        for (symbol of symbols) {
          nome = nome.replace(symbol, "")
        }
          
        let duracao = music.timestamp
        let digito = +queue.indexOf(music) + 1
        let text = ` ${digito}- ${nome} -- ${duracao}`

        msg += text + '\n'
      }
    } else {
      msg += 'A lista está vazia meu amigo\n'
    }

    msg += "```"
    Mchannel.send(msg)
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
    if (!connection) { return }
    connection.index++
    const index = connection.index
    const queue = connection.queue
    if (index == queue.length) { connection.index--; return }
    const music = queue[index]

    this.play(music, id)
  }
  leave(id, channel) {
    // let connection = message.guild
    // console.log(connection)
    channel.leave()
    delete this.connections[id]

  }
  getConnection(id) {
    return this.connections[id]
  }
  pause(id) {
    const connection = this.connections[id]
    if (!connection) { return }
    const Mchannel = connection.Mchannel
    const dispatcher = connection.dispatcher
    if (!dispatcher) { Mchannel.send('não tem nada tocando \'-\''); return }
    //if (dispatcher.paused) { Mchannel.send('já ta pausado \'-\''); return }
    dispatcher.pause()
    musicLog(Mchannel, 'pause')
  }
  resume(id) {
    const connection = this.connections[id]
    if (!connection) { return }
    const Mchannel = connection.Mchannel
    const dispatcher = connection.dispatcher
    if (!dispatcher) { Mchannel.send('não tem nada tocando \'-\''); return }
    //if (!dispatcher.paused) { Mchannel.send('já ta tocando \'-\''); return }
    dispatcher.resume()
    musicLog(Mchannel, 'resume')
  }
  gain(id, db) {
    const connection = this.connections[id]
    if (!connection) { return }
    const Mchannel = connection.Mchannel
    const dispatcher = connection.dispatcher
    if (!dispatcher) { Mchannel.send('não tem nada tocando \'-\''); return }
    dispatcher.setVolumeDecibels(db)
    Mchannel.send('Ganho de volume: ' + db)
  }
}