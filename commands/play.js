
const playMusic = require('./musica/playMusic.js')

module.exports = async({client, message, args}) => {
  if (!args[0]) {
    message.channel.send('não mande nada vazio se não eu quebro mano!')
    return
  }
  playMusic(message, args[0], client)
}